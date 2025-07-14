import WordsRotate from "@/components/ui/words-rotate";
import CustomText from "@/components/ui/custom-text";

import "./hero.css";

export default function Hero() {
  return (
    <div className="hero section_container">
      <div className="hero_text">
        <CustomText className="hero_title">
          Développeur passionné de <br />
          solutions web et mobile,
        </CustomText>
        <CustomText className="hero_title" style={{ overflow: "hidden" }}>
          conçues pour&nbsp;
          <WordsRotate words={["vous.", "nous.", "tous."]} />
        </CustomText>
      </div>
    </div>
  );
}
