import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {createAddProducts, createChangeProduct, _createGetProducts} from "../../../store/actionCreators";
import {TD} from "../Td/TD";
import {getCollection, setDocumentToCollection} from "../../../Firebase/helper";
import './AdminPage.css'
import {NavLink} from "react-router-dom";

const initialCard = {title:'', price:'', image:'', quantity:'', update:false}

export const AdminPage = () => {
    const [newCard, setNewCard] = useState(initialCard)
    // const [allCards, setAllCards] = useState('')
    // const [newValue, setNewValue] = useState()
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const getCardsColl = async () => {
        getCollection('cards').then(collection => {
            console.log(_createGetProducts);
            dispatch(_createGetProducts(collection))
        })
    };

    useEffect(()=>{getCardsColl()
        // console.log(allCards);
        // eslint-disable-next-line
    },[])


    const addCard = async () => {
     const {title, price, quantity, image} = newCard
        setDocumentToCollection('cards', {title, price, quantity, image}
        ).then(r => {
        }).catch(e => {
        })
        setNewCard(() => initialCard)

    }
    // eslint-disable-next-line
    const addNewProduct = () => {

        dispatch(createAddProducts())
    }

    const changeTitle = (id, dataName) => {
        dispatch(createChangeProduct(id))
    }
    const changePrice = (id) => {
        dispatch(createAddProducts(id))
    }
    const changeQuantity = (id) => {
        dispatch(createAddProducts(id))
    }
    const changeImage = (id) => {
        dispatch(createAddProducts(id))
    }
    // eslint-disable-next-line
    const changer = (e) => {

        e.preventDefault()
        addCard()
    }

    // eslint-disable-next-line
    const getNewValue = ({target: {value}}) => {

        // setNewValue(() => value)
    }

    const addTitle = (e) => {
        setNewCard(() => ({...newCard,
            title: e.target.value
        }))
    }
    const addPrice = (e) => {
        setNewCard(() => ({...newCard,
            price: e.target.value
        }))
    }
    const addQuantity = (e) => {
        setNewCard(() => ({...newCard,
            quantity: e.target.value
        }))
    }
    const addImg = (e) => {
        setNewCard(() => ({...newCard,
            image: e.target.value
        }))
    }

    const productsList = products.map(({title, price, image, quantity, id, update}) => {

            return <>
                <tr key={id} className='product-card'>
                    <TD update={update} value={title} dataName='title' changer={changeTitle} id={id}/>
                    <td onDoubleClick={() => changePrice(id)} className="clickable price">{price} usd</td>
                    <td onDoubleClick={() => changeQuantity(id)} className=" clickable quantity">{quantity} </td>
                    <td><img onDoubleClick={() => changeImage(id)} src={image} alt='' className="image clickable"/></td>
                    <td>
                        <button>delete product</button>
                    </td>
                </tr>
            </>
        }
    )

    return (
        <>
            <navbar className="navbar navbar-dark bg-primary products-nav-bar">
                <NavLink className='navbar-brand' to='/'>Home</NavLink>
                <NavLink className='navbar-brand' to='/AdminPage'>AdminPage</NavLink>
            </navbar>
            <table className="table table-striped mt-2">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>image</th>
                </tr>
                </thead>
                <tbody id="book-list">

                <tr className='product-card'>
                    <td>
                        <input type="text" placeholder='Title' onChange={addTitle} value = {newCard.title}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Price' onChange={addPrice} value = {newCard.price}/>
                    </td>
                    <td>
                        <input type="text" placeholder='quantity' onChange={addQuantity} value = {newCard.quantity}/>
                    </td>
                    <td><input type="text" placeholder='img (http....)' onChange={addImg} value = {newCard.image}/>
                    </td>
                    <td>
                        <button className='btn btn-primary' onClick={addCard}>add new product</button>
                    </td>
                </tr>

                {productsList}

                </tbody>
            </table>
            <button className='getColl' onClick= {getCardsColl}>Test button "getColl"</button>
        </>
    )
}