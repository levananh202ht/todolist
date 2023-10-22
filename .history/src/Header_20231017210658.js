import React from 'react'


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: props.newItem
        }
    }
    onChangeInput = (event) => {
        const {value} = event.target;
        this.setState ({
            value,
        })
    }
    handlekeyDown = (event) => {
        if(event.key === "Enter"){
            const {value} = this.state
            const items = {id: Math.random(), name: value};
            const {addItem} = this.props;
            addItem(items)
            this.setState({
                value: '',
            })

        }
    }
    handleDelete = () => {       
        const {newItem, deleteItem} = this.props;
        debugger;
        console.log( deleteItem)
        deleteItem(newItem.id);
    }   
    render(){
        const {value} = this.state;
        return(
            <div className='Header'>
                <input onKeyDown={this.handlekeyDown} value = {value} onChange={this.onChangeInput} />
            </div>
        )
    }
}
export default Header;