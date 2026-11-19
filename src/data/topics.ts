export interface TopicDetails {
  level: string
  wordsCount: number
  worksheetPages: number
  games: readonly string[]
}

interface BaseTopic {
  id: string
  name: string
}

export interface AvailableTopic extends BaseTopic, TopicDetails {
  status: 'available'
  free: boolean
}

export interface UpcomingTopic extends BaseTopic {
  status: 'soon'
}

export type Topic = AvailableTopic | UpcomingTopic

export const SPORTS_TOPIC: AvailableTopic = {
  id: 'sports',
  name: 'Sports',
  status: 'available',
  free: true,
  level: 'A1',
  wordsCount: 40,
  worksheetPages: 15,
  games: ['Flashcards', 'Anagram', 'Quiz', 'Matching'],
}

export const TOPICS: readonly Topic[] = [
  SPORTS_TOPIC,
  { id: 'weather', name: 'Weather & Seasons', status: 'soon' },
  { id: 'food', name: 'Food', status: 'soon' },
  { id: 'animals', name: 'Animals', status: 'soon' },
]
