import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( { defaultCategories = [] } ) => {

    const [categories, setCategories] = useState(defaultCategories);

   /*  const handleAdd = (e) => {
        setCategories( categories => [...categories, 'HunterXHunter']);
        setCategories([...categories, 'HunterXHunter']);
    }; */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr></hr>
            { 
                    categories.map(category => 
                        <GifGrid 
                            key = {category}
                            category = {category} />
                    )
            }
                
        </>
    )
}