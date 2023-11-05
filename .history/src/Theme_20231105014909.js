import React from "react";

export default class Theme extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: "light"
        };
    }
    handleTheme = () => {
        debugger
        this.setState({
            theme: this.state.theme === "light" ? "dark" : "light",
        });
    };
    render() {
        const {handleTheme} = this.state;
        return (            
            <div className="switch">
                <input 
                    className="Theme"
                    type="checkbox"
                    handleTheme={handleTheme}
                />
                <span className="slider round" />
            </div>
        );
        }
}