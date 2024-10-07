import React, { useState } from 'react'

export const useCounter = (initialNum=0) => {
    const [contador, setContador] = useState(initialNum)
    const increment = (num = 1) => {
        setContador(c => c + num)
    }
    const decrement = (num = 1, negative = false) => {
        if (!negative) {
            if (contador == 0) return
            setContador(c => c - num)

        } else {

            setContador(c => c - num)
        }
    }
    const reset = () => {
        setContador(initialNum)
    }
    return {
        contador,
        increment,
        decrement,
        reset,
    }
}
