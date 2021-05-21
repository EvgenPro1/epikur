import React from 'react';

const Button = ({className, handleClick, text, type = 'button'}) => {

    const newClassName = 'btn ' + className

    return (
        <input type={type}
               value = {text}
               onClick={handleClick}
               className={newClassName}/>
    );
};

export default Button;