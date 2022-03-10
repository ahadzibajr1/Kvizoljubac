/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz {
    onCreateQuiz {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz {
    onUpdateQuiz {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz {
    onDeleteQuiz {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreatePlayedQuizzes = /* GraphQL */ `
  subscription OnCreatePlayedQuizzes {
    onCreatePlayedQuizzes {
      id
      userId
      quizID
      points
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayedQuizzes = /* GraphQL */ `
  subscription OnUpdatePlayedQuizzes {
    onUpdatePlayedQuizzes {
      id
      userId
      quizID
      points
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayedQuizzes = /* GraphQL */ `
  subscription OnDeletePlayedQuizzes {
    onDeletePlayedQuizzes {
      id
      userId
      quizID
      points
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      username
      score
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      username
      score
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      username
      score
      createdAt
      updatedAt
    }
  }
`;
