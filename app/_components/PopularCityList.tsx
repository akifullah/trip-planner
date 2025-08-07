"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                Discover Popular Cities for Your Next Adventure.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                Plan your next adventure with ease!
                            </span>{" "}
                            Use Trip Planner to organize your flights, hotels, and daily itineraries in seconds. Get AI-powered suggestions for destinations, activities, and hidden gems. Whether you want inspiration or already know where to go, our platform helps you create the perfect trip—stress free.
                        </p>
                        <img
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Trip Planner UI mockup"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Popular City",
        title: "Explore Paris, the City of Lights",
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
        content: <DummyContent />,
    },
    {
        category: "Popular City",
        title: "Discover Tokyo's Vibrant Culture",
        src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
        content: <DummyContent />,
    },
    {
        category: "Popular City",
        title: "Experience the Magic of New York",
        src: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3",
        content: <DummyContent />,
    },
    {
        category: "Popular City",
        title: "Wander Through the Streets of Rome",
        src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3",
        content: <DummyContent />,
    },
    {
        category: "Popular City",
        title: "Marvel at the Beauty of Sydney",
        src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3",
        content: <DummyContent />,
    },
    {
        category: "Popular City",
        title: "Adventure Awaits in Cape Town",
        src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
        content: <DummyContent />,
    },
];
