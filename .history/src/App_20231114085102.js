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
  Active: false,
  Completed: true,
};
function App() {
  const [todolist, setTodolist] = useState([
    {id: 1, name: "hoc", isCompleted: true },
    {id: 2, name: "choi", isCompleted: false }
  ]);
  const [input, setInput] = useState("");
  const [filterTodo, setFilterTodo] = useState([]);
  const [status, setStatus] = useState(newFilter.All);
  const [ themeActive, setThemeActive] = useState(theme.light);
  const [currPage, setCurrPage] = useState(1);
  const headerRef = useRef();
  const numberTodolist = useRef();

  useEffect(() => {
    renderFilter();
    saveToLocalTodos();
  }, [todolist, status]);
  
  const addItem = (item) => {  
      setTodolist([item, ...todolist]);
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
  const saveToLocalTodos = () => {
    localStorage.setItem("todolist", JSON.stringify(todolist));
  };
  const renderFilter = (newww) => {
    switch (newww) {
      case newFilter.All:
        setTodolist(todolist); 
        break;
      case newFilter.Active:       
      setTodolist(todolist.filter((item) => !item.isCompleted));  
        break;
      case newFilter.Completed:
        setTodolist(todolist.filter((item) => item.isCompleted));

        break;
      default:
        break;
    }
  }


  const handleEdit = (id) =>{

    const newEdit = todolist.filter((item) => {
      if(item.id === id){
        item.name = input
      }
      return item;
    } );
    setInput("")
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
      debugger
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
