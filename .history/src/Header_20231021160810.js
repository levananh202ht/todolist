import React from 'react'

import { IoChevronDown } from "react-icons/io5";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'',
            iteam:''
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
            const items = {id: Math.random(), name: value, status: false};
            const {addItem} = this.props;
            addItem(items)
            
            this.setState({
                value: '',
            })
        }
    }  
    render(){
        const {value} = this.state;
        const {todolist} = this.props;
        return(
            <div className='Header'>
                <input checked = {todolist.isCompleted} className= 'Header_Input' onKeyDown={this.handlekeyDown} value = {value} onChange={this.onChangeInput} placeholder="What needs to be done?"  />
            </div>
        )
    }
}
export default Header;