import React from 'react'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    onChangeInput = (event) => {
        const valueInput = event.target.value;
        console.log(valueInput);
    }
    render(){
        const {value} = this.state;
        return(
            <div className='Header'>
                <input value = {value} onChange={this.onChangeInput} />
            </div>
        )
    }
}
export default Header;