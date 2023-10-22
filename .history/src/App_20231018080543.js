import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [{id: 1, name: "anh", status: false }],
      ischecked:[]
    }
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem = (item) => {  
    const {todolist} = this.state;
    const newTodo = [item, ...todolist];
    this.setState({
      todolist: newTodo,
    })
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
    const {todolist} = this.state;
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='content'>
          <Header addItem = {this.addItem}   />
          <ContentList todolist = {todolist} deleteItem = {this.deleteItem} />
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}
export default App;
