import { ChangeEvent, FormEvent, useState } from 'react';
import '../../App.css';


export function Signup() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [radio, setRadio] = useState('');

    const handleChangeUser = ({target}: ChangeEvent<HTMLInputElement>) => {
        setUser(target.value)
    }

    const handleChangePsw = ({target}: ChangeEvent<HTMLInputElement>) => {
        setPassword(target.value)
    }

    const handleChangeRadio = ({target}: ChangeEvent<HTMLInputElement>) => {
        setRadio(target.value)
    }

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        console.log(user);
        console.log(password);
        console.log(radio);
    }

    const selectedHnd = () => {
        
    }

    return (
        <div className="px-3 h-screen img-screen-sign">
            <h1 id='newElement'></h1>

            <form className="wrapper space-x-5 space-y-3.5 bg-blue-100 rounded-md mt-16 mx-auto px-16 py-5 pb-16 w-96 md:w-7/12 lg:w-7/12 xl:w-7/12 2xl:w-5/12 h-11/12" onSubmit={handleSubmit}>
                <h4 className="text-3xl text-center font-semibold my-1 mb-1 py-7 col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3">Registro de usuario</h4>
                
                <div className="grid grid-rows-2 ml-4 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="name" className="my-3">Nombre de usuario </label>
                    <input className="ml-1 h-6" type="text" id="name" onChange={handleChangeUser} />
                </div>
                
                <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="psw">Contraseña </label>
                    <input type="password" id="psw" onChange={handleChangePsw} />
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="email">Correo electrónico </label>
                    <input type="email" id="email" />
                </div>
                <div className='space-x-0.5 grid grid-rows-4 lg:grid-cols-5 lg:grid-rows-1 xl:grid-cols-5 xl:grid-rows-1 2xl:grid-cols-5 2xl:grid-rows-1' onChange={handleChangeRadio}>
                    <div className='space-x-5 lg:col-span-2 xl:col-span-2'>
                        <label htmlFor='radio0'>Cédula de extranjería </label>
                        <input type="radio" name='group0' value='cédula de extranjería' id='radio0' />
                    </div>
                    <div className='space-x-5 lg:col-span-2 xl:col-span-2'>
                        <label htmlFor='radio1'>Cédula de ciudadanía </label>
                        <input type="radio" name='group0' value='cédula de ciudadanía' id='radio1' />
                    </div>
                    <div className='space-x-3.5'>
                        <label htmlFor='radio2'>Pasaporte </label>
                        <input type="radio" name='group0' value='pasaporte' id='radio2' /> 
                    </div>
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="numberId">Número Identificación </label>
                    <input type="number" id="numberId" />
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="address">Dirección </label>
                    <input type="text" id="address" />
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="live">Municipio </label>
                    <input type="text" id="live" />
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="depart">Departamento </label>
                    <input type="text" id="depart" />
                </div>
                <div className="grid grid-rows-2 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 2xl:grid-rows-1">
                    <label htmlFor="cel">Celular (opcional) </label>
                    <input type="number" id="cel" />
                </div>
                <input type='submit' className="col-span-3 w-auto ml-auto px-24 h-8 bg-green-600 text-yellow-300 font-semibold rounded-md hover:bg-green-700 hover:ring-1 hover:ring-slate-400" />
            </form>
        </div>
    );
}