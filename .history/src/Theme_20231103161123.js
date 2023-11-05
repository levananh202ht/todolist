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
        const { theme } = this.state;
        return (
            <ThemeContext.Provider value={{ theme, handleTheme: this.handleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
        }
}