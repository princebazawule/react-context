import React, { createContext, useState } from "react"

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'the art of war', id: 1},
        {title: 'eat that frog', id: 2},
        {title: '7 habits of ', id: 3},
        {title: '5 second rule', id: 4},
    ])

    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
