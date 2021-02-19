import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    position: sticky;
    top: 0;
    justify-content: center;
    align-items: center;
    height: 60px;

    background-color: ${props => props.theme.colors.primary};
    color: white;
`

export const SearchBox = styled.input`
    outline: none;
    height: 70%;
    width: 30%;
    margin: 0 70px;
    padding-left: 10px;
    border-radius: 2px;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    
    ::placeholder {
        opacity: 0.8;
    }
`

export const IconTittle = styled.header`

`