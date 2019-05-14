import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <>
            <Link to='/' style={{ fontSize: '4rem' }}>
                back
            </Link>
            <h1>Page not found</h1>
        </>
    )
}
