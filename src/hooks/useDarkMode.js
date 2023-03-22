import { useState } from "react";

if(!localStorage.getItem("darkMode")) {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem("darkMode", "true");
    } else {
        localStorage.setItem("darkMode", "false");
    }
}

export default function useDarkMode() {
    const [isActiveDarkMode, setIsActiveDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));
    
    const style = document.documentElement.style;

    if(isActiveDarkMode) {
        localStorage.setItem("darkMode", "true");
        style.setProperty("--background", "#000814");
        style.setProperty("--color", "#f7fff7");
        style.setProperty("--bk-prod-item", "#001d3d");
    } else {
        localStorage.setItem("darkMode", "false");
        style.setProperty("--background", "#f7fff7");
        style.setProperty("--color", "#000814");
        style.setProperty("--bk-prod-item", "#e2eafc");
    }
    
    const changeMode = () => {
        if(isActiveDarkMode) {
            setIsActiveDarkMode(false);
        } else {
            setIsActiveDarkMode(true);
        }
    }
    return {
        isActiveDarkMode,
        changeMode,
    };
}
