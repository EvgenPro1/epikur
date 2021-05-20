import React from "react"
import Header from "../Header/Header.js";

export const HomePage = () => {
    const ChildrenContent = () =>
        <div className='children-content'>
<Header/>
            <aside className='left-menu'>Lorem ipsum.</aside>
            <main className='main-content'>
                Lorem ipsum.
            </main>
            <footer className='foot'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</footer>
        </div>

    const img = [
        'https://www.brd24.com/up/iblock/6a2/6a22e3449cd917ab02fe5b16255c7b73.jpg',
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg'
    ]

    const imgBlock = () => {
        let i = 1
        return img.map(item => {
                const imgClassName = `first-images image${i}`
                i++
                return <img key={item} src={item} className={imgClassName} alt=""/>
            }
        )
    }

    return <>
        <div className='d-flex justify-content-center align-items-center home-page-block'>
            <div className='first-images-block'>
                {imgBlock()}
            </div>
            <ChildrenContent/>
        </div>

    </>
}

