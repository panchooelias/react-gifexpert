
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    //Agregamos una nueva categoria si no existe
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    };

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory 
                // setCategories={setCategories}
                onNewCategory = { event => onAddCategory(event)}
            />

            {
                categories.map( category => (
                    <GifGrid key = { category } category = { category } />
                ))
            }
        </>
    )
}
