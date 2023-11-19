import React,{useState} from "react";

//import ThemeContext from './ThemeContext'
const Theme = () => {
    //const {theme, handleTheme} = useState(ThemeContext)
    return (
        <div className="switch">
            <input 
                className="Theme"
                type="checkbox"
                //onChange={handleTheme}
            />
            <span className="slider round" />
        </div>
    );
}
export default Theme;