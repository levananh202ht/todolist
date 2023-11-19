import React, {createContext, useState} from "react";

const ThemeContext = createContext();

const theme = {
    light: "light",
    dark: "dark"
}
const ThemeProvider = ({ children }) => {
    
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
        <ThemeContext.Provider value={{themeActive, handleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider