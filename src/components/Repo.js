import React from 'react'
import { StyledRepo } from '../styles/StyledRepo'

export default function Repo({ name, language, html_url, description }) {
    return (
        <a href={html_url} target='_blank' rel='noopener noreferrer'>
            <StyledRepo>
                <h2>Repo name: {name}</h2>
                {language && <h4>Done in {language} language</h4>}
                {description && <p>Description: {description}</p>}
            </StyledRepo>
        </a>
    )
}
