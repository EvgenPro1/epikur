import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {createAddProducts, createChangeProduct, _createGetProducts} from "../../../store/actionCreators";
import {TD} from "../../../shared/components/Td/TD";
import {deleteDocumentFromCollectionWithID, getCollection, setDocumentToCollection} from "../../../Firebase/helper";
import './AdminPage.css'
import {NavLink} from "react-router-dom";
import Button from "../../../shared/components/Button/Button";

const initialCard = {title: '', price: '', image: '', quantity: '', update: false}
const defaultCollection = 'TestEpikur-223E23d2@#4f2ref2'

export const AdminPage = () => {
    const [newCard, setNewCard] = useState(initialCard)
    // const [allCards, setAllCards] = useState('')
    // const [newValue, setNewValue] = useState()
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const getCardsColl = async () => {
        getCollection(defaultCollection).then(collection => {
            console.log(collection);
            dispatch(_createGetProducts(collection))
        })
    };

    const deleteProductById = async (id, collection = defaultCollection) => {
        deleteDocumentFromCollectionWithID(collection, id).then(r => {
            getCardsColl()
        }).catch(e => {
        })
    };

    useEffect(() => {
        getCardsColl()
        // console.log(allCards);
        // eslint-disable-next-line
    }, [])


    const addCard = async () => {
        const {title, price, quantity, image} = newCard
        setDocumentToCollection(defaultCollection, {title, price, quantity, image}
        ).then(r => {

        }).catch(e => {
        })
        setNewCard(() => initialCard)
        await getCardsColl()
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
        setNewCard(() => ({
            ...newCard,
            title: e.target.value
        }))
    }
    const addPrice = (e) => {
        setNewCard(() => ({
            ...newCard,
            price: e.target.value
        }))
    }
    const addQuantity = (e) => {
        setNewCard(() => ({
            ...newCard,
            quantity: e.target.value
        }))
    }
    const addImg = (e) => {
        setNewCard(() => ({
            ...newCard,
            image: e.target.value
        }))
    }

    const productsList = products.map(({title, price, image, quantity, idPost, update}) => {
            return <>
                <tr key={idPost} className='product-card'>
                    <TD key={idPost} update={update} value={title} changer={changeTitle} id={idPost}/>
                    <TD key={idPost} update={update} value={price} changer={changePrice} id={idPost}/>
                    <TD key={idPost} update={update} value={quantity} changer={changeQuantity} id={idPost}/>
                    {/*<TD key={idPost} update={update} value={title} changer={changeImage} id={idPost}/>*/}
                    {/*<td onDoubleClick={() => changePrice(idPost)} className="clickable price">{price} usd</td>*/}
                    {/*<td onDoubleClick={() => changeQuantity(idPost)} className=" clickable quantity">{quantity} </td>*/}
                    <td><img onDoubleClick={() => changeImage(idPost)} src={image} alt='' className="image clickable"/></td>
                    <td>
                        <Button handleClick={() => deleteProductById(idPost)} text='delete product'
                                className='btn btn-outline-danger'/>
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
            <table className="table table-striped position-relative admin-table">
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
                        <input type="text" placeholder='Title' onChange={addTitle} value={newCard.title}/>
                    </td>
                    <td>
                        <input type="number" placeholder='Price' onChange={addPrice} value={newCard.price}/>
                    </td>
                    <td>
                        <input type="number" placeholder='quantity' onChange={addQuantity} value={newCard.quantity}/>
                    </td>
                    <td><input type="link" placeholder='img (http....)' onChange={addImg} value={newCard.image}/>
                    </td>
                    <td>
                        <Button className='btn btn-primary'
                                handleClick={addCard}
                                text='add new product'/>
                    </td>
                </tr>

                {productsList}

                </tbody>
            </table>
            <Button className='btn-warning
            position-absolute
            justify-content-center
            left40 align-self-center' handleClick={getCardsColl}
                    text='Test button "getColl"'/>
            {/*<button className='getColl' onClick= {getCardsColl}>Test button "getColl"</button>*/}
        </>
    )
}