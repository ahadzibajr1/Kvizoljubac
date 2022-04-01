// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Quiz, Question, PlayedQuizzes, User } = initSchema(schema);

export {
  Quiz,
  Question,
  PlayedQuizzes,
  User
};