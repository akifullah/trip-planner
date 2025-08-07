import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Pricing",
        path: "/pricing"
    },
    {
        name: "Contact Us",
        path: "/contact-us"
    },
]


const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between p-4">
                {/* logo */}
                <div className="flex items-center gap-2">
                    <Image src="./logo.svg" width={30} height={30} alt='logo' />
                    <h2 className='text-2xl font-bold'>Trip Planner</h2>
                </div>


                <div className="flex items-center gap-8">
                    {
                        menuOptions?.map((menu, idx) => (
                            <Link href={menu?.path} key={idx} className='text-lg hover:scale-105 hover:text-primary transitions-all duration-400'>{menu?.name}</Link>
                        ))
                    }
                </div>

                <div className="">
                    <SignInButton mode='modal'>
                        <Button>Get Started</Button>
                    </SignInButton>
                </div>

            </div>

        </>
    )
}

export default Header