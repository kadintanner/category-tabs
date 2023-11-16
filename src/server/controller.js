// Set up a global varaiable to simulate a DB
let CATEGORY_TEST_DATA = [
    { id: 0, name: 'Category 1'},
    { id: 1, name: 'Category 2'},
    { id: 2, name: 'Category 3'},
  ];

let categoryGlobalId = 3

const handlerFunctions = {

    // CATEGORY TAB FUNCTIONS

    getCategories: (req, res) => {
        res.send(CATEGORY_TEST_DATA)
    },

    addCategory: (req, res) => {

        const name = req.body.name

        //creat a new object
        const newObject = {
            id: categoryGlobalId,
            name: name
        }

        CATEGORY_TEST_DATA.push(newObject)

        categoryGlobalId++

        res.send(newObject)
    },

    deleteCategory:  (req, res) => {
        // need to grab id from params
        const id = req.params.id 
        
        // remove the element with said id from TEST_DATA
        CATEGORY_TEST_DATA = CATEGORY_TEST_DATA.filter((category) => category.id !== +id)

        res.send(CATEGORY_TEST_DATA)

    },

    editCategory: (req, res) => {

        const { id } = req.params
        const { name} = req.body

        //need to find corresponding 
        const index = CATEGORY_TEST_DATA.findIndex(category => category.id == id)
        const categoryItem = CATEGORY_TEST_DATA[index]

        categoryItem.name = name

        res.send(categoryItem)

    }

}

export default handlerFunctions