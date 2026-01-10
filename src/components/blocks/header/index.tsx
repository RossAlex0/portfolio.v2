"use client";

import CustomText from "@/components/ui/custom-text";
import CustomButton from "@/components/ui/custom-button";

import "./header.css";
import Link from "next/link";

export default function Header() {
  const infos = [
    { link: "#projects", label: "Projets" },
    { link: "#skill", label: "Compétences" },
    { link: "#about", label: "À Propos" },
  ];

  return (
    <header>
      <div className="header_text">
        <CustomText isTitle>Alex Rossignol</CustomText>
        <span className="header_separator"></span>
        {infos.map((info) => (
          <Link key={info.label} href={info.link} className="nav-link">
            <CustomText>{info.label}</CustomText>
          </Link>
        ))}
      </div>
      <CustomButton href="/contact" />
    </header>
  );
}
