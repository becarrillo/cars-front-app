import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import Navbar from '../Navbar/index';
import '../../../src/App.css'
import './style.css';


const Home = () => {

    const ctx = useContext(TodoContext);

    return (
        <div className='flex flex-col img-screen-sign w-auto h-screen'>
            <Navbar brand='VehistockUsa2.Com' />
            <section className='self-center mb-2 lg:mt-5 xl:mt-2 2xl:mt-0' id='homeSection'>
                <div className='container grid grid-cols-2 gap-5 mt-56 px-3 py-0 shadow-lg shadow-zinc-500 overflow-y-scroll scroll-smooth h-3/4 
                pl-auto pr-auto md:w-full md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4 2xl:gap-4'>
                    {
                        ctx.carros.map(dato => {
                            return (
                                <article className='grid grid-rows-9 bg-zinc-200 rounded-lg shadow-lg shadow-zinc-400 my-20 w-36 h-64 p-3 
                                md:w-44 lg:my-24 lg:p-7 md:h-80 xl:my-24 xl:p-7 xl:h-80 2xl:my-24 lg:w-44 lg:h-80 xl:w-64 2xl:w-64 2xl:p-8 
                                2xl:h-80'>
                                    <h5 className='row-span-1 text-lg font-bold bg-gray-100 rounded-md'>{`${dato.brand} ${dato.model}`}</h5>
                                    <img src={`${dato.pic}`} className="row-span-6 my-2" />
                                    <button className='bg-zinc-300 px-4 py-1 rounded-md hover:bg-zinc-400 hover:text-white hover:animate-ping'>Comprar</button>
                                    <span>
                                        {`Precio: $${dato.price}`}
                                    </span>
                                </article>
                            );
                        })
                    }
                </div>
            </section>
            <footer className='font-bold text-lg mx-4 pb-9'>Desarrollado por: Brando Elí Carrillo Pérez</footer>
        </div>
    );
};

export default Home;