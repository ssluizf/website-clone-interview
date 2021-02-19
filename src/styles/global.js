import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #EEEEEE;
        font-family: 'Roboto', sans-serif;
    }

    button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }
`
