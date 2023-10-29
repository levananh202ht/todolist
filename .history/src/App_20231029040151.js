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
    const {todolist, todoListFiltered} = this.state;
   // const newCompleted = preState.todolist.map(item => item.id === id)
    this.setState(preState => ({
      todolist: preState.todolist.map(item => item.id === id ? ({...item, isCompleted: !item.isCompleted}): item)
    }))
  }
  toggleCompleteStatus = (id) => {
    const { CompletedFooter } = this.state;
    this.setState(({todolist,todoListFiltered}) => ({
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
      this.handleCompletedClick();
    }

    if (CompletedFooter === "Active") {
      this.handleActiveClick();
    }
  };
  handleAllClick = () => {
    const {todolist} = this.state;
    const todoListFiltered = todolist.map((item) => ([{...item}]));
    this.setState({
      todolist: todoListFiltered,
      CompletedFooter: false,
    })
  }
  handleActiveClick = () => { 
    const {todolist} = this.state;  
    this.setState({
      todoListFiltered: todolist.map(
        (item) => item.isCompleted === false
      ),
      CompletedFooter: "Active",
      });
  };
  handleCompletedClick = () => {
    const {todolist} = this.state;  
    this.setState({
      todoListFiltered: todolist.filter(
        (item) => item.isCompleted === true
      ),
      CompletedFooter: "Completed"
      });
  };
  deleteItem = () => {
    console.log('aaa');
  }

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
            toggleCompleteStatus={this.toggleCompleteStatus}
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
