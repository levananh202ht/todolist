import React,{} from "react";

const Theme = (handleTheme) => {
    debugger
    return (
        <div className="switch">
            <input 
                className="Theme"
                type="checkbox"
                onChange={handleTheme}
            />
            <span className="slider round" />
        </div>
    );
}
export default Theme;