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
    debugger
    let todoListFiltered = todolist
    todoListFiltered.map((item) => ([{...item}]));
    debugger;
    this.setState({
      todolist: todoListFiltered,
      CompletedFooter: false,
    })
  }
  handleActiveClick = () => { 
    const {todolist} = this.state;  
    debugger
    let todoListFiltered = todolist
    debugger;
    this.setState({
      todoListFiltered: todoListFiltered.map(
        (item) => item.isCompleted === false
      ),
      CompletedFooter: "Active"
      });
  };
  handleCompletedClick = () => {
    this.setState((prevState) => ({
      todoListFiltered: prevState.todolist.filter(
        (item) => item.isCompleted === true
      ),
      CompletedFooter: "Completed"
    }));
  };

  render(){
    const {todolist, todoEditing, CompletedFooter} = this.state;
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
            handleAllClick = {this.handleAllClick}
            handleActiveClick = {this.handleActiveClick}
            handleCompletedClick = {this.handleCompletedClick}
            CompletedFooter = {CompletedFooter}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
