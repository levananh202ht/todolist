import React,{} from "react";

export default class Theme extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {handleTheme} = this.props;
        return (
            <div className="switch">
                <input 
                    className="Theme"
                    type="checkbox"
                    onChange={() =>this.handleTheme}
                />
                <span className="slider round" />
            </div>
        );
        }
}