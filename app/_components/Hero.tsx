import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Globe2, Landmark, Plane, Send } from 'lucide-react'
import React from 'react'

const suggestions = [
    {
        title: "Create New Trip",
        icon: <Globe2 className='text-blue-400 h-5 w-5' />
    },
    {
        title: "Inspire me where to go",
        icon: <Plane className='text-green-500 h-5 w-5' />
    },
    {
        title: "Discover Hidden gems",
        icon: <Landmark className='text-orange-500 h-5 w-5' />
    },
    {
        title: "Adventure Destination",
        icon: <Landmark className='text-yellow-600 h-5 w-5' />
    },
]


const Hero = () => {
    return (
        <div className='mt-24  text-center'>

            <div className="max-h-3xl w-full text-center space-y-6 max-w-[800] mx-auto">
                <h1 className="text-xl md:text-5xl font-bold">
                    Plan Your Perfect Trip in Seconds with <span className="text-primary font-bold">Trip Planner</span>
                </h1>
                <p className="text-lg">
                    Effortlessly organize flights, hotels, and itineraries with AI-powered suggestions. Your next adventure is just a few clicks away—let us handle the details so you can focus on exploring!
                </p>


                <div className=" mx-auto">
                    <div className="border rounded-2xl relative">
                        {/* TEXT INPUT */}
                        <Textarea placeholder='Create a trip for Parise from New york'
                            className='w-full h-28 bg-transparent shadow-none border-none resize-none p-4'
                        />

                        <Button className='absolute right-2 bottom-2' size={"icon"}><Send /></Button>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5">
                    {
                        suggestions?.map((suggestion, idx) => (
                            <div key={idx} className="flex items-center gap-2 border rounded-full p-2 hover:bg-primary hover:text-white tranistion-all duration-300 cursor-pointer" >
                                {suggestion?.icon}
                                <h2 className='text-sm'>{suggestion?.title}</h2>
                            </div>
                        ))
                    }
                </div>

            </div>


        </div>
    )
}

export default Hero