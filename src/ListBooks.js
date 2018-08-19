import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksShelf from './BooksShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, changeShelf } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BooksShelf 
                title="Currently Reading"
                books={ books.filter((book) => book.shelf === "currentlyReading")}
                changeShelf = { changeShelf }
              />
              <BooksShelf 
                title="Read"
                books={ books.filter((book) => book.shelf === "read")}
                changeShelf = { changeShelf }
              />
              <BooksShelf 
                title="Want to Read"
                books={ books.filter((book) => book.shelf === "wantToRead")}
                changeShelf = { changeShelf }
              />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default ListBooks