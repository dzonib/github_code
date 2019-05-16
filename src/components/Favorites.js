import React, { useContext } from 'react'
import { StyledFavorites } from '../styles/StyledFavorites'
import { FavoritesContext } from '../favoritesContext'

export default function Favorites({ handleQueryFav }) {
    const { state, dispatch } = useContext(FavoritesContext)


    console.log(state, "state")
    function handleFavoriteRemoval(user) {
        const newFavorites = state.filter( fav => fav !== user)

        localStorage.setItem('favorites', JSON.stringify(newFavorites))
        dispatch({type: "ADD", payload: newFavorites})
    }

    function fireQuery(e, user) {
        handleQueryFav(e, user)
    }

    return (
        <StyledFavorites>
            {state.length !== 0 || undefined? (
                <h1>Favorites:</h1>
            ) : (
                <h1>You don't have any favorites saved</h1>
            )}
            {state &&
                state.map((user, i) => {
                    return (
                        <div key={i} className='favs'>
                            <div
                                style={{ cursor: 'pointer' }}
                                onClick={e => fireQuery(e, user)}
                            >
                                <h4 style={{ display: 'in-line' }}>{i + 1}.</h4>{' '}
                                <h4>{user}</h4>
                            </div>

                            <small onClick={() => handleFavoriteRemoval(user)}>
                                remove
                            </small>
                        </div>
                    )
                })}
        </StyledFavorites>
    )
}
