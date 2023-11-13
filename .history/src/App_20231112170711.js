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
  const [filterTodo, setFilterTodo] = useState(newFilter.All);
  const [ themeActive, setThemeActive] = useState(theme.light);
  const headerRef = useRef();

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
  const deleteItem = (id) => {
    const newDelete = todolist.filter((item) => item.id !== id);
    setTodolist(newDelete)
  }
  const deleteAll = () => {
    const newList = todolist.filter((item) => !item.isCompleted)
    setTodolist(newList)
  };
  const handleAll = () => {
    setFilterTodo(newFilter.All)
  }
  const handleActive = () => {
    setFilterTodo(newFilter.Active)
  }
  const handleCompleted = () => {
    setFilterTodo(newFilter.Completed)
  }


  //const renderFilter = todolist.filter(item => filterTodo === newFilter.All || filterTodo  === item.isCompleted)
  const renderFilter = (filterTodo) => {
    let activeFilter = filterTodo;
    debugger
    switch (activeFilter) {
      case newFilter.All:
        debugger
        return todolist;
      case newFilter.Active:
        debugger
        return todolist.filter(item => item.isCompleted);
      case newFilter.Completed:
        debugger
        return todolist.filter(item => !item.isCompleted);
      default:
        console.log('Default');
    }
  }

  console.log(renderFilter);
  const handleEdit = (id,event) =>{

    const newEdit = todolist.filter(item =>{
      if(id === item.id){
        return {...item, name: event};
      }
      return item;
    })
    console.log(newEdit.name )
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
    if(themeActive === theme.dark) {
      document.documentElement.setAttribute('data-theme', 'light');
      setThemeActive(theme.light);
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setThemeActive(theme.dark);
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
            toggleCompleteStatus={toggleCompleteStatus}
            todolist={todolist} 
            deleteItem={deleteItem}
            handleEdit={handleEdit}
            filterTodo={filterTodo}
            />
            <Footer   
            handleAll={handleAll}
            handleActive={handleActive}
            handleCompleted={handleCompleted}
            renderFilter={renderFilter}
            //handleFilter = {handleFilter}
            //setFilter={setFilter}
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
