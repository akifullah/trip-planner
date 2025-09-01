"use client"
import { ConvexProvider, ConvexReactClient } from "convex/react";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
import { ReactNode } from "react";
import Provider from "./Provider";
export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return <ConvexProvider client={convex}>
        <Provider>
            {children}
        </Provider>
    </ConvexProvider>;
}