import React from 'react';
import Button from '../../UI/Button/Button';

const LoginButton = ({buttonState}) => {
    const buttons = buttonState.map(button =>
        <Button key={button.id} {...button} />
    );
    return buttons;
};
export default LoginButton;
