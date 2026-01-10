import { motion } from "framer-motion";
import CustomText from "@/components/ui/custom-text";
import { timelineItems } from "@/services/data";
import Pils from "@/components/ui/pils";
import React from "react";
import { useWindowSize } from "@/services/hook/useWindowSize";
import { mobileWidth } from "@/services/const";

import "./timeline.css";

export default function Timeline() {
  const { width } = useWindowSize();

  const isMobileDevice = width && width <= mobileWidth;

  const renderDot = React.useCallback((item: (typeof timelineItems)[0]) => {
    return (
      <div className={`timeline-dot ${item.accent ? "accent" : "regular"}`} />
    );
  }, []);
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-line" />
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
              {!isMobileDevice ? renderDot(item) : undefined}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
