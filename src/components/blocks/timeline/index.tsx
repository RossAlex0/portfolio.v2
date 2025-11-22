import { motion } from "framer-motion";
import CustomText from "@/components/ui/custom-text";
import { timelineItems } from "@/services/data";

import "./timeline.css";
import Pils from "@/components/ui/pils";

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.8, once: true }}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div
                className={`timeline-content ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <Pils
                  containerStyle={{
                    display: "inline-block",
                    marginBottom: "10px",
                  }}
                  dark={item.accent}
                >
                  {item.year}
                </Pils>
                <CustomText isTitle className="timeline-item-title">
                  {item.title}
                </CustomText>
                <CustomText className="timeline-item-desc">
                  {item.description}
                </CustomText>
              </div>
              <div
                className={`timeline-dot ${item.accent ? "accent" : "regular"}`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
