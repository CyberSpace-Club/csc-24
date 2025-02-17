import errorImage from "../assets/events/error.jpg";
import battleImage from "../assets/events/battle.jpg";

export const events = [
  {
    id: 1,
    name: "Error Odyssey 2.0",
    image: errorImage,
    description:
      "Join this C programming competition to test your debugging skills! Through three exciting rounds, showcase your ability to find and fix code errors. Perfect for both beginners and experienced programmers.",
    date: "February 18, 2024",
    location: "Manipal University, AB1 307, 5 Classes",
    registrationLink: "https://forms.gle/DgX3gtmogmJwwtFY8",
    tags: ["competition", "coding", "debugging", "C"],
    organizer: "Cyber Space Club",
    status: "upcoming",
  },
  {
    id: 2,
    name: "Battle Blitz 2.0",
    image: battleImage,
    description:
      "Get ready for an action-packed day of interactive challenges and social games! Join us for exciting activities, team competitions, and memorable experiences with fellow tech enthusiasts.",
    date: "February 21, 2024",
    location: "Manipal University, AB1 3rd Floor",
    registrationLink: "https://forms.gle/KLW59s17Wm68uuuZ7",
    tags: ["social games", "activities", "challenges", "fun"],
    organizer: "Cyber Space Club",
    status: "upcoming",
  },
];
