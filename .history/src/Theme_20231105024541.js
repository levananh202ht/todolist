import React,{} from "react";

const ThemeContext = React.createContext();
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
        const {theme, handleTheme} = this.state;
        return (
            <ThemeContext.Provider value={{ theme, handleTheme }}>
                <div className="switch">
                <input 
                    className="Theme"
                    type="checkbox"
                    onChange={() =>this.handleTheme}
                />
                <span className="slider round" />
            </div>
            </ThemeContext.Provider>
        );
        }
}