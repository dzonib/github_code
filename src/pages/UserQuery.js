import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { FaSearch, FaRegHeart } from 'react-icons/fa'

import { StyledSearch } from '../styles/StyledSearch'
import User from '../components/User'
import Loading from '../components/Loading'
import Favorites from '../components/Favorites'
import { FavoritesContext } from '../favoritesContext'

export default function Users() {
    const [query, setQuery] = useState('')
    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [favorites, setFavorites] = useState([])

    const {state, dispatch} = useContext(FavoritesContext)

    console.log(state)

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('favorites'))

        console.log(data, 'data')
        if (!data) {
            data = ['test', 'test2']
        }
        console.log(data)
        
        dispatch({type: "ADD", payload: data})
    }, [])

    
    async function handleQueryFav(e, user) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            const { data } = await axios.get(
                `https://api.github.com/users/${user}`
            )
            setUser(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e.message)
            setError(e.message)
        }
    }

    async function handleQuery(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            const { data } = await axios.get(
                `https://api.github.com/users/${query}`
            )
            setUser(data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e.message)
            setError(e.message)
        }
    }



    if (loading) {
        return <Loading />
    }

    return (
        <StyledSearch>
            <div className='sidebar'>
                {isOpen && (
                    <Favorites
                        setQuery={setQuery}
                        favorites={favorites}
                        setFavorites={setFavorites}
                        handleQueryFav={handleQueryFav}
                        query={query}
                    />
                )}
            </div>

            <>
                <User {...user} />

                <form onSubmit={handleQuery}>
                    <button
                        type='button'
                        className='toggle'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        FAVORITES
                    </button>
                    <h1>
                        Please enter github username of the person you want to
                        find in the input field
                    </h1>
                    <input
                        type='text'
                        placeholder='Username'
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                    />
                    {error && <h3>User not found, try again.</h3>}
                    <button type='submit'>
                        <FaSearch /> Search
                    </button>
                    <button
                        onClick={() => setFavorites([query, ...favorites])}
                        className='fav'
                        type='button'
                        disabled={!query}
                    >
                        <FaRegHeart style={{ color: 'red' }} /> Add to Favorites
                    </button>
                </form>
            </>
        </StyledSearch>
    )
}
