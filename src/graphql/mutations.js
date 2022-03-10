/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createPlayedQuizzes = /* GraphQL */ `
  mutation CreatePlayedQuizzes(
    $input: CreatePlayedQuizzesInput!
    $condition: ModelPlayedQuizzesConditionInput
  ) {
    createPlayedQuizzes(input: $input, condition: $condition) {
      id
      userId
      quizID
      points
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayedQuizzes = /* GraphQL */ `
  mutation UpdatePlayedQuizzes(
    $input: UpdatePlayedQuizzesInput!
    $condition: ModelPlayedQuizzesConditionInput
  ) {
    updatePlayedQuizzes(input: $input, condition: $condition) {
      id
      userId
      quizID
      points
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayedQuizzes = /* GraphQL */ `
  mutation DeletePlayedQuizzes(
    $input: DeletePlayedQuizzesInput!
    $condition: ModelPlayedQuizzesConditionInput
  ) {
    deletePlayedQuizzes(input: $input, condition: $condition) {
      id
      userId
      quizID
      points
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      username
      score
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      username
      score
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      username
      score
      createdAt
      updatedAt
    }
  }
`;
