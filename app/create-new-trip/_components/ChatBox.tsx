"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import axios from 'axios'
import { Loader, Send } from 'lucide-react'
import React, { Fragment, useEffect, useState } from 'react'
import EmptyBoxState from './EmptyBoxState'
import GroupSize from './GroupSize'
import Budget from './Budget'
import TripDuration from './TripDuration'
import Final from './Final'

type Message = {
    role: String,
    content: String,
    ui?: String
}

const ChatBox = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isFinal, setIsFinal] = useState<boolean>(false);
    const onSend = async () => {

        if (!userInput?.trim() && !isFinal) return;
        setLoading(true);
        setUserInput("");

        const newMsg: Message = {
            role: "user",
            content: userInput
        }

        setMessages((prev: Message[]) => [...prev, newMsg]);

        const result = await axios.post("/api/aimodel", {
            messages: [...messages, newMsg],
            isFinal,
        });

       !isFinal && setMessages((prev: Message[]) => [...prev, {
            role: "assistant",
            content: result?.data?.resp,
            ui: result?.data?.ui
        }]);
        console.log(result?.data);
        setLoading(false);

    }


    const generateUiComponent = (ui: String) => {
        switch (ui) {
            case "budget":
                return <Budget onSelectOption={(v: string) => { setUserInput(v) }} />
            case "groupSize":
                return <GroupSize onSelectOption={(v: string) => { setUserInput(v) }} />
            case "TripDuration":
                return <TripDuration onSelectOption={(v: any) => { setUserInput(v) }} />
            case "Final":
                return <Final />
            default: return null;
        }
    }

    useEffect(() => {
        const lastMsg = messages[messages?.length - 1];
        if (lastMsg?.ui == "Final") {
            setIsFinal(true);
            onSend();
        }
    }, [messages]);
    return (
        <div className='h-[85vh] flex flex-col border-1 rounded-xl pt-4'>
            {
                messages?.length == 0 && <EmptyBoxState />
            }
            <section className='flex-1 overflow-y-auto px-4 '>

                {
                    messages?.map((msg: Message, idx) => (
                        msg?.role == "user" ?
                            <div className="flex justify-end mt-2" key={idx}>
                                <div className="max-w-lg bg-primary text-white px-4 py-2 rounded-lg">
                                    {msg.content}
                                </div>
                            </div>
                            :
                            <div className="flex justify-start mt-2" key={idx}>
                                <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                                    {msg.content}
                                    {generateUiComponent(msg.ui ?? "")}
                                </div>
                            </div>

                    ))
                }

                {
                    loading &&
                    <div className="flex justify-start mt-2">
                        <div className="max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg">
                            <Loader className='animate-spin' /> Thinking...
                        </div>
                    </div>
                }





            </section>

            <section>
                <div className="border rounded-2xl relative">
                    {/* TEXT INPUT */}
                    <Textarea placeholder='Describe your dream trip or ask for travel ideas...'
                        className='w-full h-28 bg-transparent shadow-none border-none resize-none p-4'
                        onChange={(e) => setUserInput(e.target.value)}
                        value={userInput ?? ""}
                    />

                    <Button className='absolute right-2 bottom-2' size={"icon"} onClick={() => onSend()}><Send /></Button>
                </div>
            </section>
        </div>
    )
}

export default ChatBox