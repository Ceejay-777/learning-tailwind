import React from 'react'

const Grids = () => {
  return (
    <div className="text-white Parent bg-slate-900">
        <div className='container mx-auto'>
            {/* <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className='bg-sky-500 p-6 rounded-lg'>1</div>
                <div className='bg-sky-500 p-6 rounded-lg'>2</div>
                <div className='bg-sky-500 p-6 rounded-lg '>3</div>
                <div className='bg-red-500 p-6 rounded-lg col-span-2'>4</div>
                <div className='bg-sky-500 p-6 rounded-lg'>5</div>
                <div className='bg-sky-500 p-6 rounded-lg'>6</div>
            </div> */}

            {/* <div className="grid grid-cols-6 gap-4">
                <div className="col-start-3 col-span-4 bg-sky-500 p-6 rounded-lg">01</div>
                <div className="col-start-1 col-end-3 bg-sky-500 p-6 rounded-lg">02</div>
                <div className="col-end-7 col-span-2 bg-sky-500 p-6 rounded-lg">03</div>
                <div className="col-start-1 col-end-7 bg-sky-500 p-6 rounded-lg">04</div>
            </div> */}
 
            <div className="grid grid-flow-col auto-cols-max">
                <div className='bg-sky-500 p-6 rounded-lg'>01</div>
                <div className='bg-sky-500 p-6 rounded-lg'>02</div>
                <div className='bg-sky-500 p-6 rounded-lg'>03</div>
            </div>
            <div className="grid grid-flow-col auto-cols-max">
                <div className='bg-sky-500 p-6 rounded-lg'>01</div>
                <div className='bg-sky-500 p-6 rounded-lg'>02</div>
                <div className='bg-sky-500 p-6 rounded-lg'>03</div>
            </div>
            <div className="grid grid-flow-col auto-cols-max">
                <div className='bg-sky-500 p-6 rounded-lg'>01</div>
                <div className='bg-sky-500 p-6 rounded-lg'>02</div>
                <div className='bg-sky-500 p-6 rounded-lg'>03</div>
            </div>
            <div className="grid grid-flow-col auto-cols-max">
                <div className='bg-sky-500 p-6 rounded-lg'>01</div>
                <div className='bg-sky-500 p-6 rounded-lg'>02</div>
                <div className='bg-sky-500 p-6 rounded-lg'>03</div>
            </div>
            <div className="grid grid-flow-col auto-cols-max">
                <div className='bg-sky-500 p-6 rounded-lg'>01</div>
                <div className='bg-sky-500 p-6 rounded-lg'>02</div>
                <div className='bg-sky-500 p-6 rounded-lg'>03</div>
            </div>
        </div>
    </div>
  )
}
 
export default Grids  