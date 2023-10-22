import React from 'react'
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import ContentList from './ContentList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  addItem = (newItem) => {
    const {todolist} = this.state;
    const newTodo = [newItem, ...todolist];
    this.setState({
      todolist: newTodo,
    })

  }
  render(){
    return(
      <div className='container'>
        <h1>todos</h1>
        <div className='content'>
          <Header addItem = {this.addItem} />
          <ContentList />
          <div className='footer'></div>
        </div>
      </div>
    )
  }
}

export default App;
