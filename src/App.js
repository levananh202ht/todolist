import React, {useRef, useState, useEffect} from 'react'
import './App.css';

import Header from './Header';
import ContentList from './ContentList';
import Footer from './Footer';
import Theme from './Theme'
import {ThemeContext} from './ThemeContext'



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
  const [filterTodo, setFilterTodo] = useState([]);
 //const [selectItem, setSelectItem] = useState(null)
  const [currPage, setCurrPage] = useState(1);
  const headerRef = useRef(null);
  const numberTodolist = useRef();

  // useEffect(()=> {
  //   headerRef.current.fo
  // })
  
  
  useEffect(() => setFilterTodo(todolist) ,[todolist])
  
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
  const renderFilter = (newww) => {
    
    switch (newww) {
      case newFilter.All:
        setFilterTodo(todolist)
        break;
      case newFilter.Active:       
      setFilterTodo(todolist.filter((item) => !item.isCompleted));  
        break;
      case newFilter.Completed:
        setFilterTodo(todolist.filter((item) => item.isCompleted));
      
        break;
      default:
        break;
    }
  }

  const handleEdit = (id) =>{
    const newEdit = todolist.find(item => item.id === id)
    setInput(newEdit.name)
  }
  

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [currPage]);

  const onScroll = () => {
    
    if (numberTodolist.current) {
      const { scrollTop, scrollHeight, clientHeight } = numberTodolist.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage + 1);
      }
    }
  }
  return(
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            <Theme />
            <Header ref={headerRef} addItem={addItem}  />
            <ContentList 
            numberTodolist={numberTodolist}
            onScroll={onScroll}
            toggleCompleteStatus={toggleCompleteStatus}
            todolist={filterTodo} 
            deleteItem={deleteItem}
            handleEdit={handleEdit}
           // hanlSubmit={hanlSubmit}
            />
            <Footer   
            renderFilter={renderFilter}
            deleteAll={deleteAll}
            todolist={filterTodo} 
            />
          </div>
        </div>
      </div>
  )
}
export default App;
