import axios from 'axios';
import DisplayTabs from './DisplayTabs';
import CategoryTabs from './CategoryTabs'
import { useState, useEffect } from 'react';
import AddCategoryButton from './AddCategoryButton';

const CategoryTable = () => {
    const [currentCategoryData, setCurrentCategoryData] = useState([])


    const getCategoryData = async () => {
      await axios.get('/categories')
        .then((response) => {
          setCurrentCategoryData(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
  
    }
  
    useEffect(() => {
      getCategoryData()
    }, [])

    const createCategoryTabs = currentCategoryData.map((categoryItem) => {
        const { id, name, isEditing } = categoryItem

        return (
            <CategoryTabs
                key={id}
                id={id}
                initialCategoryData={{ name }}
                initialCategoryIsEditing={isEditing}
                deleteCategoryFunc={() => deleteCategory(id)}
            />
        )
    })

    const addCategory = async () => {
        const response = await axios.post('/addCategory', { name: "New Category" })
        setCurrentCategoryData([...currentCategoryData, response.data])
    }

    const deleteCategory = async (categoryId) => {
        const response = await axios.delete(`/deleteCategory/${categoryId}`)
        if (!response.data.error) {
            const filteredCategoryList = currentCategoryData.filter((categoryItem) => categoryItem.id !== categoryId)
            setCurrentCategoryData(filteredCategoryList)
        }
    }

    return (

        <div>
            <table>

                <thead>
                </thead>
  
                <tbody>

                    <DisplayTabs>
                    </DisplayTabs>
                    {createCategoryTabs}

                </tbody>

                <tfoot>
                    <AddCategoryButton addClick={addCategory} />
                </tfoot>

            </table>
        </div>
    )
}

export default CategoryTable


