import React from 'react'

import { IoChevronDown } from "react-icons/io5";
class Header extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            value:'',
            iteam:''
        }
    }
    focusInput() {
        if (this.inputRef.current) {
        this.inputRef.current.focus();
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
            
            if(value.trim() !== ""){
                const items = {id: Math.random(), name: value.trim(), isCompleted: false};
                const {addItem} = this.props;
                addItem(items)
                this.setState({
                    value: '',
                })
            }
        }
    }  
    render(){
        const {value} = this.state;
        const {todolist} = this.props;
        return(
            <div className='Header'>
                <input ref = {this.inputRef} className= 'Header_Input' onKeyDown={this.handlekeyDown} value = {value} onClick={this.handleUpdate} onChange={this.onChangeInput} placeholder="What needs to be done?"  />
            </div>
        )
    }
}
export default Header;