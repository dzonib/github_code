import React, { useState } from 'react'
import axios from 'axios'

import { StyledProfileAndRepos } from '../styles/StyledProfileAndRepos'
import Repo from './Repo'
import Loading from './Loading';

export default function User({
    login,
    avatar_url,
    html_url,
    name,
    public_repos
}) {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)

    async function getRepos() {
        try {
            setLoading(true)
            const { data } = await axios.get(
                `https://api.github.com/users/${login}/repos?per_page=5&sort=created`
            )

            setRepos(data)
            setLoading(false)
            console.log(data)
        } catch (e) {
            setLoading(false)
            console.log(e.message)
        }
    }

    return (
        <StyledProfileAndRepos>
            {login && (
                <>
                    <div className='user'>
                        {login && <h2>Login username: {login}</h2>}
                        {name && <h2>Name: {name}</h2>}

                        {avatar_url && <img src={avatar_url} alt='' />}
                        {login && (
                            <a
                                href={html_url}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Visit {login} on github.com
                            </a>
                        )}

                        {public_repos === 0 ? (
                            <h4>{login} has no repositories yet</h4>
                        ) : (
                            <button onClick={getRepos}>
                                View {login}'s latest 5 repositories
                            </button>
                        )}
                    </div>
                    {loading ? <Loading small/> : (
                        <div className='repos'>
                            {repos.map(repo => (
                                <Repo key={repo.id} {...repo} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </StyledProfileAndRepos>
    )
}
