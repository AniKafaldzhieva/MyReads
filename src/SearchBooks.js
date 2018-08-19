import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    state = {
        query: '',
        showBooks: []
    }

    updateBookShelf = (books) => {
        for (let book of books) {
            for (let myBooks of this.props.books) {
                if(book.id === myBooks.id) {
                    book.shelf = myBooks.shelf
                }
            }
        }
        return books
    } 

    updateQuery = (query) => {
        this.setState({ query: query}) 

         if(query) {
          BooksAPI.search(query, 10).then((books) => {
           if(books.length > 0) {
            books = books.filter(b => b.title)
            books = this.updateBookShelf(books)
            this.setState({ showBooks: books })
           }
          })
        } else {
         this.setState({ showBooks: [], query: '' })
        } 
    }

    render() {
      const { books, changeShelf } = this.props
      const { query, showBooks } = this.state

        return (
          <div className="search-books">
           <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={ query }
                    onChange={ (e) => this.updateQuery(e.target.value) }/>
           </div>
          </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {showBooks.map((book) => (
                	<Book
                  	  book={ book }
					  books={ books }
					  key={ book.id }
					  changeShelf={ changeShelf }
					/>
                ))}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks