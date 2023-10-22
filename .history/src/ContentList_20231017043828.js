import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

class ContentList extends React.Component{
    constructor(props){
        super(props);
    }
    handleDelete = () => {
        const {deleteItem} = this.props;
        const items = {id: Math.random()};
        console.log(items)
        deleteItem(items);
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