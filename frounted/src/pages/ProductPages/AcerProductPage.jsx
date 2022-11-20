import React, { useEffect, useState } from 'react'
import { BiRightArrow } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import AcerData from "../../data/acer.json"
import AllProductPageRoute from './AllProductPageRoute'



export const ProductsLinks = [
  {
    id: 1,
    title: "Acer Products",
    
      link:"/acerproductpage"
  },
  {
    id: 2,
    title: "Amazon Products",
    link:"/amazonproductpage"
  },
  {
    id: 3,
    title: "Android Products",
    link:"/androidproductpage"
  },
  {
    id: 4,
    title: "Iphone Products",
    link:"/iphoneproductpage"
  },
  {
    id: 5,
    title: "Latest Products",
    link:"/latestproductpage"
  },
  {
    id: 6,
    title: "Marketplace Products",
    link:"/marketplaceproductpage"
  },
  {
    id: 7,
    title: "Smarthome Products",
    link:"/smarthomeproductpage"
  },
  {
    id: 8,
    title: "Sponsered Products",
    link:"/sponseredproductpage"
  },
  {
    id: 9,
    title: "Topdeals Products",
    link:"/topdealsproductpage"
  },
]

const AcerProductPage = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState("")
  const [cartData, setCartData] = useState([])

  const handleClick = (el) => {
    setCartData([...cartData, el])
  }
  console.log(cartData)

  useEffect(() => {
    setData(AcerData)
  }, [])
  const handleOnchange = (e) => {
    let selectedValue = e.target.value
    if (selectedValue == "INC") {
      let updatedData = AcerData.sort((a, b) => {
        return a.price - b.price
      })

      setData(updatedData)
      setValue(selectedValue)


    }
    if (selectedValue == "DEC") {
      let updatedData = AcerData.sort((a, b) => {
        return b.price - a.price
      })

      setData(updatedData)
      setValue(selectedValue)
    }


  }

  return (
    <div>
      <AllProductPageRoute />
      <div>
        <div className='border-solid border-b-4 border-gray-200 w-screen mt-8'></div>
        <div className='flex items-center gap-1 text-sm my-2 border-solid border-b-2 border-gray-200 w-screen pb-2'> Best Buy  <BiRightArrow size={10} />All categories</div>

        <div className='flex w-11/12 m-auto gap-8  '>
          <div className='sticky top-10 sm:w-1/4 hidden sm:block border-solid border-r-2 border-gray-400 h-screen '>
            <div>
              <h3 className='font-bold text-blue-700'>Links to different Products page.</h3>
              <ul className='mt-12'>
                {ProductsLinks.map((el)=>(
               <Link to={el.link}><li key={el.id} className='my-4 text-md hover:text-sky-500 hover:scale-105 duration-200 pl-10 border-solid border-b-2 border-gray-400 cursor-pointer'>{el.title}</li></Link>   
                ))}
              </ul>
            </div>


          </div>
          <div className='sm:w-3/4'>
            <div className='flex justify-between items-center border-solid border-b-2 border-gray-200'>
              <p>20 items</p>
              <div>
                <span>Sort by:{value}</span><select onChange={handleOnchange} className='border-solid ml-2  border-2 border-gray-200 p-2 focus:none'>

                  <option value="DEC">High to low</option>
                  <option value="INC">Low to high</option>

                </select>
              </div>

            </div>
            <div className='grid grid-cols-1' >

              {data.map((el) => (
                <div key={el.id} className='flex  gap-2 sm:justify-between border-solid border-b-2 border-gray-200   '>


                  <div className='w-1/3'>
                    <img src={el.imgUrl} alt="" className='cursor-pointer' />
                  </div>
                  <div className='w-1/3'>
                    <p className=' text-blue-500 hover:underline cursor-pointer mt-7 text-md'>{el.title}  </p>

                    <p className='text-sm my-2'><span className='font-bold'>Brand:</span>{el.brand}</p>
                    <p className='sm:text-sm'>{el.rate}</p>
                    <p className='my-2 text-sm text-green-900 font-bold'>Get it today</p>
                    <p className='hidden sm:block bg-red-700 text-white font-bold w-fit px-2'>{el.top}</p>
                    <p className='hidden sm:block sm:text-sm my-2'><span className='font-bold'>Pickup: </span> Ready in 1hr to dispatch from  warehouse.</p>
                    <p className='hidden sm:block sm:text-sm my-2'><span className='font-bold'>Shipping: </span>{el.end}</p>
                  </div>
                  <div className='w-1/3 '>
                    <p className='text-sm sm:text-3xl font-bold mt-7 md:ml-24'>$ {el.price}</p>
                    <p className='hidden sm:block bg-red-700 text-white font-bold w-fit px-2  md:ml-24'> {el.save}</p>
                    <button className='text-sm my-2 bg-yellow-300 text-black md:ml-24 sm:mt-8 flex md:gap-2 font-bold 2xl:px-14 sm:py-2 rounded-lg' onClick={() => handleClick(el)}> <AiOutlineShoppingCart size={20} />Add to card</button>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default AcerProductPage