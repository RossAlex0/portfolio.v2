import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { iconMap } from "@/components/ui/custom-icon/type";
import { hardSkills, projects, softSkills, timelineItems, toolSkills } from ".";
import { absoluteUrl, ROUTES, SITE_URL } from "./site";

const publicFile = (path: string) => join(process.cwd(), "public", path);

describe("defaults", () => {
  it("builds the home URL without a trailing slash", () => {
    expect(absoluteUrl()).toBe(SITE_URL);
    expect(absoluteUrl(ROUTES.home)).toBe(SITE_URL);
  });

  it("builds project routes from the id", () => {
    expect(ROUTES.project(3)).toBe("/project/3");
    expect(absoluteUrl(ROUTES.project(3))).toBe(`${SITE_URL}/project/3`);
  });
});

describe("usage", () => {
  it("gives every project a unique id (used in URLs)", () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("points every project image to an existing public file", () => {
    for (const project of projects) {
      expect(existsSync(publicFile(project.image)), project.image).toBe(true);
    }
  });

  it("only uses icons that exist in the icon map", () => {
    const icons = [
      ...projects.flatMap((project) => project.techno.map((tech) => tech.icon)),
      ...softSkills.map((skill) => skill.icon),
    ];
    for (const icon of icons) expect(iconMap[icon], icon).toBeDefined();
  });
});

describe("edge cases", () => {
  it("has no empty French description", () => {
    for (const project of projects) {
      expect(project.description.fr.trim(), project.name).not.toBe("");
    }
  });

  it("has no duplicated skill (used as React keys)", () => {
    for (const list of [
      hardSkills,
      toolSkills,
      softSkills.map((s) => s.name),
    ]) {
      expect(new Set(list).size).toBe(list.length);
    }
  });

  it("lists the timeline from the most recent year", () => {
    const years = timelineItems.map((item) => Number(item.year));
    expect(years).toEqual([...years].sort((a, b) => b - a));
  });
});
