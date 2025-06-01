import WordsRotate from "@/components/elements/words-rotate";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <div className="home_text">
          <h2>Developer of clear, reliable web and</h2>
          <h2> mobile solutions. Clean code,</h2>
          <h2>
            crafted for <WordsRotate words={["you.", "us.", "all."]} />
          </h2>
        </div>
        <aside>hello</aside>
      </div>
    </>
  );
}
