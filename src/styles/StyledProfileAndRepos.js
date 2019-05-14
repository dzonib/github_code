import styled from 'styled-components'

export const StyledProfileAndRepos = styled.div`
    grid-area: user;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 50px;

    .user {
        display: grid;
        justify-content: center;
        grid-template-rows: 40px 40px 200px 60px 60px;

    }
    img {
        border-radius: 10%;
        width: 200px;
        height: 200px;
    }

    h4 {
        margin: 0;
    }

    h2 {
        font-size: 1.6rem;
        margin: 0;
        color: #3a4660;
    }

    button {
        height: 50px;
        width: 200px;
        background: #c9af98;
        color: white;
        font-size: 2rem;
        border: none;
        cursor: pointer;
        &:focus {
            outline: none;
            border: none;
        }
    }
    a {
        margin: 1rem;
        color: #ed8a63;
    }
    .repos {

        p {
            margin: 0;
        }
    }

`
