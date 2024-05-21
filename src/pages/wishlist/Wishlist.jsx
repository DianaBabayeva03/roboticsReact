import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FeaturedWishlist from '../../components/cards/FeaturedWishlist'
import Header from '../../components/header/Header'
import ImprovedProduction from '../../components/improvedproduction/ImprovedProduction'

const Wishlist = () => {

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/wishlist')
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteData = (id) => {
        axios.delete(`https://664b0dc2a300e8795d44055f.mockapi.io/wishlist/${id}`)
        setTimeout(() => {
            getData()
        }, 300)
    }

  return (
    <>
        <Header />
        <ImprovedProduction />
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', width:'100%', alignItems:'center'}}>
            {
                data&&
                    data.map((item) => <FeaturedWishlist item={item} deletewish={() => deleteData(item.id)}/>)
            }
        </div>
    </>
  )
}

export default Wishlist