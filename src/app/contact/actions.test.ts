import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { sendContactMessage } from "./actions";

const validForm = {
  name: "Alex",
  email: "alex@example.com",
  subject: "Hello",
  message: "Un message",
};

const fetchMock = vi.fn<typeof fetch>();

beforeEach(() => {
  vi.stubGlobal("fetch", fetchMock);
  vi.stubEnv("URL_SERVER", "https://mail.example.com/send");
  vi.stubEnv("TOKEN_SERVER", "secret-token");
  vi.spyOn(console, "error").mockImplementation(() => {});
  fetchMock.mockResolvedValue(new Response("{}", { status: 200 }));
});

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
  fetchMock.mockReset();
});

describe("defaults", () => {
  it("sends the API key header and the JSON body", async () => {
    await sendContactMessage(validForm, "");

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://mail.example.com/send");
    expect(init?.method).toBe("POST");
    expect(init?.headers).toMatchObject({ "x-api-key": "secret-token" });
    expect(JSON.parse(String(init?.body))).toEqual(validForm);
  });
});

describe("usage", () => {
  it("returns ok when the mail server accepts the message", async () => {
    await expect(sendContactMessage(validForm, "")).resolves.toEqual({
      ok: true,
    });
  });

  it("returns not ok when the mail server answers an error status", async () => {
    fetchMock.mockResolvedValue(new Response("{}", { status: 500 }));
    await expect(sendContactMessage(validForm, "")).resolves.toEqual({
      ok: false,
    });
  });
});

describe("edge cases", () => {
  it("fakes success without sending when the honeypot is filled", async () => {
    await expect(sendContactMessage(validForm, "http://spam")).resolves.toEqual(
      {
        ok: true,
      }
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects an invalid payload without calling the server", async () => {
    const result = await sendContactMessage(
      { ...validForm, email: "nope" },
      ""
    );
    expect(result).toEqual({ ok: false });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("fails safely when env variables are missing", async () => {
    vi.stubEnv("TOKEN_SERVER", "");
    await expect(sendContactMessage(validForm, "")).resolves.toEqual({
      ok: false,
    });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("fails safely when the mail server is unreachable", async () => {
    fetchMock.mockRejectedValue(new TypeError("fetch failed"));
    await expect(sendContactMessage(validForm, "")).resolves.toEqual({
      ok: false,
    });
  });
});
