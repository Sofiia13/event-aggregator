export const eventTypes = [
  { name: "Музика", endpoint: "/music", color: "#fce2d4" },
  { name: "Спорт", endpoint: "/sport", color: "#e8f5e9" },
  { name: "Мистецтво та театр", endpoint: "/art", color: "#fce4ec" },
  { name: "Фестивалі", endpoint: "/festivals", color: "#fff3e0" },
  { name: "Технології", endpoint: "/technology", color: "#e0f7fa" },
] as const;

export type EventType = (typeof eventTypes)[number];
export type EventCategory = EventType["name"];