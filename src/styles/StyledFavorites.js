import styled from 'styled-components'

export const StyledFavorites = styled.section`
    grid-area: favorites;
    width: 200px;
    height: 100%;

    .favs {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #404040;
    }
    h1, h2, h3, h4 {
        display: inline
    }
    small {
        cursor: pointer;
        color: red;
        margin: 5px;
        font-size: 1.7rem;
    }
`