import React, { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <button onClick={toggleTheme}>toggle theme</button>
    )
}
 
export default ThemeToggle;












// import React, { Component } from "react"
// import { ThemeContext } from "../contexts/ThemeContext";

// class ThemeToggle extends Component {
//     render() { 
//         return (
//             <ThemeContext.Consumer>
//                 {(context) => {
//                     const { toggleTheme } = context

//                     return (
//                         <button onClick={toggleTheme}>toggle theme</button>
//                     )
//                 }}
                
//             </ThemeContext.Consumer>
            
//         )
//     }
// }

// export default ThemeToggle;