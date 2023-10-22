import React from 'react'

import ContentList from './ContentList';
import { IoCloseOutline } from "react-icons/io5";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    onChangeInput = (event) => {
        const {value} = event.target;
        this.setState ({
            value,
        })
    }
    handlekeyDown = (event) => {
        if(event.key === "Enter"){
            const {value} = this.state
            const items = {id: Math.random(), name: value};
            const {addItem} = this.props;
            addItem(items)
            debugger;
            this.setState({
                value: '',
            })

        }
    }
    handleDelete = () => {
        
        const {newItem, deleteItem} = this.props;
        debugger;
        console.log(deleteItem)
        deleteItem(newItem.id);
    }   
    render(){
        const {todolist} = this.state;
        const {value} = this.state;
        return(
            <div className='Header'>
                <input onKeyDown={this.handlekeyDown} value = {value} onChange={this.onChangeInput} />
                <ContentList  todolist = {todolist}  IoCloseOutline onClick={this.handleDelete}  />
            </div>
        )
    }
}
export default Header;