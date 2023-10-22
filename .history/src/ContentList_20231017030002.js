import React from 'react';
import { FaBeer } from "react-icons/fa";

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
                            <FaBeer></FaBeer>
                        </div>
                        
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList