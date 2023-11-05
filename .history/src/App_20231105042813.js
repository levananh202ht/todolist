import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';
import Footer from './Footer';
import Theme from './Theme'


const ThemeContext = React.createContext();



class App extends React.Component {
  constructor(props){
    super(props); 
    this.headerRef = React.createRef();
    this.state = {
      todolist: [
        {id: 1, name: "hoc", isCompleted: false },
        {id: 2, name: "choi", isCompleted: false }
      ],     
      todoEditing: '',
      CompletedFooter: false,
      todoListFiltered: [],     
      value: "",
      theme: "light"
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
    this.setState(({todolist}) => ({
      todolist: todolist.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      }),
    }));
  };
  handleAllClick = () => {
    const {todolist} = this.state;
    const todoListFiltered = todolist.map((item) => (item.isCompleted = true));
    this.setState({
      todolist: todoListFiltered,
    })
  }
  handleActiveClick = () => { 
    const {todolist} = this.state; 
    this.setState({
      todoListFiltered: todolist.map(
        (item) => item.isCompleted === false
      ),
      });
  };
  handleCompletedClick = () => {
    const {todolist} = this.state;  
    this.setState({
      todoListFiltered: todolist.filter(
        (item) => item.isCompleted === true
      ),
      });
  };
  deleteItem = (id) => {
    const {todolist} = this.state;
    const newDelete = todolist.filter((item) => item.id !== id);
    this.setState({
      todolist: newDelete
    })
  }
  deleteAll = () => {
    const {todolist} = this.state;
    const newList = todolist.filter((item) => !item.isCompleted)
    this.setState({
      todolist: newList,
    });
  };
  handleEdit = (id) =>{
    const { todolist } = this.state;
    const newTodolist = todolist.filter(item =>  item.id !== id)
    const newEdit = todolist.find(item =>  item.id === id)
    console.log(newEdit.name);
    newEdit[id] = 
    this.setState({
      //todolist: newTodolist,
      value: newEdit.name
    })
    if (this.headerRef.current) {
      this.headerRef.current.focusInput(newEdit);
    }
    // this.setState({value: event.target.value})
    // const newUpdate = todolist.map((item) => {
    //   if (item.id === id) {
    //     console.log(item)
    //     return {
    //       ...item,
    //     };
    //   }
    //   return item;
    // })
    // this.setState({
    //   todolist:newUpdate
    // })
  }
  updateItem = (id,newName) => {
    const {todolist} = this.state;
    const newUpdate = todolist.map((item) => {
      if (item.id === id) {
        console.log(item)
        return {
          ...item,
          name:newName
        };
      }
      return item;
    })
    this.setState({
      todolist:newUpdate
    })
  }

  render(){
    const {todolist, todoEditing, CompletedFooter} = this.state;
    const countedLeft = todolist.filter((item) => !item.isCompleted).length;
    return(
      <ThemeContext.Provider >
        <div className='container'>
          <h1>todos</h1>
          <div className='main'>
            <div className='content'>
              <Theme />
              <Header ref={this.headerRef} addItem = {this.addItem} todolist = {todolist} updateItem ={this.updateItem} />
              <ContentList 
              markCompleted={this.markCompleted} 
              toggleCompleteStatus={this.toggleCompleteStatus}
              todolist = {todolist} 
              getTodoEditing={this.getTodoEditing} todoEditing={todoEditing} 
              deleteItem = {this.deleteItem}
              handleEdit = {this.handleEdit}
              applyFilter = {this.applyFilter}
              />
              <Footer   
              handleAllClick = {this.handleAllClick}
              handleActiveClick = {this.handleActiveClick}
              handleCompletedClick = {this.handleCompletedClick}
              CompletedFooter = {CompletedFooter}
              deleteAll = {this.deleteAll}
              countedLeft = {countedLeft}
              />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    )
  }
}
export default App;
