import CustomText from "@/components/ui/Text";
import WordsRotate from "@/components/ui/words-rotate";

import "./hero.css";

export default function Hero() {
  return (
    <div className="section_container">
      <div className="hero_text">
        <CustomText className="hero_title">
          Passionate <i>developer</i> of web and mobile solutions,
        </CustomText>
        <CustomText className="hero_title" style={{ overflow: "hidden" }}>
          crafted for&nbsp;
          <WordsRotate words={["you.", "us.", "all."]} />
        </CustomText>
      </div>
    </div>
  );
}
