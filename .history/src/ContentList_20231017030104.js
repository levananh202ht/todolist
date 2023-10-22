import React from 'react';
import { FontAwesomeIcon } from "react-icons/fa";

class ContentList extends React.Component{
    constructor(){
        super();
    }
    render(){
        const {todolist} = this.props;
        return(
            <div className= 'ContentList'>
                {
                    todolist.map((item) => {
                        return(
                        <div key={item.id} >{item.name}
                            <FontAwesomeIcon icon="fa-solid fa-x" />
                        </div>
                        
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList