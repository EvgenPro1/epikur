import React from "react";

export const TD = ({value, update, changer, id}) => {

    const valueChanger = () => {

    }
    return <td onDoubleClick={() => changer(id)}>
        <input type="text"
               className='clickable'
               value={value}
               disabled={!update}
               onChange={(e) => valueChanger(e)}/>
    </td>
}