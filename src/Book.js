import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    render() {
        const { book, changeShelf } = this.props
        
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : "" }}></div>
                    <BookShelfChanger 
                        book= { book }
                        changeShelf = { changeShelf }
                    />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book