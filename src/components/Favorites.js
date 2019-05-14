import React from 'react'
import { StyledFavorites } from '../styles/StyledFavorites'

export default function Favorites({
    favorites,
    setFavorites,
    handleQueryFav
}) {
    function handleFavoriteRemoval(user) {
        const newFavorites = favorites.filter(fav => user !== fav)

        setFavorites(newFavorites)
    }

    function fireQuery(e, user) {
        handleQueryFav(e, user)
    }

    return (
        <StyledFavorites>
            {favorites.length !== 0 ? (
                <h1>Favorites:</h1>
            ) : (
                <h1>You don't have any favorites saved</h1>
            )}
            {favorites &&
                favorites.map((user, i) => {
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
