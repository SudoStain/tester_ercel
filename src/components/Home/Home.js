import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

function Home() {
    const pizzas = [
        {
        
        id: '1',
        name: 'cheese-pizza',
        slug: 'cheese-pizza',
        description: 'anit that a female dog',
        toppings: ['mozzarella cheese', 'morechesse'],
        image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        price: 59.99,
        },
        {
        
            id: '2',
            name: 'meat-pizza',
            slug: 'meat-pizza',
            description: 'anit that a female dog',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            price: 29.99,
        },
        {
        
            id: '3',
            name: 'dog-pizza',
            slug: 'dog-pizza',
            description: 'anit that a female dog',
            toppings: ['mozzarella cheese', 'jam'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            price: 93.99,
        },
        {
        
            id: '4',
            name: 'chase-pizza',
            slug: 'chase-pizza',
            description: 'anit that a female dog',
            toppings: ['mozzarella cheese', 'ham'],
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            price: 49.99,
        },
        {
        
            id: '5',
            name: 'stave-pizza',
            slug: 'stave-pizza',
            description: 'anit that a female dog',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            price: 39.99,
        },
        {
        
            id: '6',
            name: 'watch-pizza',
            slug: 'watch-pizza',
            description: 'anit that a female dog',
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80',
            price: 29.99,
        }
    ]

    const [keyword, setKeyword] = useState('');

    const filteredPizzas = pizzas.filter(
        pizza =>
        pizza.name.toLowerCase(). includes(keyword) || pizza.toppings.includes(keyword)
    )

    const onInputchange  = (e) =>{
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    }
    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="search for toppings..." className={styles.searchBar} onChange={onInputchange} />
            </div>
            <div className={styles.pizzaContainer}>
                {filteredPizzas < 1 ?
                (
                    <div className={styles.noPizzas}> Theres no pizaa here with that topping.</div>
                )
                :
                (
                filteredPizzas.map(pizza => {
                    return(
                    <div className={styles.pizzaItem} key={pizza.id}>
                        <Link href={`/${pizza.slug}`}><a className={styles.pizzaImageBox}> 
                            <img src={pizza.image} className={styles.pizzaImage} alt={'pizza picture'} />
                        </a></Link>
                        <div className={styles.pizzaText}>
                            <p className={styles.pizzaHeader}>{pizza.name}</p>
                            <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                            <p className={styles.pizzaPrice}>${pizza.price}</p>
                        </div>
                    </div>
                    )
                
                })
                )}
            </div>
        </div>
    )
}

export default Home
