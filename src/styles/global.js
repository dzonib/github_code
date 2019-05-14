import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    :root {
        --transition: all 0.2s;
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    
    body {
        font-family: 'Raleway', sans-serif;
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        line-height: 2;
                
        a {
            text-decoration: none;
        }
    }
`;

export default GlobalStyle;