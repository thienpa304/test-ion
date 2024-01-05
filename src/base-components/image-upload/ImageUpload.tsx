import React, { useState, ChangeEvent } from "react";
interface ImageUploadProps {
  text?: string;
}
const ImageUpload: React.FC<ImageUploadProps> = ({ text = "Image Upload" }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>{text}</h1>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {selectedImage && (
        <div>
          <h2>Preview</h2>
          <img
            src={selectedImage}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
