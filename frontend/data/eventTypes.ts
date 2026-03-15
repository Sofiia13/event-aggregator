export const eventTypes = [
  "Музика",
  "Спорт",
  "Мистецтво та театр",
  "Фестивалі",
  "Технології",
] as const;

export type EventCategory = (typeof eventTypes)[number];