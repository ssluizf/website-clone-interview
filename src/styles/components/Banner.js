import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const HeaderContainer = styled.section`
    display: flex;
    align-items: center;
    padding: 0 70px;
    background-color: #DE8E85;
    color: white;

    h1 {
        font-size: 2rem;
        font-weight: normal;
        line-height: 1;
        padding-bottom: 8px;

        strong {
            display: block;
            font-weight: bold;
            font-size: 2.5rem;
        }
    }

    p {
        line-height: 1.5;
    }
`

export const Image = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: none;
`