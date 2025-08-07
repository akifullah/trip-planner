"use client"
import HeroVideoDialog from '@/components/magicui/hero-video-dialog'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useUser } from '@clerk/nextjs'
import { ArrowDown, Globe2, Landmark, Plane, Send } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const suggestions = [
    {
        title: "Create New Trip",
        icon: <Globe2 className='text-blue-400 h-5 w-5 group-hover:text-white tranistion-all duration-300' />
    },
    {
        title: "Inspire me where to go",
        icon: <Plane className='text-green-500 h-5 w-5 group-hover:text-white tranistion-all duration-300' />
    },
    {
        title: "Discover Hidden gems",
        icon: <Landmark className='text-orange-500 h-5 w-5 group-hover:text-white tranistion-all duration-300' />
    },
    {
        title: "Adventure Destination",
        icon: <Globe2 className='text-yellow-600 h-5 w-5 group-hover:text-white tranistion-all duration-300 ' />
    },
]


const Hero = () => {
    const user = useUser();
    const router = useRouter();
    const onSend = () => {
        console.log(user);
        if (!user || !user?.isSignedIn) {
            router.push("/sign-in");
            return ;
        }
        // NEVIGATE TO CREATE TRIP PLANNER SCREEN
        
    }
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
                        <Textarea placeholder='Describe your dream trip or ask for travel ideas...'
                            className='w-full h-28 bg-transparent shadow-none border-none resize-none p-4'
                        />

                        <Button className='absolute right-2 bottom-2' onClick={onSend} size={"icon"}><Send /></Button>
                    </div>
                </div>
                <div className="flex items-center flex-wrap justify-center md:justify-between  gap-5">
                    {
                        suggestions?.map((suggestion, idx) => (
                            <div key={idx} className="group text-nowrap flex items-center gap-2 border rounded-full p-2 hover:bg-primary hover:text-white tranistion-all duration-300 cursor-pointer" >
                                {suggestion?.icon}
                                <h2 className='text-sm'>{suggestion?.title}</h2>
                            </div>
                        ))
                    }
                </div>


                <div className="">
                    <h2 className='flex items-center justify-center mt-20 mb-7 gap-2'>Not Sure where to start? <strong>See how it works </strong> <ArrowDown /></h2>
                    <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>



            </div>


        </div>
    )
}

export default Hero