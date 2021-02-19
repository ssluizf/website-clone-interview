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

    svg {
        height: 4rem;
        width: 4rem;
        fill: #EEB2AA;
    }

    @media (max-width: 992px) {
        grid-column: span 2;
        height: 40vh;
    }
`

export const Image = styled.img`
    display: block;
    height: 100%;
    width: 100%;
    object-fit: none;

    @media (max-width: 992px) {
        display: none;
    }
`

export const Actions = styled.section`
    display: flex;
    grid-column: 2;
    padding: 10px 0 0 50px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 0 20px;
        margin: 4px;
        width: 12rem;
        height: 2.5rem;

        svg {
            height: 1rem;
            width: 1rem;
            fill: rgba(0, 0, 0, 0.6);
        }

        p {
            color: rgba(0, 0, 0, 0.6);
            padding-left: 0.6rem;
        }
    }
`