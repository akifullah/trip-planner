import React from 'react'
import ChatBox from './_components/ChatBox'

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-10'>
            <div className="">
               <ChatBox/>
            </div>

            <div className="">
                map and trip plan to display
            </div>
        </div>
    )
}

export default page