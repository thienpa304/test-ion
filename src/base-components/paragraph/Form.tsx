import React, { useState } from "react";

interface FormData {
  [key: string]: string;
}
export interface FormProps {
  onChange?: (data: FormData) => void;
}
const Form: React.FC<FormProps> = ({ onChange }) => {
  const [formData, setFormData] = useState<FormData>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    const newData = {
      ...formData,
      [name]: value,
    };
    setFormData(newData);
    if(onChange) onChange(newData);
  };
  return (
    <div>
      <div>Paragraph</div>
      <input className="border" onChange={handleChange} name="text" />
    </div>
  );
};

export default Form;
