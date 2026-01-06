import CustomText from "@/components/ui/custom-text";
import CustomIcon from "@/components/ui/custom-icon";
import { motion } from "framer-motion";

import "./footer.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="footer_container flex_column_center_center">
      <motion.div
        className="footer_block flex_column"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2, once: true }}
      >
        <div className="footer_head_block flex_row">
          <div className="footer_head_infos flex_column">
            <div className="infos_title flex_row">
              <CustomIcon name="FaCode" color="#fffcee" className="icons" />
              <CustomText>Full Stack Developer & Mobile Developer</CustomText>
            </div>
            <CustomText className="infos_user">Toulouse, France.</CustomText>
            <CustomText className="infos_user">
              <a href="mailto:alexnw33910@gmail.com">alexnw33910@gmail.com</a>
            </CustomText>
            <CustomText className="infos_user">
              <a href="tel:+33666447169">06 66 44 71 69</a>
            </CustomText>
          </div>
          <div className="footer_head_infos flex_column">
            <CustomText className="infos_user">
              Passionné, rigoureux, toujours en mouvement - Du concept à la mise
              en production - Le détail fait la différence.
            </CustomText>
            <div className="footer_link flex_row">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/RossAlex0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomIcon name="FaGithub" size={28} color="#fffcee" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://gitlab.com/alex.rossignol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomIcon name="SiGitlab" size={28} color="#fffcee" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://linkedin.com/in/rossignolalex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CustomIcon name="SiLinkedin" size={28} color="#fffcee" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.2 }}
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/contact")}
              >
                <CustomIcon name="TbMail" size={28} color="#fffcee" />
              </motion.button>
            </div>
          </div>
        </div>
        <div className="footer_footer flex_row_between">
          <CustomText className="infos_user legal_link">
            © 2025 – Tous droits réservés · Alex Rossignol
          </CustomText>
          <div className="footer_legal flex_row">
            <Link href="/confidentialite" style={{ color: "#fffcee" }}>
              <CustomText className="infos_user legal_link">
                Politique de confidentialités
              </CustomText>
            </Link>
            <CustomText className="infos_user legal_link">-</CustomText>
            <Link href="/policy" style={{ color: "#fffcee" }}>
              <CustomText className="infos_user legal_link">
                Mentions légales
              </CustomText>
            </Link>
          </div>
        </div>
      </motion.div>
      <h1 className="title_footer">Developpeur Full Stack.</h1>
    </footer>
  );
}
