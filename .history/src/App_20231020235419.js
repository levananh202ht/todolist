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
        {id: 1, name: "anh", isCompleted: false },
        {id: 2, name: "tai", isCompleted: true }
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
    console.log('todoEditing')
  }
  deleteItem = (id) => {
    debugger;
    const {todolist} = this.state;
    const newTodo = todolist.filter(item => item.id !== id);
    debugger;
    this.setState({
      todolist: newTodo, 
    })
  }
  render(){
    const {todolist, todoEditing} = this.state;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='main'>
          <div className='content'>
            <Header addItem = {this.addItem} todolist = {todolist}   />
            <ContentList todolist = {todolist} deleteItem = {this.deleteItem} getTodoEditing={this.getTodoEditing} todoEditing={todoEditing} />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
