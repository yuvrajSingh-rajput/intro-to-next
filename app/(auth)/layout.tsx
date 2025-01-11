import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="py-1 flex justify-center items-center text-center text-green-600 brightness-105 border">
                Get 20% off for the next 3 days.
            </div>
            {children}
        </>
    );
}
