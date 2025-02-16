export interface Event {
  id: number;
  name: string;
  image: string;
  description: string;
  date: string;
  location: string;
  registrationLink: string;
  tags?: string[];
  organizer?: string;
  status?: "upcoming" | "ongoing" | "past";
}
