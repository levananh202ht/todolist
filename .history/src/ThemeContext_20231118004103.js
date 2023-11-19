import React, { useState} from "react";

const ThemeContext = React.createContext();

const theme = {
    light: "light",
    dark: "dark"
}
const ThemeProvider = () => {
    
    const [ themeActive, setThemeActive] = useState(theme.light);
    
    debugger
    const handleTheme = () => {
        setThemeActive((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{ handleTheme}} >
            
        </ThemeContext.Provider>
    )
}
export default ThemeProvider