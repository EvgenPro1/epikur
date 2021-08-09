import React from 'react';
import img1 from '../../../img/DSC_8616.jpg'
import img2 from '../../../img/DSC_8620.jpg'
import img3 from '../../../img/DSC_8626.jpg'
import egg from '../../../img/egg4.png'
import egg1 from '../../../img/eggs1.png'
import egg2 from '../../../img/eggs3.png'

const product = [
    {
        img: img1,
        img2: egg,
        header: 'ФIЛЕ КУРЧАТ БРОЙЛЕРIВ',
        text1: 'Це свіже волинське повітря й перевірені європейські технології',
        text2: 'Нам не байдуже, і тому ми вирощуємо наших курочок на совість. Як для себе.',
    },
    {
        img: img2,
        img2: egg1,
        header: 'ФIЛЕ КУРЧАТ БРОЙЛЕРIВ',
        text1: 'Це свіже волинське повітря й перевірені європейські технології',
        text2: 'Нам не байдуже, і тому ми вирощуємо наших курочок на совість. Як для себе.',
    },
    {
        img: img3,
        img2: egg2,
        header: 'ФIЛЕ КУРЧАТ БРОЙЛЕРIВ',
        text1: 'Це свіже волинське повітря й перевірені європейські технології',
        text2: 'Нам не байдуже, і тому ми вирощуємо наших курочок на совість. Як для себе.',
    },

]

const Block7 = () => {
    return (
        <div className={'block__7__container'}>
            {product.map( (m, index) => (
                <div className={'card__container'} key={index}>
                    <div className={'card__img__container'} style={{animation: '5s card__img__container ' + index * 0.5 + 's ease-in-out infinite'}}>
                        <img src={m.img} alt="" className={'card__img'}/>
                    </div>
                    <div className={'card__header Bebas-Neue-Bold'}>{m.header}</div>
                    <div className={'card__text1 Formular-Light'}>{m.text1}</div>
                    <img src={m.img2} alt="" className={'card__img2'}/>
                    <div className={'card__text2 Formular-Light'}>{m.text2}</div>
                    <div className={'card__line1'}></div>
                </div>
            ))}

        </div>
    );
};

export default Block7;