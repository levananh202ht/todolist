import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [],
    }
  }
  addItem = (newItem) => {
    const {todolist} = this.state;
    const newTodo = [newItem, ...todolist];
    this.setState({
      todolist: newTodo,
    })
  }
  deleteItem = (newItem) => {
    const {todolist} = this.state;
    const newTodo = this.state;
    newTodo = todolist.filter((todo) => {
      return todo.id !== newItem
    })
    this.setState({
      todolist: newTodo,
    })
  }

  render(){
    const {todolist} = this.state;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='content'>
          <Header addItem = {this.addItem}  />
          <ContentList todolist = {todolist} deleteItem = {this.deleteItemn} />
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}

export default App;
