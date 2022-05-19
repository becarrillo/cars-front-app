import { createContext } from 'react';


export let data = [
    {'brand': 'Ford', 'model': 'Mustang 1967', 'price': 136200},
    {'brand': 'Mercedez Benz', 'model': 'H900', 'price': 190000},
    {'brand': 'Renault', 'model': 'Clio 2007', 'price': 89000},
    {'brand': 'Chevrolet', 'model': 'Spark GT-Full 2018', 'price': 115590},
    {'brand': 'Volvo', 'model': 'Sim-870E 2004', 'price': 84000},
    {'brand': 'Renault', 'model': 'Logan 2015', 'price': 76400}
];

export const TodoContext = createContext({datos: data});