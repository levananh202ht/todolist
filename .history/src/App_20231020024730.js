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
      todolist: [{id: 1, name: "anh", isComplete: false }],
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
        <div className='main'>
          <div className='content'>
            <Header addItem = {this.addItem}   />
            <ContentList todolist = {todolist} deleteItem = {this.deleteItem} />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
export default App;
