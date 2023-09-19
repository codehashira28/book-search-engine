// route to get logged in user's info (needs the token)
import { gql } from '@apollo/client'; 

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      savedBooks
    }
  }

`

export const ADD_USER = gql`
mutation addUser($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      name
    }
  }
}
`;

// save book data for a logged in user
export const saveBook = gql`
  mutation saveBook($userId: ID!, $bookId: ID!) {
    saveBook(userId: $userId, bookId: $bookId) {
      _id
      title
    }
  }
`;

// remove saved book data for a logged in user
export const deleteBook = gql`
mutation deleteBook($userId: ID!, $bookId: ID!) {
  deleteBook(userId: $userId, bookId: $bookId) {
    _id
    title
  }
}
`;

// make a search to google books api
// https://www.googleapis.com/books/v1/volumes?q=harry+potter
export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
