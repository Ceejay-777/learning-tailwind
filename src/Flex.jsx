import React from 'react'

const Flex = () => {
  return (
    <div >
        <div>
            Header
        </div>
        <div className='flex '>
            <div >
                Main Content
            </div>
            <div className='flex flex-col'> 
                <div>Sidebar</div>
                <div>Menu</div>
            </div>
        </div>
    </div>
  )
}

export default Flex