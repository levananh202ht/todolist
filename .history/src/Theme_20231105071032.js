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
                    type="checkbox"
                    onChange={handleTheme}
                />
                <span className="slider round" />
            </div>
        );
    }
}