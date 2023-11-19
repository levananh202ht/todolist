import React, {createContext, useState} from "react";

const ThemeContext = createContext({
    handleTheme: () =>{},
});

const theme = {
    light: "light",
    dark: "dark"
}
const ThemeProvider = () => {
    
   const [themeActive, setThemeActive] = useState(theme.light);
    
    const handleTheme = () => {
        // if(themeActive === theme.dark) {
        //     document.documentElement.setAttribute('data-theme', 'light');
        //     setThemeActive(theme.light);
        // }
        // else {
        //     document.documentElement.setAttribute('data-theme', 'dark');
        //     setThemeActive(theme.dark);
        // }
    }
    return (
        <ThemeContext.Provide >
            
        </ThemeContext.Provider>
    );
}
export default ThemeProvider