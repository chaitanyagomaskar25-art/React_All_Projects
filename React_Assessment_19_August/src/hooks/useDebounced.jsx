import { useEffect, useRef, useState } from "react"

export const useDebounced = (value, delay=500) =>{
    const [debounced, setDebounced] = useState(value)
    const timerRef = useRef(null)

    useEffect(()=>{
        if(timerRef.current){
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(()=>{
            setDebounced(value)
        }, delay)
        return ()=> clearTimeout(timerRef.current)
    },[value, delay])

    return debounced
}