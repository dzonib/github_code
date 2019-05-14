import React from 'react'
import loaderGif from '../utils/fidget-spinner-loading.gif'
import smallLoader from '../utils/UbTh.gif'

export default function Loading({ small }) {
    return small ? (
        <img src={smallLoader} alt='' style={{margin: '0px auto'}}/>
    ) : (
        <img
            src={loaderGif}
            alt=''
            style={{ display: 'block', margin: '0px auto' }}
        />
    )
}
