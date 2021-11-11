import React, {useContext} from "react"
import { BookContext } from "../contexts/BookContext"
import { ThemeContext } from "../contexts/ThemeContext"

const BookList = () => {
    const { books } = useContext(BookContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id} style={{ background: theme.ui }}>{ book.title }</li>
                    )
                })}
            </ul>
        </div>
    )
}
 
export default BookList;













// import React, { Component } from "react"
// import { ThemeContext } from "../contexts/ThemeContext"

// class BookList extends Component {
//     // using Context Consumer
//     render() {
//         return ( 
//             <ThemeContext.Consumer>
//                 {(context) => {
//                     const { isLightTheme, light, dark } = context
//                     const theme = isLightTheme ? light : dark

//                     return (
//                         <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//                             <ul>
//                                 <li style={{ background: theme.ui }}>the art of war</li>
//                                 <li style={{ background: theme.ui }}>eat that frog</li>
//                                 <li style={{ background: theme.ui }}>5 second rule</li>
//                             </ul>
//                         </div>
//                     )
//                 }}
//             </ThemeContext.Consumer>
//         );
//     }

// }
// export default BookList;











// import React, { Component } from "react"
// import { ThemeContext } from "../contexts/ThemeContext"

// class BookList extends Component {
//     // using static contextType
//     static contextType = ThemeContext

//     render() { 
//         const { isLightTheme, light, dark } = this.context
//         const theme = isLightTheme ? light : dark

//         return (
//             <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>the art of war</li>
//                     <li style={{ background: theme.ui }}>eat that frog</li>
//                     <li style={{ background: theme.ui }}>5 second rule</li>
//                 </ul>
//             </div>
//         )
//     }
// }
// export default BookList;