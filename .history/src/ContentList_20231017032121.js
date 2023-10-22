import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

class ContentList extends React.Component{
    constructor(){
        super();
    }
    handleDelete = (id) => {
        const {deleteItem} = this.props;
        deleteItem(id);
    }   
    render(){
        const {todolist} = this.props;
        return(
            <div className= 'ContentList'>
                {
                    todolist.map((item) => {
                        return(
                        <div key={item.id} >
                            {item.name}
                            <IoCloseOutline />
                        </div>
                        
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList