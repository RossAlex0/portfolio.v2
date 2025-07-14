"use client";

import CustomText from "@/components/ui/custom-text";
import CustomButton from "@/components/ui/custom-button";
import { useRouter } from "next/navigation";

import "./header.css";

export default function Header() {
  const infos = [
    { link: "#projects", label: "Projets" },
    { link: "#skill", label: "Compétences" },
    { link: "#about", label: "À Propos" },
  ];

  const router = useRouter();

  return (
    <header>
      <div className="header_text">
        <CustomText isTitle>Alex Rossignol</CustomText>
        <span className="header_separator"></span>
        {infos.map((info) => (
          <a key={info.label} href={info.link} className="nav-link">
            <CustomText>{info.label}</CustomText>
          </a>
        ))}
      </div>
      <CustomButton onClick={() => router.push("/contact")} />
    </header>
  );
}
