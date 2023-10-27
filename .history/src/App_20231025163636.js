import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';
import Footer from './Footer';


const filterByStatus = (listTodos = [], status = '', id) => {
  switch (status) {
    case 'ACTIVE':
      return listTodos.filter(item => !item.isCompleted)
    case 'COMPLETED':
      return listTodos.filter(item => item.isCompleted)
    case 'REMOVE':
      return listTodos.filter(item => item.id !== id)
    default:
      return listTodos
  }
}

const filterTodosLeft = (listTodos = []) => {
  return listTodos.filter(item => !item.isCompleted)
}
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [
        {id: 1, name: "hoc", isCompleted: false },
        {id: 2, name: "choi", isCompleted: false }
      ],     
      isCheckedAll: false,
      status: 'ALL',
      todoEditingId: ''
    }
  }
  addItem = (item) => {  
    const {todolist} = this.state;
    const newTodo = [item, ...todolist];
    this.setState({
      todolist: newTodo,
    })
  }
  getTodoEditing = (id = '') =>{
    this.setState({todoEditingId: id})
  }
  onEditItem = (item = {}, index = -1) => {
    if(index >= 0){
      const {todolist: listItem} = this.state
      listItem.splice(index,1 ,item)
      this.setState({
        todolist: item,
        todoEditingId: ''
      })
    }
  }
  markCompleted = (id = '') => {
    const { todolist } = this.state
    let isCheckedAll = true
    const updatedListTodos = todolist.map(item => {
      if ((!item.isCompleted && item.id !== id) || (item.isCompleted && item.id === id)) {
        isCheckedAll = false
      }
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted }
      }
      return item
    })
    this.setState({
      isCheckedAll,
      todolist: updatedListTodos
    })
  }

  checkAll = () => {
    const { todolist, isCheckedAll } = this.state
    const updatedtodolist = todolist.map(item => ({ ...item, isCompleted: !isCheckedAll }))
    this.setState(preState => ({
      isCheckedAll: !preState.isCheckedAll,
      todolist: updatedtodolist
    }))
  }

  clearCompleted = () => {
    this.setState(preState => ({
      todolist: filterTodosLeft(preState.todolist)
    }))
  }

  getEditTodo = (id = '') => {
    this.setState({
      todoEditingId: id
    })
  }

  editTodo = (todo, index) => {
    const { todolist } = this.state
    todolist.splice(index, 1, todo)
    this.setState({ todolist })
  }

  removeTodo = (id = '') => {
    this.setState(prevState => ({
      todolist: filterByStatus(prevState.todolist, 'REMOVE', id)
    }))
  }
  render(){
    const {todolist,  isCheckedAll, status, todoEditingId} = this.state;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            <Header addItem = {this.addItem} todolist = {todolist}   />
            <ContentList  onEditItem = {this.onEditItem} todolist = {todolist} deleteItem = {this.deleteItem} 
            // todolist={filterByStatus(todolist, status)}
            markCompleted={this.markCompleted}
            checkAll={this.checkAll}
            isCheckedAll={isCheckedAll}
            todoEditingId={todoEditingId}
            getEditTodo={this.getEditTodo}
            editTodo={this.editTodo}
            removeTodo={this.removeTodo}
          />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
