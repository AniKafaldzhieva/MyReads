import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  changeShelf = (book, shelf) => {
	  BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
    	this.setState({ books: this.state.books.filter(b => b.id !== book.id).concat(book)})
    })    
  }

  render() {
    const { books } = this.state

    render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
    	    <ListBooks
    	      books={ books }
	      changeShelf={ this.changeShelf } 
	    />
    	  )} />
        <Route path="/search" render={() => (
	    <SearchBooks
	      books={ books }
	      changeShelf={ this.changeShelf }
	 />
        )} />
      </div>
    )
  }
}

export default BooksApp
