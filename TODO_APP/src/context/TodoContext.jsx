import { Children, createContext, useContext, useReducer } from "react";
import { intialState, todoReducer } from "../reducer/TodoReducer";

const TodoContext = createContext()
const TodoDispatch = createContext()

export const TodoContextPovider = ({children})=>{
    const [state, dispatch] = useReducer(todoReducer, intialState)
    return(
        <TodoContext value={state}>
            <TodoDispatch value={dispatch}>
                {children}
            </TodoDispatch>
        </TodoContext>
    )
}

export const useTodoContext = ()=>{
    const result = useContext(TodoContext)
    if(result === undefined){
        throw new Error("TodoContext is undefined");
        
    } 
    return result
}

export const useTodoDispatch = ()=>{
    const result = useContext(TodoDispatch)
    if(result === undefined){
        throw new Error("TodoDispatch is undefined");
        
    } 
    return result
}