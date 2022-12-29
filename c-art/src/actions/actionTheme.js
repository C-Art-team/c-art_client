import { CHANGE_THEME } from "./type_action"

const actionTheme = (theme) => {
    let tempTheme;
    if (theme === "dark") tempTheme = "garden"
    else tempTheme = "dark"
    return {
        type: CHANGE_THEME,
        theme: tempTheme
    }

}

export const themeAction = (theme) => {
    // console.log(theme)
    return (dispath, getState) => {
        dispath(actionTheme(theme))
    }
}