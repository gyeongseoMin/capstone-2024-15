import styled from "styled-components";
import React from "react";

interface IButton {
    name: string;
    color: keyof typeof theme;
    isFilled: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const theme = {
    white: {
        default: '#FFF',
        text: '#000',
        hover: '#D8D7F9',
    },
    blue: {
        default: '#1D349F',
        text: '#fff',
        hover: '#142472',
    },
    purple: {
        default: '#3D3A7F',
        text: '#fff',
        hover: '#2B2959',
    }
};

const BigButton = ({ name, color, isFilled, onClick }: IButton) => {
    if (!(color in theme)) {
        // 유효한 테마가 아닌 경우 기본값을 사용
        color = 'white';
    }
    console.log(name, color, isFilled);
    return (
        <Button color={color} isfilled={isFilled} onClick={onClick || undefined}>{name}</Button>
    )
}

const Button = styled.button<{color: keyof typeof theme; isfilled: boolean;}>`
    background-color: ${(props)=> props.isfilled && theme[props.color].default};
    height: 60px;
    border-radius: 50px;
    border: ${(props)=> !props.isfilled && `1px solid ${props.color}`};
    color: ${(props)=> props.isfilled ? theme[props.color].text : theme[props.color].default};
    
    &:hover {
        transition-duration: 0.4s;
        background-color: ${(props)=> theme[props.color].hover};
        color: ${(props)=> !props.isfilled && theme[props.color].text};
        border-color: ${(props)=> !props.isfilled && theme[props.color].hover};
    }
`

export default BigButton;