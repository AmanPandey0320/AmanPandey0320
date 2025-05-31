import type { StaticImageData } from "next/image";

export default interface EducationData {
  id: string;
  img: string | StaticImageData;
  name: string;
  duration: string;
  degree: string;
  course: string;
  marks: string;
  summary: string;
  subjects: string[];
}