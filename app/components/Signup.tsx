// "use client"

import { AuthButton } from "./Button";

// Instead of making entire component as client component, try to move that part of code in a different component which causing the entire component to be a client component. For E.g. (here button is making this entire signin component as client component)

export default function SignupComponent() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
                {/* Login Form Section */}
                <div className="flex flex-col justify-center">
                    <div className="space-y-6 max-w-md">
                        <div className="space-y-2">
                            <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
                            <p className="text-gray-500">
                                Don&apos;t have an account?{" "}
                                <a href="signin" className="text-blue-600 hover:underline">
                                    Sign in
                                </a>
                            </p>
                        </div>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="username" className="text-sm font-medium">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    placeholder="Yuvraj Singh"
                                    type="text"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="username" className="text-sm font-medium">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    placeholder="yuvrajsingh@gmail.com"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    placeholder="123456"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <AuthButton type="Sign in"/>
                        </form>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="hidden md:flex items-center justify-center bg-gray-100 rounded-lg p-8">
                    <div className="max-w-md space-y-4">
                        <blockquote className="text-2xl font-semibold">
                            &ldquo;The customer support I received was exceptional. The support team went above and beyond to address my concerns&rdquo;
                        </blockquote>
                        <div>
                            <div className="font-semibold">Julies Winfield</div>
                            <div className="text-gray-500 text-sm">CEO | Acme corp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

