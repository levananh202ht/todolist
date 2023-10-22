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
                        <div key={item.id} data = {item.name}> </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default ContentList