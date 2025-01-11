"use client"
import React from "react";

type AuthButtonProps = {
    type: "Sign up" | "Sign in"
};

export const AuthButton: React.FC<AuthButtonProps> = function ({type}) {
    const handlSignin = () => {
        alert(`${type} Button Clicked`);
    }
    return (
        <button
            onClick={handlSignin}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
            {type}
        </button>
    )
}