import WordsRotate from "@/components/ui/words-rotate";
import CustomText from "@/components/ui/custom-text";
import { motion } from "framer-motion";
import CustomIcon from "@/components/ui/custom-icon";
import { useRouter } from "next/navigation";

import "./hero.css";

const onceText = true;

export default function Hero() {
  const router = useRouter();
  return (
    <div className="hero section_container">
      <motion.div
        className="hero_text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0, once: onceText }}
      >
        <CustomText className="hero_title" isTitle>
          Développeur passionné de <br />
          solutions web et mobile,
        </CustomText>
        <CustomText
          className="hero_title"
          style={{ overflow: "hidden" }}
          isTitle
        >
          conçues pour&nbsp;
          <WordsRotate words={["vous.", "nous.", "tous."]} />
        </CustomText>
      </motion.div>
      <div className="hero_link flex_row_center_center">
        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ amount: 1, once: true }}
          href="https://linkedin.com/in/rossignolalex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomIcon name="TbBrandLinkedin" size={46} color="#000000" />
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 1, once: true }}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => router.push("/contact")}
        >
          <CustomIcon name="TbMail" size={46} color="#000000" />
        </motion.button>
        <motion.a
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 1, once: true }}
          href="/meta/alex-rossignol-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomIcon name="TbFileCv" size={46} />
        </motion.a>
      </div>
    </div>
  );
}
