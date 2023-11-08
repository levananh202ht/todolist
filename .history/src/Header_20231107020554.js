import React, { useRef } from 'react'

import { IoChevronDown } from "react-icons/io5";
const Header = () => {
    const inputRef = useRef();
    // const focusInput() {
    //     if (this.inputRef.current) {
    //     this.inputRef.current.focus();
    //     }
    // }
    const onChangeInput = (event) => {
        const {value} = event.target;
        this.setState ({
            value,
        })
    }
    const handlekeyDown = (event) => {
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
    return(
        <div className='Header'>
            <input className= 'Header_Input' onKeyDown={handlekeyDown}  onChange={onChangeInput} placeholder="What needs to be done?"  />
            {/* <input ref = {this.inputRef} className= 'Header_Input' onKeyDown={this.handlekeyDown}  onClick={this.handleUpdate} onChange={this.onChangeInput} placeholder="What needs to be done?"  /> */}
        </div>
    )
}
export default Header;