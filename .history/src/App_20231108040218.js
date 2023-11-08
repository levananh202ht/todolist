import React, {useRef, useState, useEffect} from 'react'
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
  const [filterTodo, setFilterTodo] = useState([]);
  const [filter, setFilter] = useState(newFilter.All);
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
  useEffect(() => {
    if(filter === newFilter.All){
      setFilterTodo(todolist);
    }else if(filter === newFilter.Active){
      setFilterTodo(todolist.filter(item => !item.isCompleted));
    }else if(filter === newFilter.Completed){
      setFilterTodo(todolist.filter(item => item.isCompleted));
    }
  },[filter,todolist]);
  const addItem = (item) => {  
    setTodolist(prevTodolist => [item, ...prevTodolist]);
  }
  
  const toggleCompleteStatus = (id) => {
    const newCompleted =  todolist.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    })
    setTodolist(newCompleted)
  };
  const handleFilter = (index) => {
    setFilter(index);
  }
  const deleteItem = (id) => {
    const newDelete = todolist.filter((item) => item.id !== id);
    setTodolist(newDelete)
  }
  const deleteAll = () => {
    const newList = todolist.filter((item) => !item.isCompleted)
    setTodolist(newList)
  };
  const handleEdit = (id,event) =>{
    const newEdit = todolist.filter(item =>{
      if(id === item.id){
        return {...item, name: event};
      }
      return item;
    })
    console.log(newEdit )
    setTodolist(newEdit)
    // const { todolist } = this.state;
    // const newTodolist = todolist.filter(item =>  item.id !== id)
    // const newEdit = todolist.find(item =>  item.id === id)
    // console.log(newEdit.name);
    // this.setState({
    //   //todolist: newTodolist,
    //   value: newEdit.name
    // })
    // this.headerRef.current.focusInput(newEdit.name);
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
  return(
    <ThemeContext.Provider >
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            {/* <Theme handleTheme = {this.handleTheme} />
            <Header ref={this.headerRef} addItem = {this.addItem} todolist = {todolist} updateItem ={this.updateItem} /> */}
            <Header addItem = {addItem}  />
            <ContentList 
            toggleCompleteStatus={toggleCompleteStatus}
            todolist = {todolist} 
            deleteItem = {deleteItem}
            handleEdit = {handleEdit}
            />
            <Footer   
            // handleAllClick = {this.handleAllClick}
            // handleActiveClick = {this.handleActiveClick}
            // handleCompletedClick = {this.handleCompletedClick}
            // //CompletedFooter = {CompletedFooter}
            handleFilter = {handleFilter}
            deleteAll = {deleteAll}
            todolist = {todolist} 
            />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
export default App;
