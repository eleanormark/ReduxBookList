export function selectBook(book) {
  console.log("Selected Book: ", book.title);
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  // Payload is a piece of data that discribes the action that is being undertaken
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
