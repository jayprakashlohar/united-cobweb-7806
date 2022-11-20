import React from 'react'
import {Link} from "react-router-dom"
import AllProductPageRoute from '../../pages/ProductPages/AllProductPageRoute' 
function ProductBanner() {
  

  return (
    <div >
      <AllProductPageRoute  />
    <div style={{ 
      backgroundImage: `url("https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL78538_221107_VPT-LV-a69dd225-4140-452b-aab3-064e2408b94d.jpg")` ,
      backgroundRepeat: 'no-repeat',
    
    }}
    className="mt-10"
    >
      <div  className="flex flex-col  w-2/3 h-full pt-10 xl:ml-96 xl:pl-96 ">
   <Link to="/topdealsproductpage">  <p className='text-sm ml-20 bg-red-700 p-2 rounded-lg  md:ml-80 text-white w-fit cursor-pointer '>Top deals</p></Link> 
      <p className='text-3xl 2xl:text-6xl md:ml-56 font-bold text-white w-fit '>Great deals</p>
      <p className='text-xl 2xl:text-4xl font-bold md:ml-72 text-white w-fit ml-16 mb-6'>happening right now.</p>
      </div>
    </div>

    </div>
  )
}

export default ProductBanner