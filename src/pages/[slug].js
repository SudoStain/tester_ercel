import React from 'react'
import styles from '../styles/Pizza.module.css'
import Head from 'next/head'
import Link from 'next/link'


export default function slug({pizza, otherPizzas}) {
    return (
        <div className={styles.container}>
            <Head>
            <title>{pizza.name}</title>
            </Head>
            <div className={styles.pizzawrapperLeft}>
                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
            </div>
            <div className={styles.PizzawrapperRight}>
                <div className={styles.pizzaInfo}>
                    <p className={styles.pizzaTitle}>{pizza.name}</p>
                    <p className={styles.pizzadescription}>{pizza.description}</p>
                    <p className={styles.pizzaPrice}>${pizza.price}</p>
                    <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                    
                </div>
                <div className={styles.otherPizzasWrapper}>
                    {otherPizzas.map(otherpizza => {
                        return(
                            <div className={styles.otherPizza} key={otherpizza.id}>
                                <Link href={`/` + otherpizza.slug}><a>
                                    <img src={otherpizza.image} alt={otherpizza.name} />
                                    <p>{otherpizza.name}</p>
                                </a></Link>

                            </div>
                        )
                    })}
                    
                </div>
                
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {

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
            toppings: ['mozzarella cheese'],
            image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            price: 29.99,
            description: 'anit that a female dog',
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
            description: 'anit that a female dog',
            slug: 'chase-pizza',
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
            toppings: ['mozzarella cheese'],
            description: 'anit that a female dog',
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80',
            price: 29.99,
        }
    ]

    const paths = pizzas.map (pizza => ({
        params: {slug: `${pizza.slug}`}
    }));
    return{
        paths,
        fallback:false,
    }
}



export const getStaticProps = async ({params}) => {
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
            toppings: ['mozzarella cheese'],
            description: 'anit that a female dog',
            image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            price: 29.99,
        },
        {
        
            id: '3',
            name: 'dog-pizza',
            slug: 'dog-pizza',
            toppings: ['mozzarella cheese', 'jam'],
            description: 'anit that a female dog',
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            price: 93.99,
        },
        {
        
            id: '4',
            name: 'chase-pizza',
            slug: 'chase-pizza',
            toppings: ['mozzarella cheese', 'ham'],
            description: 'anit that a female dog',
            image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
            price: 49.99,
        },
        {
        
            id: '5',
            name: 'stave-pizza',
            slug: 'stave-pizza',
            toppings: ['mozzarella cheese'],
            description: 'anit that a female dog',
            image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
            price: 39.99,
        },
        {
        
            id: '6',
            name: 'watch-pizza',
            slug: 'watch-pizza',
            toppings: ['mozzarella cheese'],
            description: 'anit that a female dog',
            image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80',
            price: 29.99,
        }
    ]
    const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
    const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

    return {
        props: {
            pizza: pizza[0],
            otherPizzas: otherPizzas.sort(() => Math.random()).slice(0, 3),
        }
    }

    
}


