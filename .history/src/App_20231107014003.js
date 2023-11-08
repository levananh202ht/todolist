import React, {useRef, useState} from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';
import Footer from './Footer';
import Theme from './Theme'


const ThemeContext = React.createContext();

const theme = {
  light: "light",
  dark: "dark"
}
export const newFilter = {
  All: "All",
  Active: "Active",
  Completed: "Completed",
};
function App() {
  const [todolist, setTodolist] = useState([
    {id: 1, name: "hoc", isCompleted: false },
    {id: 2, name: "choi", isCompleted: false }
  ]);
    const headerRef = useRef();
    // this.state = {
    //   todolist: [
    //     {id: 1, name: "hoc", isCompleted: false },
    //     {id: 2, name: "choi", isCompleted: false }
    //   ],     
    //   todoEditing: '',
    //   CompletedFooter: newFilter.All,    
    //   todoListFiltered: [],
    //   value: "",
    //   themeActive: theme.light
    // }
  const addItem = (item) => {  
    setTodolist(prevTodolist => [item, ...prevTodolist]);
  }
  
  // markCompleted = ( id = '') => {
  //   const {todolist, todoListFiltered} = this.state;
  //  // const newCompleted = preState.todolist.map(item => item.id === id)
  //   this.setState(preState => ({
  //     todolist: preState.todolist.map(item => item.id === id ? ({...item, isCompleted: !item.isCompleted}): item)
  //   }))
  // }
  const toggleCompleteStatus = (id) => {
    this.setState(({todolist}) => ({
      todolist: todolist.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      }),
    }));
  };
  const handleAllClick = () => {
    const {todolist} = this.state;
    const todoListFiltered = todolist;
    todoListFiltered.map((item) => ({...item}));
    this.setState({
      todolist: todoListFiltered
    })
  }
  const handleActiveClick = () => { 
    const {todolist} = this.state; 
    const todoListFiltered = todolist;
    todoListFiltered.map((item) => item.isCompleted = false);
    this.setState({
      CompletedFooter: newFilter.Active,
      todolist: todoListFiltered
      });
  };
  const handleCompletedClick = () => {
    const {todolist} = this.state;  
    const todoListFiltered = todolist;
    todoListFiltered.map((item) => item.isCompleted = true);
    this.setState({
      CompletedFooter:newFilter.Completed,
      todolist: todoListFiltered
      });
  };
  const deleteItem = (id) => {
    const {todolist} = this.state;
    const newDelete = todolist.filter((item) => item.id !== id);
    this.setState({
      todolist: newDelete
    })
  }
  const deleteAll = () => {
    const {todolist} = this.state;
    const newList = todolist.filter((item) => !item.isCompleted)
    this.setState({
      todolist: newList,
    });
  };
  const handleEdit = (id,event) =>{
    const { todolist } = this.state;
    const newTodolist = todolist.filter(item =>  item.id !== id)
    const newEdit = todolist.find(item =>  item.id === id)
    console.log(newEdit.name);
    this.setState({
      //todolist: newTodolist,
      value: newEdit.name
    })
    this.headerRef.current.focusInput(newEdit.name);
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
  const handleTheme = () => {
    const {themeActive} = this.state
    if(themeActive === theme.dark) {
      document.documentElement.setAttribute('data-theme', 'light');
      this.setState ({
        themeActive: theme.light
      })
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.setState ({
        themeActive: theme.dark
      })
    }
  }


  const countedLeft = todolist.filter((item) => !item.isCompleted).length;
  return(
    <ThemeContext.Provider >
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            {/* <Theme handleTheme = {this.handleTheme} /> */}
            <Header ref={this.headerRef} addItem = {addItem}  updateItem ={this.updateItem} />
            <ContentList 
            markCompleted={this.markCompleted} 
            toggleCompleteStatus={this.toggleCompleteStatus}
            todolist = {todolist} 
            //getTodoEditing={this.getTodoEditing} todoEditing={todoEditing} 
            deleteItem = {this.deleteItem}
            handleEdit = {this.handleEdit}
            />
            <Footer   
            handleAllClick = {this.handleAllClick}
            handleActiveClick = {this.handleActiveClick}
            handleCompletedClick = {this.handleCompletedClick}
            //CompletedFooter = {CompletedFooter}
            deleteAll = {this.deleteAll}
            countedLeft = {countedLeft}
            />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
export default App;
