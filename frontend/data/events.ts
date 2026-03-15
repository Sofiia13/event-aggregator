import type { EventCategory } from "@/data/eventTypes";

type MockEvent = {
  id: number;
  title: string;
  date: string;
  location: string;
  category: EventCategory;
  image: string;
};

export const mockEvents: MockEvent[] = [
  {
    id: 1,
    title: "Jazz Night",
    date: "2026-04-20",
    location: "Lviv Opera",
    category: "Музика",
    image: "/musicEventImg.jpeg",
  },
  {
    id: 2,
    title: "IT Meetup",
    date: "2026-04-25",
    location: "Lviv IT Cluster",
    category: "Технології",
    image: "/itEventImg.png",
  },
  {
    id: 3,
    title: "Tech Conference",
    date: "2026-05-10",
    location: "Lviv Convention Center",
    category: "Технології",
    image: "/itEventImg.png",
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    date: "2026-05-13",
    location: "Lviv Innovation Hub",
    category: "Фестивалі",
    image: "/festival-img.jpg",
  },
  {
    id: 5,
    title: "Вистава 'ВІН'",
    date: "2026-04-11",
    location: "ZAG Lviv",
    category: "Мистецтво та театр",
    image: "/exhibitionEventImg.jpeg",
  },
];
