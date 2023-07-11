import React from 'react'

const Flex = () => {
  return (
    <div >
        {/* <div>
            Header
        </div>
        <div className='flex '>
        <div className='basis-4/12'> 
                <div>Sidebar</div>
            </div>
            <div className='basis-6/12'>
                Main Content
            </div>
            <div className='basis-2/12'> 
                <div>Another Sidebar</div>
            </div>
        </div> */}
        <div>
            Header
        </div>
        <div className='flex flex-col md:flex-row'>
            {/* <div className='md:w-32 bg-sky-500'>Sidebar</div>
            <div className='w-full bg-red-600'>Main Content</div> */}
            <div>01</div>
            <div>02</div>
            <div>03</div>
        </div>
    </div>
  )
}

export default Flex