import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import CustomText from "@/components/ui/custom-text";
import Pils from "@/components/ui/pils";
import CustomModalPage from "@/components/blocks/custom-modal";
import { projects } from "@/services/data";
import { absoluteUrl, OWNER, ROUTES } from "@/services/data/site";
import ProjectLinks from "./ProjectLinks";

import "./project.css";

type ProjectPageProps = { params: Promise<{ id: string }> };

const META_DESCRIPTION_LENGTH = 155;

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id.toString() }));
}

const findProject = (id: string) =>
  projects.find((project) => project.id.toString() === id);

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = findProject((await params).id);
  if (!project) return {};

  const title = `${project.name} – ${OWNER.name}`;
  const description = project.description.fr
    .replace(/\s+/g, " ")
    .slice(0, META_DESCRIPTION_LENGTH);
  const url = absoluteUrl(ROUTES.project(project.id));

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [absoluteUrl(project.image)],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = findProject((await params).id);
  if (!project) notFound();

  return (
    <CustomModalPage backgroundText={project.name}>
      <div className="project_modal_header flex_row_between_center">
        <CustomText
          as="h1"
          isTitle
          className="title_as_h2"
          style={{ color: "var(--secondary-color)" }}
        >
          {project.name}
        </CustomText>
        <ProjectLinks project={project} />
      </div>
      <div className="project_modal_separator" />
      <div className="project_modal_techno_image flex_row_between">
        <Image
          src={project.image}
          alt={project.name}
          width={300}
          height={300}
          className="project_modal_image"
        />
        <div className="project_modal_techno flex_row">
          {project.techno.map((tech) => (
            <Pils
              key={tech.name}
              containerStyle={{
                paddingInline: "0.8rem",
                paddingBlock: "0.4rem",
              }}
              dark
              textStyle={{ fontSize: "0.9rem" }}
            >
              {tech.name}
            </Pils>
          ))}
        </div>
      </div>
      <CustomText
        className="project_text_bold"
        style={{ marginBottom: "2rem" }}
      >
        {project.year} / {project.format.join(" - ")} /{" "}
        {project.type.join(" - ")} / Projet {project.style}
      </CustomText>
      <CustomText className="project_text_font">
        {project.description.fr}
      </CustomText>
    </CustomModalPage>
  );
}
