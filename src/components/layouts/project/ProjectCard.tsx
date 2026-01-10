"use client";

import { AnimatePresence, motion } from "framer-motion";
import Pils from "@/components/ui/pils";
import CustomIcon from "@/components/ui/custom-icon";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/services/data/type";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const techs = project.techno.slice(0, 7);

  return (
    <AnimatePresence>
      <Link
        href={`/project/${project.id}`}
        aria-label={`Voir ${project.name}`}
        prefetch={false}
        className="project_image_link"
      >
        <motion.div
          className="card_container"
          initial={{
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            opacity: 0,
            y: 70,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -4,
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)",
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.6 + index / 10, ease: "easeInOut" }}
        >
          <div className="header_pils flex_row">
            <Pils dark>{project.name}</Pils>
          </div>

          <div className="bottom_pils flex_row">
            {techs.map((tech) => (
              <Pils
                dark
                containerStyle={{
                  paddingTop: "0.5rem",
                  paddingBottom: "0.3rem",
                  paddingInline: "0.6rem",
                }}
                key={tech.name}
              >
                <CustomIcon name={tech.icon} color="#fffcee" size={20} />
              </Pils>
            ))}
          </div>

          <Image
            src={project.image}
            alt={project.name}
            width={project.image_size.width}
            height={project.image_size.height}
            style={{ cursor: "pointer" }}
          />
        </motion.div>
      </Link>
    </AnimatePresence>
  );
}
