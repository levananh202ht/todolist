import React from 'react'

class ContentList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {todolist} = this.props;
        return(
            <div className= 'ContentList'>
                {
                    todolist.map((item) => {
                        <div key={item.id}>{item.name}</div>
                    })
                }
            </div>
        )
    }
}
export default ContentList