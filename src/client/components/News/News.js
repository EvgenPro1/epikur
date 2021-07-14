import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {motion, AnimateSharedLayout, AnimatePresence} from "framer-motion";

import Button from "../../../shared/components/Button/Button";
import {getCollection} from "../../../Firebase/helper";

import './News.scss'
import NewsCard from "../NewsCard/NewsCard";

const defaultCollection = 'NewsEpikur'

const News = () => {
    const [arrNewsCards, setArrNewsCards] = useState([])

    const getNewsCardsColl = async () => {
        getCollection(defaultCollection).then(collection => {
            collection.map(news => news.update = false)
            const sortedCollection = collection.sort((a, b) => b.date - a.date)
            setArrNewsCards(sortedCollection)
        })
    };

    useEffect(() => {
        getNewsCardsColl()
        // eslint-disable-next-line
    }, [])

    const newList = () => arrNewsCards.map(({title, text, date, image, actual}) => (
        <div className="newsCard mt-5">
                <NewsCard text = {text} title = {title} image = {image} date ={date} actual = {actual}/>
        </div>
    ))

    return (
        <div className='d-flex flex-column align-items-center'>
            {newList()}
        </div>

    )
};

export default News;