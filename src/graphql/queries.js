/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      title
      category
      difficulty
      authorId
      image
      questions {
        items {
          id
          title
          correctAnswer
          firstIncorrectAnswer
          secondIncorrectAnswer
          createdAt
          updatedAt
          quizQuestionsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        category
        difficulty
        authorId
        image
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      title
      correctAnswer
      firstIncorrectAnswer
      secondIncorrectAnswer
      quiz {
        id
        title
        category
        difficulty
        authorId
        image
        questions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      quizQuestionsId
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        correctAnswer
        firstIncorrectAnswer
        secondIncorrectAnswer
        quiz {
          id
          title
          category
          difficulty
          authorId
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        quizQuestionsId
      }
      nextToken
    }
  }
`;
export const getPlayedQuizzes = /* GraphQL */ `
  query GetPlayedQuizzes($id: ID!) {
    getPlayedQuizzes(id: $id) {
      id
      userId
      quizID
      points
      createdAt
      updatedAt
    }
  }
`;
export const listPlayedQuizzes = /* GraphQL */ `
  query ListPlayedQuizzes(
    $filter: ModelPlayedQuizzesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayedQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        quizID
        points
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      username
      score
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
