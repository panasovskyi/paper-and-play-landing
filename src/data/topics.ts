export interface Topic {
  id: string
  name: string
  level: string
  wordsCount: number
  worksheetPages: number
  games: readonly string[]
}

export const SPORTS_TOPIC: Topic = {
  id: 'sports',
  name: 'Sports',
  level: 'A1',
  wordsCount: 40,
  worksheetPages: 15,
  games: ['Flashcards', 'Anagram', 'Quiz', 'Matching'],
}
