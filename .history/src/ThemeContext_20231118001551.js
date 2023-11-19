import React, { useState} from "react";

const ThemeContext = React.createContext();

const theme = {
    light: "light",
    dark: "dark"
}
const ThemeProvider = () => {

    const [ themeActive, setThemeActive] = useState(theme.light);

    
    return (
        <ThemeContext.Provider value={{theme, }} >
            
        </ThemeContext.Provider>
    )
}
export default ThemeProvider