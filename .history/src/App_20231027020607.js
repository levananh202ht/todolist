import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';
import Footer from './Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [
        {id: 1, name: "hoc", isCompleted: false },
        {id: 2, name: "choi", isCompleted: false }
      ],     
      todoEditing: '',
      CompletedFooter: false,
      todoListFiltered: [],
    }
  }
  addItem = (item) => {  
    const {todolist} = this.state;
    const newTodo = [item, ...todolist];
    this.setState({
      todolist: newTodo,
    })
  }
  
  markCompleted = ( id = '') => {
    const {todolist} = this.state;
   // const newCompleted = preState.todolist.map(item => item.id === id)
    this.setState(preState => ({
      todolist: preState.todolist.map(item => item.id === id ? ({...item, isCompleted: !item.isCompleted}): item)
    }))
  }
  handleAllClick = () => {
    const {todolist} = this.state;
    const todoListFiltered = todolist.map((item) => ({...item}));
    this.setState({
      todolist: todoListFiltered,
      CompletedFooter: false,
    })
  }
  handleActiveClick = () => { 
    const {todolist} = this.state;
    const todoListFiltered = todolist.map((item) => item.isCompleted === false);
    this.setState({
      todolist: todoListFiltered,
      CompletedFooter: 'Active',
    })
  }
  handleCompletedClick = () => {
    const {todolist} = this.state;
    const todoListFiltered = todolist.map((item) => item.isCompleted === true);CompletedFooter: 'Completed'
    debugger;
    this.setState((prevState) => ({
      todolist: prevState.todoListFiltered,
      CompletedFooter: 'Completed',
    }))
  }

  render(){
    const {todolist, todoEditing, isCompleted} = this.state;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            <Header addItem = {this.addItem} todolist = {todolist}   />
            <ContentList 
            markCompleted={this.markCompleted} 
            todolist = {todolist} 
            getTodoEditing={this.getTodoEditing} todoEditing={todoEditing} 
            />
            <Footer 
            todoListFiltered = {this.todoListFiltered}
            handleAllClick = {this.handleAllClick}
            handleActiveClick = {this.handleActiveClick}
            handleCompletedClick = {this.handleCompletedClick}
            isCompleted = {isCompleted}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
