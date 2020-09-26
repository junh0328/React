import React from 'react';
import styled, { css } from 'styled-components';
import {darken, lighten} from 'polished';

const StyledButton = styled.button `
    /* 공통 스타일 */
    display: inline-flex;
    color: white;
    font-weight: bold;
    outline: none;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    // size
    height: 2.25rem;
    font-size: 1rem;


    //color
    ${props => {
        const selected = props.theme.palette[props.color];
        return css`
            background: ${selected};
            &: hover{
                background: ${lighten(0.1, selected)};
            }
            &: active{
                background: ${darken(0.1, selected)};
            }
        `;
        }};
    & + & {
        margin-left: 1rem;
    }
`;

Button.defaultProps = {
    color: `blue`
};

function Button({children, ...rest}){
    return <StyledButton {...rest}>{ children }</StyledButton>
}

export default Button;