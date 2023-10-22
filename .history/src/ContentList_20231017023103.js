import React from 'react'

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
                        <i class="fa-solid fa-x"></i>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList