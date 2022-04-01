import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type QuizMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayedQuizzesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Quiz {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly difficulty: string;
  readonly authorId: string;
  readonly image?: string;
  readonly questions?: (Question | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Quiz, QuizMetaData>);
  static copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz, QuizMetaData>) => MutableModel<Quiz, QuizMetaData> | void): Quiz;
}

export declare class Question {
  readonly id: string;
  readonly title: string;
  readonly correctAnswer: string;
  readonly firstIncorrectAnswer: string;
  readonly secondIncorrectAnswer: string;
  readonly quiz?: Quiz;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}

export declare class PlayedQuizzes {
  readonly id: string;
  readonly userId: string;
  readonly quizID: string;
  readonly points: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PlayedQuizzes, PlayedQuizzesMetaData>);
  static copyOf(source: PlayedQuizzes, mutator: (draft: MutableModel<PlayedQuizzes, PlayedQuizzesMetaData>) => MutableModel<PlayedQuizzes, PlayedQuizzesMetaData> | void): PlayedQuizzes;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly score?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}