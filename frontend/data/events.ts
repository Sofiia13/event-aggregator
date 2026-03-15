import type { EventCategory } from "@/data/eventTypes";

type MockEvent = {
  id: number;
  title: string;
  date: string;
  location: string;
  category: EventCategory;
};

export const mockEvents: MockEvent[] = [
  {
    id: 1,
    title: "Jazz Night",
    date: "2026-04-20",
    location: "Lviv Opera",
    category: "Музика",
  },
  {
    id: 2,
    title: "IT Meetup",
    date: "2026-04-25",
    location: "Lviv IT Cluster",
    category: "Технології",
  },
  {
    id: 3,
    title: "Tech Conference",
    date: "2026-05-10",
    location: "Lviv Convention Center",
    category: "Музика",
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    date: "2026-05-13",
    location: "Lviv Innovation Hub",
    category: "Фестивалі",
  },
  {
    id: 5,
    title: "Vystavka Vin",
    date: "2026-04-11",
    location: "ZAG Lviv",
    category: "Мистецтво та театр",
  },
];
