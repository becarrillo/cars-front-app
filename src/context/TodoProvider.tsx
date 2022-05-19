import { ReactNode } from "react";
import {TodoContext} from './TodoContext';
import { data } from './TodoContext';


interface ChildrenParam<T> {
    children: T
};

const TodoProvider = ({children}: ChildrenParam<ReactNode>) => {
    return (
        <TodoContext.Provider value={{datos: data}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;