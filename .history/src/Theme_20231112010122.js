import React,{} from "react";

const Theme = () => {
    const {handleTheme} = this.props;
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