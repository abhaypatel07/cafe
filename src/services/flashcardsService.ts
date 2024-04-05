import { CardData, FlashCardsType } from '@/types/Flashcards';
import customFetch from '@/utils/fetchUtils';

export const getFlashcardsByIds = async (
  ids: string[],
  baseUrl: string = ''
): Promise<CardData[]> => {
  try {
    const response = await customFetch(`${baseUrl}/api/flashcards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ids }),
    });

    const cards = await response.json();

    const trasformed = transformFlashcardObjects(cards);
    return trasformed;
  } catch (error) {
    console.error('Error fetching getFlashcardsByCourseId:', error);
    throw error;
  }
};

export const transformFlashcardObjects = (
  flashcardFromAPI: any[]
): CardData[] => {
  const results = createflashcardDocument(flashcardFromAPI);
  return results.map(transformFlashcardObject);
};

export const transformFlashcardObject = (flashcardFromAPI: any): any => {
  return {
    id: flashcardFromAPI?.post_id ?? null,
    contents: [
      {
        type: FlashCardsType.English,
        content: flashcardFromAPI?.english_text ?? '',
      },
      {
        type: FlashCardsType.Hebrew,
        content: flashcardFromAPI?.hebrew_text ?? '',
      },
      {
        type: FlashCardsType.HebrewAudio,
        content: flashcardFromAPI?.audio_text ?? '',
      },
    ],
    lesson: flashcardFromAPI?.lesson ?? '',
    level: flashcardFromAPI?.level ?? '',
    subject: flashcardFromAPI?.subject ?? '',
    segment: flashcardFromAPI?.segmant ?? 1,
  };
};
function createflashcardDocument(data: any[]): any[] {
  const flashcardDocumentsMap: { [flashcardId: number]: any } = {};

  data.forEach(({ post_id, meta_key, meta_value }) => {
    if (!flashcardDocumentsMap[post_id]) {
      flashcardDocumentsMap[post_id] = { post_id };
    }
    flashcardDocumentsMap[post_id][meta_key] = meta_value;
  });

  const flashcardDocumentsArray: any[] = Object.values(flashcardDocumentsMap);
  return flashcardDocumentsArray;
}
