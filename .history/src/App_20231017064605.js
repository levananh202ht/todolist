import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';

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
  deleteItem = (id) => {
    debugger
    const {todolist} = this.state;
    const newTodo = todolist.filter((newItem) => {
      return newItem.id !== id
    })
    this.setState({
      todolist: newTodo, 
    })
  }
        //<ContentList todolist = {todolist} deleteItem = {this.deleteItemn} />
  render(){
    const {todolist} = this.state;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='content'>
          <Header todolist = {todolist} addItem = {this.addItem} deleteItem = {this.deleteItem}  />
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}

export default App;
