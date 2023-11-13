import React, {useRef, useState, useEffect} from 'react'
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
    {id: 1, name: "hoc", isCompleted: true },
    {id: 2, name: "choi", isCompleted: false }
  ]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [filterTodo, setFilterTodo] = useState(newFilter.All);
  const [ themeActive, setThemeActive] = useState(theme.light);
  const [currPage, setCurrPage] = useState(1);
  const headerRef = useRef();
  const numberTodolist = useRef();

  const addItem = (item) => {  
    if(input){
      setTodolist(prevTodolist => [item, ...prevTodolist]);
    }
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
  const deleteItem = (id) => {
    const newDelete = todolist.filter((item) => item.id !== id);
    setTodolist(newDelete)
  }
  const deleteAll = () => {
    const newList = todolist.filter((item) => !item.isCompleted)
    setTodolist(newList)
  };

  const renderFilter = (todolist, filterTodo) => {
    debugger
    switch (filterTodo) {
      case newFilter.All:
        setFilterTodo(todolist);
        break;
      case newFilter.Active:        setFilterTodo(todolist.filter(item => item.isCompleted === true));  
        break;
      case newFilter.Completed:
        setFilterTodo(todolist.filter(item => !item.isCompleted === true));
        break;
      default:
        break;
    }
  }

  const handleEdit = (id) =>{
    const newEdit = todolist.find((item) => {
      return item.id === id
    })
    setEdit(true)
    setInput(newEdit.items)
    console.log(newEdit )
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
    if(themeActive === theme.dark) {
      document.documentElement.setAttribute('data-theme', 'light');
      setThemeActive(theme.light);
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setThemeActive(theme.dark);
    }
  }
  const onScroll = () => {
    if (numberTodolist.current) {
      const { scrollTop, scrollHeight, clientHeight } = numberTodolist.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  }
  return(
    <ThemeContext.Provider >
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            <Theme handleTheme={handleTheme} />
            <Header ref={headerRef} addItem={addItem}  />
            <ContentList 
            onScroll={onScroll}
            numberTodolist={numberTodolist.current}
            toggleCompleteStatus={toggleCompleteStatus}
            todolist={todolist} 
            deleteItem={deleteItem}
            handleEdit={handleEdit}
            filterTodo={filterTodo}
            />
            <Footer   
            renderFilter={renderFilter}
            deleteAll={deleteAll}
            todolist={todolist} 
            />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}
export default App;
