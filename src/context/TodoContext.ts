import { createContext } from 'react';
import * as todoData from '../data/data.json';


export const { carros } = todoData;

export const TodoContext = createContext({carros: carros, stateAuthCompPointer: false});