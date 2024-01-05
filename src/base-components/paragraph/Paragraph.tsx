import React from "react";

interface ParagraphProps {
  text?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text = "Paragraph" }) => {
  return <p>{text}</p>;
};

export default Paragraph;
