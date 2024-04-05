export enum FlashCardsType {
  English = "English",
  Hebrew = "Hebrew",
  HebrewAudio = "Hebrew Audio",
}

export interface FlashcardButton {
  type: FlashCardsType;
}

export interface CardContent {
  type: FlashCardsType;
  content: string;
}

export interface CardData {
  id: number;
  contents: CardContent[];
  isFavorite: boolean;
  subject?: string
}
