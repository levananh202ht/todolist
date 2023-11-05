import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';
import Footer from './Footer';


const isNotCheckedAll = (todos = []) => todos.find((item) => !item.isCompleted);

const filterByStatus = (todos = [], status = "", id = "") => {
  switch (status) {
    case "Active":
      return todos.filter((todos) => !todos.isCompleted);
    case "Completed":
      return todos.filter((todos) => todos.isCompleted);
    case "REMOVE":
      return todos.filter((todos) => todos.id !== id);
    default:
      return todos;
  }
};
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
      isCheckedAll: false,
      status: "All"
    }
  }
  addItem = (item) => {  
    const {todolist} = this.state;
    const newTodo = [item, ...todolist];
    this.setState({
      todolist: newTodo,
    })
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
  componentWillUnmount() {
    this.setState({
      isCheckedAll: !isNotCheckedAll(this.state.todolist)
    });
  }
  setStatusFilter = (status = "") => {
    this.setState({
      status
    });
  };
  handleAllClick = () => {
    const {todolist} = this.state;
    const todoListFiltered = todolist.map((item) => (item.isCompleted = true));
    debugger
    this.setState({
      todolist: todoListFiltered,
    })
  }
  handleActiveClick = () => { 
    const {todolist} = this.state; 
    let todoListFiltered = todolist
    todoListFiltered.map(item => item.isCompleted = true)
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

  handleEdit = (index,value,id)=>{
    if (this.headerRef.current) {
      this.headerRef.current.focusInput();
    }
    const { todolist } = this.state;
    const newUpdate = todolist.map((item) => {
      if (item.id === id) {
        console.log(item)
        return {
          ...item,
        };
      }
      return item;
    })
    this.setState({
      todolist:newUpdate
    })
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
    const {todolist, todoEditing, CompletedFooter,status} = this.state;
    const countedLeft = todolist.filter((item) => !item.isCompleted).length;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
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
            setStatusFilter={this.setStatusFilter}
            status={status}
            handleAllClick = {this.handleAllClick}
            handleActiveClick = {this.handleActiveClick}
            handleCompletedClick = {this.handleCompletedClick}
            CompletedFooter = {CompletedFooter}
            deleteAll = {this.deleteAll}
            countedLeft = {countedLeft}
            numOfTodosLeft={filterByStatus(todolist, "Active").length}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
