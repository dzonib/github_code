import React, { createContext, useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...action.payload]
        default:
            return state
    }
}

const FavoritesContext = createContext()

function FavoritesContextProvider({ children }) {
    const initialState = {
        favorites: []
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <FavoritesContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesContextProvider }
