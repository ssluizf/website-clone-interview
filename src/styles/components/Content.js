import styled from 'styled-components'

export const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    width: 70vw;
    justify-self: center;
    margin: auto;
    padding-top: 60px;

    & > header {
        grid-column: span 2;
        margin: 0 8px; 
        color: rgba(0, 0, 0, 0.8);
    }

    h2, h3 {
        font-size: 1.1rem;
        color: ${props => props.theme.colors.secondary};
        font-weight: 500;
        line-height: 3;
    }

    p {
        font-size: 0.9rem;
        line-height: 1.5;
    }
    
    @media(max-width: 1200px) {
        width: 80vw;
    }
`

export const Card = styled.article`
    padding: 10px 10px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.2);

    p {
        color: rgba(0, 0, 0, 0.6);
    }

    &:last-of-type {
        grid-column: span 2;
    }

    @media(max-width: 992px) {
        grid-column: span 2;
    }
`

export const CardImage = styled.article`
    grid-row: span 2;
    background-color: #FFFFFF;
    overflow: hidden;

    img {
        display: block;
        height: 100%;
        width: 100%;
        object-fit: none;
    }

    header {
        padding: 16px;
    }

    @media(max-width: 992px) {
        grid-row: auto;
        grid-column: span 2;

        img {
            display: none;
        }
    }
`

export const Band = styled.header`
    background-color: ${props => props.theme.colors.secondary};
    padding: 10px;
    text-align: ${props => props.alignCenter ? 'center' : 'start'};

    p, a {
        color: white;
        font-weight: normal;
    }

    a {
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Line = styled.hr`
    grid-column: span 2;
    background-color: ${props => props.theme.colors.secondary};
    margin: 0px 0px 10px 0;
    height: 1px;
    border: none;
`