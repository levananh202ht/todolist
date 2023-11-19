import React, { useState} from "react";

const ThemeContext = React.createContext();

const theme = {
    light: "light",
    dark: "dark"
}
const ThemeProvider = () => {
    
    const [ themeActive, setThemeActive] = useState(theme.light);
    
    const handleTheme = () => {
        debugger
        if(themeActive === theme.dark) {
            document.documentElement.setAttribute('data-theme', 'light');
            setThemeActive(theme.light);
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            setThemeActive(theme.dark);
        }
    }
    return (
        <ThemeContext.Provider value={{ handleTheme}} >
            
        </ThemeContext.Provider>
    )
}
export default ThemeProvider