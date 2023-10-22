import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

class ContentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    handleDelete = () => {
        debugger;
        const {newItem, deleteItem} = this.props;
        console.log(deleteItem)
        deleteItem(newItem.id);
    }   
    render(){
        const {todolist} = this.props;
        return(
            <div className= 'ContentList'>
                {
                    todolist.map((item) => {
                        return(
                        <div key={item.id}>
                            {item.name}
                            <IoCloseOutline onClick={this.handleDelete} />
                        </div>
                        
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList