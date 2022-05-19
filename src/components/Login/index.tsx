import { lazy } from "react";
import { render } from "react-dom";

export function Login() {
    return (
        <div className='flex flex-col bg-white rounded-lg mr-4 pr-5 pb-3 pl-3 py-2 shadow-md shadow-zinc-400 space-x-3 divide-x divide-slate-400'>
            <span className='text-center'>Ingresa o regístrate</span>
            <button className='bg-blue-400 py-1 font-semibold lg:px-3 xl:px-3 2xl:px-3 hover:ring-1 hover:bg-blue-500 hover:text-orange-300'>Login</button>
            <button className='bg-yellow-400 text-green-700 py-1 font-semibold lg:px-3 xl:px-3 2xl:px-3 hover:bg-yellow-500 hover:text-white'>Registro</button>
        </div>
    )
};