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

export interface AchievementsData {
  id: string;
  img: string | StaticImageData;
  title: string;
  issued: string;
  expires?: string;
  issuesBy: string;
  summary: string;
}