import React from 'react'

const SpacesAndSizes = () => {
  return (
    <div>
        <div className='bg-red-500 text-white font-bold ml-4'>Box with margin
        </div>
        <div className='bg-red-500 text-white font-bold p-4'>Box with padding</div>
        <br />

        <h1 className='font-bold text-2xl mb-4'>
            This is my title
        </h1>
        <p>This is my paragraph</p>
        <br />

        <div class="w-36 h-16 bg-blue-500 opacity-20"></div>
        <div class="bg-red-300 -mt-8">-mt-8</div>
        <br />

        <div className="w-16 h-16 bg-red-500"></div>
        <div className="w-16 h-16 bg-green-500"></div>
    </div>
  )
}
 
export default SpacesAndSizes