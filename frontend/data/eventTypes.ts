export const eventTypes = [
  { name: "Музика", endpoint: "/music" },
  { name: "Спорт", endpoint: "/sport" },
  { name: "Мистецтво та театр", endpoint: "/art" },
  { name: "Фестивалі", endpoint: "/festivals" },
  { name: "Технології", endpoint: "/technology" },
] as const;

export type EventType = (typeof eventTypes)[number];
export type EventCategory = EventType["name"];