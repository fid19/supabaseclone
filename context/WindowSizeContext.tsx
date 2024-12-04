"use client"

import { resizeHook } from '@/hooks/useResize';
import React, { createContext, useContext } from 'react'


interface WindowSizeContextType {
    sizeRef: React.RefObject<number | undefined>;
}


const WindowContext = createContext<WindowSizeContextType>({
    sizeRef: { current: 0 }
})

export const WindowSizeProvider = ({ children }: {children: React.ReactNode }) => {

    const sizeRef = resizeHook()

    return (
        <WindowContext.Provider value={{ sizeRef }}>
            {children}
        </WindowContext.Provider>
    )
}

export function useWindowSize() {
    return useContext<WindowSizeContextType>(WindowContext)
}