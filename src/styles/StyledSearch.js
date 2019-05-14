import styled from 'styled-components'

export const StyledSearch = styled.div`
    display: grid;
    grid-template-columns: 1fr 18fr;
    grid-template-areas: 'favorites form'
    'favorites user';
    margin: 5rem 0;
    h1 {
        display: block;
        text-align: center;
        color: #ed8a63;
        font-size: 2rem;
        margin: 1rem;
    }

    h3 {
        color: #a00000;
        margin: 0 auto;
    }

    form {
        grid-area: form;
        display: grid;

        input {
            padding: 5px;
            width: 300px;
            margin: 10px auto;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 2rem;
        }

        button {
            width: 150px;
            border: none;
            border-radius: 7px;
            height: 40px;
            font-size: 1.9rem;
            margin: 10px auto;
            font-style: bold;
            display: block;
            background: #3a4660;
            color: white;
            &:focus {
                outline: none;
                border: none;
            }
            &:hover {
                transition: var(--transition);
                transform: translateY(-1px);
                box-shadow: 3px 5px 9px -1px #3a4660;
            }
            &:active {
                transition: all 0.1s;
                outline: none;
                border: none;
                box-shadow: 1px 3px 4px -1px #3a4660;
            }
        }
    }

    .fav {
        width: 200px;
        background: #3333CC;
        margin: 10px auto;
    }

    
    .toggle {
        width: 130px;
        height: 50px;
        background: #808000;
    }
`
