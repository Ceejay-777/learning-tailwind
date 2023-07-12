import React from 'react'

const Grids = () => {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
        <div className='container mx-auto'>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                <div className='bg-sky-500 p-6 rounded-lg'>1</div>
                <div className='bg-sky-500 p-6 rounded-lg'>2</div>
                <div className='bg-sky-500 p-6 rounded-lg'>3</div>
                <div className='bg-sky-500 p-6 rounded-lg'>4</div>
                <div className='bg-sky-500 p-6 rounded-lg'>5</div>
                <div className='bg-sky-500 p-6 rounded-lg'>6</div>
            </div>
        </div>
    </div>
  )
}
 
export default Grids  