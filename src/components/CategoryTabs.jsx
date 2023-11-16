import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import NameCell from './NameCell'
import CategoryModeButtons from './CategoryModeButtons';

const CategoryTabs = ({ initialCategoryIsEditing, initialCategoryData, deleteCategoryFunc, id }) => {

    const [editCategoryMode, setEditCategoryMode] = useState(initialCategoryIsEditing)
    const [name, setName] = useState(initialCategoryData.name)

    const changeCategoryNormalMode = async () => {
        let bodyObj = {
            name: name
        }
        const response = await axios.put(`/editCategory/${id}`, bodyObj)

        if (!response.data.error) {
            setEditCategoryMode(false)
        } else {
            alert(response.data.error)
        }

    }


    const changeEditCategoryMode = () => setEditCategoryMode(true)

    return (
        <>
            <NameCell 
                isEditing={editCategoryMode} 
                value={name}
                onValueChange={setName}
            />   
            <CategoryModeButtons
                isEditing={editCategoryMode} 
                saveClick={changeCategoryNormalMode}
                editClick={changeEditCategoryMode}
                funkyDelete={deleteCategoryFunc}
            />
        </>
    );
    }

export default CategoryTabs