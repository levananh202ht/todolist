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
      todoEditing: ''
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
    this.setState({todoEditing: id})
  }
  onEditItem = (item = {}, index = -1) => {
    if(index >= 0){
      const {todolist: listItem} = this.state
      listItem.splice(index,1 ,item)
      this.setState({
        todolist: item,
        todoEditing: ''
      })
    }
  }
  markCompleted = ( id = '') => {
    const {todolist} = this.state;
   // const newCompleted = preState.todolist.map(item => item.id === id)
    this.setState(preState => ({
      todolist: preState.todolist.map(item => item.id === id ? ({...item, isCompleted: !item.isCompleted}): item)
    }))
  }

  render(){
    const {todolist, todoEditing} = this.state;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            <Header addItem = {this.addItem} todolist = {todolist}   />
            <ContentList markCompleted={this.markCompleted} onEditItem = {this.onEditItem} todolist = {todolist} deleteItem = {this.deleteItem} getTodoEditing={this.getTodoEditing} todoEditing={todoEditing} />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
