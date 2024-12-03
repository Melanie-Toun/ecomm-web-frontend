import React from 'react'
// import { Carousel } from "flowbite-react";


function Banner() {
  return (
    <div className='container-box'>
      <div className="banner grid grid-cols-1 items-center uppercase gap-3 md:grid-cols-2">
        <div className="banner-img">
          <img src="/img/bag3.jpg" className='w-full' alt="" />
        </div>
        <div className="banner-text space-y-3 font-serif block">
          <h2>Welcome to J24 stores</h2>
          <h2>Get your designer bags here..!</h2>
        </div>
      </div>
    </div>
  )
}
// function Banner() {
//   return (
//     <div>
//       <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
//       <Carousel>
//         <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
//       </Carousel>
//       <Carousel indicators={false}>
//         <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
//         <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
//       </Carousel>
//     </div>
//     </div>
//   )
// }

export default Banner
