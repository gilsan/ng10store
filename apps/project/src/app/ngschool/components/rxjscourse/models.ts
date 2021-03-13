export interface Course {
  docId?: string;
  id: number;
  seqNo: number;
  url: string;
  iconUrl: string;
  courseListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  lessonsCount: number;
  promo: boolean;
}

export interface Lesson {
  id: number;
  description: string;
  duration: string;
  seqNo: number;
  courseId: number;
}

export interface ICourse {
  id: string;
  titles: {
    description: string;
    longDescription: string;
  };
  iconUrl: string;
  uploadedImageUrl: string;
  courseListIcon: string;
  categories: string[];
  lessonsCount: number;
}