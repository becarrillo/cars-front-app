import { ReactNode } from "react";
import { TodoContext } from './TodoContext';
import { carros } from './TodoContext';


interface ChildrenParam<T> {
    children: T
};

const TodoProvider = ({children}: ChildrenParam<ReactNode>) => {
    return (
        <TodoContext.Provider value={{carros: carros, stateAuthCompPointer: false}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;