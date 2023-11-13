import React, { useState, useRef,useEffect } from 'react'


const Header = ({addItem, todolist}) => {
    const [value, setValue] = useState("");

    const inputRef = useRef();
    const onChangeInput = (event) => {
        setValue(event.target.value);
    }
    const handlekeyDown = (event) => {
        if(event.key === "Enter"){
            if(value.trim() !== ""){
                const items = {id: Math.random(), name: value.trim(), isCompleted: false};
                addItem(items)
                setValue("");
                event.target.value = '';
            }
        }
    }  
    return(
        <div className='Header'>
            <input ref = {inputRef} className= 'Header_Input' onKeyDown={handlekeyDown}  onChange={onChangeInput} placeholder="What needs to be done?"  />
            {/* <input ref = {this.inputRef} className= 'Header_Input' onKeyDown={this.handlekeyDown}  onClick={this.handleUpdate} onChange={this.onChangeInput} placeholder="What needs to be done?"  /> */}
        </div>
    )
}
export default Header;