import Button, { FormButton } from "@/base-components/button";
import { FormProps } from "@/base-components/button/Form";
import ImageUpload, { FormImageUpload } from "@/base-components/image-upload";
import Paragraph, { FormParagraph } from "@/base-components/paragraph";
export interface BaseComponentData {
  name: string;
  type: string;
  config: { [key: string]: any };
  component: React.ComponentType;
  form: React.ComponentType<FormProps>;
}
export const BASE_COMPONENTS: BaseComponentData[] = [
  {
    name: "Button",
    type: "button",
    config: { text: "Button", massage: "This is massage" },
    component: Button,
    form: FormButton,
  },
  {
    name: "Paragraph",
    type: "paragraph",
    config: { text: "Paragraph" },
    component: Paragraph,
    form: FormParagraph,
  },
  {
    name: "Image Upload",
    type: "imageUpload",
    config: { text: "Image Upload" },
    component: ImageUpload,
    form: FormImageUpload,
  },
];
