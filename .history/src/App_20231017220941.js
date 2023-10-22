import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [{id: 1, name: "anh", status: false }],
    }
  }
  addItem = (newItem) => {  
    const {todolist} = this.state;
    const newTodo = [newItem, ...todolist];
    this.setState({
      todolist: newTodo,
    })
  }
  deleteItem = (item) => {
    const {todolist} = this.state;
    const newTodo = todolist.filter(newItem => newItem.id !== item);
    debugger;
    this.setState({
      todolist: newTodo, 
    })
  }
        //<ContentList todolist = {todolist} deleteItem = {this.deleteItemn} />
  render(){
    const {todolist} = this.props;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='content'>
          <Header todolist = {todolist} addItem = {this.addItem} deleteItem = {this.deleteItem}  />
          <ContentList todolist = {this.todolist} />
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}

export default App;
