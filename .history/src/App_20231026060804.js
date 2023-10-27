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
  toggleCompleteStatus = (id) => {
    const { CompletedFooter } = this.state;

    this.setState(({ todolist, todoListFiltered }) => ({
      todolist: todolist.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      }),
      todoListFiltered: todoListFiltered.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      })
    }));

    if (CompletedFooter === "Completed") {
      this.toggleShowCompleted();
    }

    if (CompletedFooter === "Active") {
      this.toggleShowActive();
    }
  };
  handleAllClick = () => {
    this.setState((prevState) => ({
      todoListFiltered: prevState.todolist.map((item) => ({ ...item })),
      CompletedFooter: false,
    }))
  }
  handleActiveClick = () => { 
    this.setState((prevState) => ({
      todoListFiltered: prevState.todolist.map(
        (item) => item.isCompleted === false
      ),
      CompletedFooter: "Active"
    }));
  }
  handleCompletedClick = () => {
    this.setState((prevState) => ({
      todoListFiltered: prevState.todolist.filter(
        (item) => item.isCompleted === true
      ),
      CompletedFooter: 'Completed',
    }))
  }

  render(){
    const {todolist, todoEditing, isCompleted, myOption} = this.state;
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
            isCompleted = {isCompleted}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
