

import React, { useContext, useEffect, useState } from 'react'
import Header from './_components/Header'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/context/UserDetailContext';

function Provider({
    children,
}: Readonly<{ children: React.ReactNode }>) {

    const CreateUser = useMutation(api.user.CreateNewUser);
    const [userDetail, setUserDetail] = useState<any>();
    const { user } = useUser();


    useEffect(() => {
        user && CreateNewUser();
    }, [user]);

    const CreateNewUser = async () => {
        if (user) {

            type CreateUserInput = {
                email: string;
                imageUrl: string;
                name: string;
                subscription: string;
            };

            const userInput: CreateUserInput = {
                email: user?.primaryEmailAddress?.emailAddress ?? '',
                imageUrl: user?.imageUrl ?? '',
                name: user?.fullName ?? '',
                subscription: '', // Provide appropriate value here
            };

            const result = await CreateUser(userInput);
            setUserDetail(result);
        }

    }

    return (

        <div>
            <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
                <Header />
                {children}
            </UserDetailContext.Provider>
        </div>
    )
}

export default Provider;

export const useUserDetail = ()=>{
    return useContext(UserDetailContext);
}