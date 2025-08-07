import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Trip Planner - Effortless Travel Planning",
  description: "Plan your next adventure in seconds with Trip Planner. Instantly organize flights, hotels, and itineraries with AI-powered suggestions and seamless booking. Your personal travel assistant for stress-free trips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body
          className={`${outfit.className}`}
          cz-shortcut-listen="true"
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
