import React from 'react'
import Featured from './Featured'
import Trending from './Trending'

function FeaturedTrends() {
  return (
    <div className='container-box'>
      <div className="grid grid-col-1 md:grid-cols-2 items-center justify-center gap-3">
        <div>
            <Trending/>
        </div>
        <div>
            <Featured/>
        </div>
      </div>
      
    </div>
  )
}

export default FeaturedTrends
