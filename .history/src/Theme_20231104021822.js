import React from "react";

const ThemeContext = React.createContext();
export default class Theme extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: "light"
        };
    }
    handleTheme = () => {
        this.setState({
            theme: this.state.theme === "light" ? "dark" : "light",
        });
    };
    render() {
        const { handleTheme } = this.state;
        return (
            <div className="Theme">
                <input 
                    className="switch"
                    type="checkbox"
                    onChange={handleTheme}
                />
                <span className="slider round" />
            </div>
        );
        }
}