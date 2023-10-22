import React from 'react';

import { IoCloseOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
class ContentList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value: ''
        }
    }
    handleDelete = () => {    
        const {item, deleteItem} = this.props;
        deleteItem(item.id);
    } 
    //{
        //todolist.map((item) => {
           // return(                            
                //<ul  className='ContentList_Item' key={item.id}>
                   // <li>
                   // <label>{item.name}</label>
                  //  <button><IoCloseOutline onClick={this.handleDelete} /></button>
                  //  </li>
               // </ul>     
           // )
       // })
   // }
    render(){
        const {todolist} = this.props;
        return(
            <div className='ContentList'>
                <input className= 'Header_Input'/>
                <label className='Click'><IoChevronDown/></label>
                <ul  className='ContentList_Item'>
                    <li>
                    {
                        todolist.map((iteam) => {
                            <label>{iteam.name}</label>
                        })
                    }
                        <button><IoCloseOutline onClick={this.handleDelete} /></button>
                    </li>
                </ul>   
            </div>
        )
    }
}
export default ContentList;
