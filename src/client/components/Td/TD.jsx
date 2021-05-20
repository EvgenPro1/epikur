import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const TD = ({value, update, changer, id, dataName}) => {
    const dispatch = useDispatch()
    // console.log(update);
    const field = useSelector(state => state.find(obj => obj.update))
    // console.log(field);
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