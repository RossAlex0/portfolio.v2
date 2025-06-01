import Text from "@/components/elements/Text";
import "./header.css";
import ButtonContact from "@/components/blocks/contact-button";

export default function Header() {
  const infos = [
    { link: "", label: "Projets" },
    { link: "", label: "Infos" },
    { link: "", label: "Contact" },
  ];

  return (
    <header>
      <div className="header_text">
        <Text title>Alex Rossignol</Text>
        <span className="separator"></span>
        {infos.map((info) => (
          <Text key={info.label}>{info.label}</Text>
        ))}
      </div>
      <ButtonContact />
    </header>
  );
}
