import React from 'react';

const AddCategoryButton = ({ addClick }) => {
  return (
    <tr>
      <td></td>
      <td colSpan={4} >
        <button onClick={addClick}>Add Category</button>
      </td>
    </tr>
  );
}
export default AddCategoryButton
