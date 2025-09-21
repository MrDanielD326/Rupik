import React, { ReactNode } from 'react'

interface AuthProps {
    children: ReactNode
}

export const Auth = ({ children }: AuthProps) => (
    <div className="flex items-center justify-center min-h-screen">
        {children}
    </div>
)
