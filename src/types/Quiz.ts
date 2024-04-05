export interface Quiz {
  id: string;
  questions: Question[];
}

export interface Question {
  id: string;
  type: QuestionType;
  question_text?: string;
  text_answer: string;
  question_record?: any;
}

export enum QuestionType {
  voiceToText = "voice-to-text",
  textToVoice = "text-to-voice",
}
