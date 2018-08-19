import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksShelf extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { title, books, changeShelf } = this.props

        return (
            <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{ title }</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      { books.map((book) => (
                          <Book 
                            book={ book }
                            books={ books }
                            key={ book.id }
                            changeShelf = { changeShelf }
                          />
                      ))}
                    </ol>
                  </div>
                </div>
            </div>
        )
    }
}

export default BooksShelf