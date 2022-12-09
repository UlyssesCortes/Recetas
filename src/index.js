import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { books } from './books';
import Book from './Book';
import Header from './header'




function BookList() {

  return (
    <div>
      <Header />
      <section className="bookList">
        {books.map((book) => {
          return <Book key={book.id} ingredients={book.ingredients} {...book} />
        })}
      </section>
    </div>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'));
