import React, { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { ThemeContext } from "../contexts/ThemeContext"

const Navbar = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>React Context App</h1>
            <div onClick={toggleAuth}>{isAuthenticated ? "logged in" : "logged out"}</div>
            <ul>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            </ul>
        </nav>
    )
}
 
export default Navbar;









// import React, { Component } from "react"
// import { AuthContext } from "../contexts/AuthContext"
// import { ThemeContext } from "../contexts/ThemeContext"

// class Navbar extends Component {
//   // using ContextType
//   // static contextType = ThemeContext
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isAuthenticated, toggleAuth } = authContext
//               const { isLightTheme, light, dark } = themeContext
//               const theme = isLightTheme ? light : dark

//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>context app</h1>
//                   <div onClick={toggleAuth}>{isAuthenticated ? "logged in" : "logged out"}</div>
//                   <ul>
//                     <li>home</li>
//                     <li>about</li>
//                     <li>contact</li>
//                   </ul>
//                 </nav>
//               )
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     )
//   }
// }
// export default Navbar
