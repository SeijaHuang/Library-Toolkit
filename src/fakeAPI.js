const books = [
  {
    id: 1,
    title: 'Book 1',
    description: 'Description for Book 1',
    author: 'Seija',
  },
  {
    id: 2,
    title: 'Book 2',
    description: 'Description for Book 2',
    author: 'Shishi',
  },
  {
    id: 3,
    title: 'Book 3',
    description: 'Description for Book 3',
    author: 'toby',
  },
];

const FAKE_DELAY = 2000;

const fakeAPI = {
  fetchBooks: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(books);
      }, FAKE_DELAY);
    });
  },
  addBooks: (book) => {
    return new Promise((resolve, rejects) => {
      setTimeout(() => {
        book.id = Math.max(...books.map((b) => b.id)) + 1;
        books.push(book);
        resolve(book);
      }, FAKE_DELAY);
    });
  },
};

export default fakeAPI;
