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

    img {
        height: 40px;
    }

    svg {
        height: 30px;
        width: 40px;
        padding: 0px 10px;
        fill: #15B7DE;
    }
`

export const SearchBox = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 70%;
    width: 30%;
    margin: 0 70px;
    padding: 0px 10px;
    border-radius: 2px;
    
    input {
        background-color: transparent;
        height: 100%;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        border: none;
        outline: none;

        ::placeholder {
            opacity: 0.8;
        }
    }

    svg {
        fill: gray;
    }
`

export const IconLabeledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0 10px;
    color: inherit;

    svg {
        height: 30px;
        width: 40px;
        padding: 0px 10px;
        fill: white;
    }
`