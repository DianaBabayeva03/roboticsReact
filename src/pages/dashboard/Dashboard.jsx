import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import FeaturedDashboard from '../../components/cards/FeaturedDashboard'
import Header from '../../components/header/Header'
import ImprovedProduction from '../../components/improvedproduction/ImprovedProduction'

const Dashboard = () => {

    const [ data, setData ] = useState([])
    const [ search, setSearch ] = useState("")

    const getData = () => {
        axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/basket')
        .then((res) => {
            setData(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const formik = useFormik({
        initialValues: {
          thumbnail: "",
          title: "",
          description: "",
          price: "",
        },
        onSubmit: (values) => {
          axios.post(`https://664b0dc2a300e8795d44055f.mockapi.io/basket`, values);
          setTimeout(() => {
            getData();
          }, 1000);
        },
      });

      const deleteData = (id) => {
        axios.delete(`https://664b0dc2a300e8795d44055f.mockapi.io/basket/${id}`)
        setTimeout(() => {
            getData()
        }, 300)
      }

      const handleSearch = (event) =>{
        setSearch(event.target.value);
      };

    const filteredData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())
  );

//   const updateData = () => {
//     axios.post('https://664b0dc2a300e8795d44055f.mockapi.io/basket');
//         des='description',
//         title='title'
//   }

  return (
    <>
        <Header />
        <ImprovedProduction />
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:"40px 0"}}>
        <form style={{display:'flex', gap:'10px'}} onSubmit={formik.handleSubmit}>
          <input style={{outline:'none', borderRadius:'5px', borderColor:'darkred'}}
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input style={{outline:'none', borderRadius:'5px', borderColor:'darkred'}}
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input style={{outline:'none', borderRadius:'5px', borderColor:'darkred'}}
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          <input style={{outline:'none', borderRadius:'5px', borderColor:'darkred'}}
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button style={{border:'2px solid black', borderRadius: 5, backgroundColor:'white', padding:'5px 10px', cursor:"pointer"}} type="submit">Submit</button>
        </form>
      </div>
      <div>
            <input 
                type="text"
                placeholder='search '
                value={search}
                onChange={handleSearch}
            />
        </div>
        <div style={{display:'flex', flexWrap:'wrap', gap:10, padding:'40px', justifyContent:"space-between", alignItems:'center'}}>
            {
                    filteredData.map((item) => <FeaturedDashboard item={item} remove={() => deleteData(item.id)} />)
            }
        </div>
    </>
  )
}

export default Dashboard