
import styled from 'styled-components'

const ButtonDefault = styled.button`
    display: inline-block;
    text-align: center;
    font-family: 'Work Sans', sans-serif;
    cursor: pointer;
    :focus {
        outline: none;
    }
`;

export const ButtonGreen = styled(ButtonDefault)`
    border: 1px solid #fff;
    transition: all 0.4s ease 0s;
    font-weight: normal;
    font-family: 'Roboto Mono', monospace;
    :disabled{
        background: transparent;
        color: #c9c9c9;
        border-color: #c9c9c9;
        cursor: inherit;
    }
    ${props => props.ghost ? `
        background-color: transparent;
        color: #fff;
        :hover {
            background-color: #fff;
            color: black;
            
        }
    `:
        `
        background-color: #f57e34;
        font-weight: 600;
        color: #ffff;
        :hover {
            opacity: 0.9;
        }
    `
    }

    ${props => props.medium && `
        min-width: 150px;
        text-transform: uppercase;
        height: 32px;
        border-radius: 21px;
        padding: 4px 32px;
        font-size: 16px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    `}

    ${props => props.small && `
        // max-width: 9.375rem;
        height: 30px;
        border-radius: 15px;
        padding: 4px 16px;
        font-size: 12px;
    `}

    ${props => props.verysmall && `
        padding: 4px;
        font-size: 0.9rem;
        border-radius: 7px;
    `}
`;