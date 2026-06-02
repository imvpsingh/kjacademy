export interface ContactInquiry {
  id: string;
  fullName: string;
  phoneNumber: string;
  fatherName: string;
  courseSelected: string;
  city: string;
  gender: 'boys' | 'girls';
  weight: number; // in kg
  height: number; // in cm
  qualification: string;
  submittedAt: string;
  status: 'New' | 'Reviewed' | 'Contacted';
  notes?: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'Toppers' | 'Premises' | 'Training';
  description?: string;
}

export interface AcademyService {
  id: string;
  title: string;
  hindiTitle: string;
  description: string;
  hindiDescription: string;
  iconName: string;
  bullets: string[];
}
