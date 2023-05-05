import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    //valor en el input text (leer y modificar)
    const [inputValue, setInputValue] = useState('');

    //cuando se cambie el input text, establecer un nuevo valor al input
    const onInputChanged = ({target}) => {
        console.log(target);
        setInputValue(target.value);
    };

    //
    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        // setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());

        setInputValue('');
        // console.log(inputValue);
    };

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={ onInputChanged }
            />
        </form>

    )
};
