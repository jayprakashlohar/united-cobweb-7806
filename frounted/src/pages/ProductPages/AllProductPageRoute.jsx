import React from 'react'
import {Route, Routes} from "react-router-dom"
import AcerProductPage from './AcerProductPage'
import AmazonProductPage from './AmazonProductPage'
import AndroidProductPage from './AndroidProductPage'
import IphoneProductPage from './IphoneProductPage'
import LatestProductPage from './LatestProductPage'
import SponseredProductPage from './SponseredProductPage'
import TopdealsProductPage from './TopdealsProductPage'

import SmarthomeProductPage from './SmarthomeProductPage'
import MarketPlaceProductPage from './MarketplaceProducrPage'




const AllProductPageRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/acerproductpage' element={<AcerProductPage />}></Route>
            <Route path='/amazonproductpage' element={<AmazonProductPage />}></Route>
            <Route path='/androidproductpage' element={<AndroidProductPage />}></Route>
            <Route path='/iphoneproductpage' element={<IphoneProductPage />}></Route>
            <Route path='/latestproductpage' element={<LatestProductPage />}></Route>
            <Route path='/marketplaceproductpage' element={<MarketPlaceProductPage/>}></Route>
            <Route path='/smarthomeproductpage' element={<SmarthomeProductPage />}></Route>
            <Route path='/sponseredproductpage' element={<SponseredProductPage />}></Route>
            <Route path='/topdealsproductpage' element={<TopdealsProductPage />}></Route>
          
        </Routes>
    </div>
  )
}

export default AllProductPageRoute