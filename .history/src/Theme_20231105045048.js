import React,{} from "react";

const ThemeContext = React.createContext();
export default class Theme extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
    render() {
        const {handleTheme} = this.props;
        return (
            <ThemeContext.Provider value={{  handleTheme }}>
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