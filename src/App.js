import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddBook from './components/AddBook';
import BookList from './components/BookList';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Book Library</h1>
        <AddBook />
        <BookList />
      </div>
    </Provider>
  );
}
