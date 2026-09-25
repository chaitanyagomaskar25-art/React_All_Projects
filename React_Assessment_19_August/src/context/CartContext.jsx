import { createContext, useContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";

const CartContext = createContext()
const DispatchContext = createContext()

export const CartContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, initialState)

    return(
        <CartContext value={state}>
            <DispatchContext value={dispatch}>
                {children}
            </DispatchContext>
        </CartContext>
    )
}


export const useCartContext = ()=>{
    const result = useContext(CartContext)
    if(result === undefined){
        throw new Error("Cart Context is undefined");
        
    }
    return result
}

export const useDispatchContext = ()=>{
    const result = useContext(DispatchContext)
    if(result === undefined){
        throw new Error("Cart Context is undefined");
        
    }
    return result
}