import Text from "@/components/ui/Text";
import CustomButton from "@/components/ui/custom-button";
import "./header.css";

export default function Header() {
  const infos = [
    { link: "#projects", label: "Projets" },
    { link: "#about", label: "Infos" },
    { link: "#skill", label: "Compétences" },
  ];

  return (
    <header>
      <div className="header_text">
        <Text isTitle>Alex Rossignol</Text>
        <span className="header_separator"></span>
        {infos.map((info) => (
          <a key={info.label} href={info.link} className="nav-link">
            <Text>{info.label}</Text>
          </a>
        ))}
      </div>
      <CustomButton />
    </header>
  );
}
