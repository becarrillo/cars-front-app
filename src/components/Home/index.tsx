import { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import Navbar from '../Navbar/index';
import './style.css';

const Home = () => {

    const ctx = useContext(TodoContext);

    return (
        <div className='wrapper flex flex-col justify-center overflow-x-hidden' id='home1'>
            <div className='flex flex-col w-auto h-full'>
                <Navbar brand='VehistockUsa2.Com' />
                <section className='self-center mt-28 lg:mt-5 xl:mt-2 2xl:mt-0' id='homeSection'>
                    <div className='grid grid-cols-2 gap-4 pl-auto pr-auto md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-4 xl:grid-cols-4 xl:gap-4 2xl:grid-cols-4 2xl:gap-4'>
                        {
                            ctx.datos.map(dato => {
                                return (
                                    <article className='grid grid-rows-9 bg-zinc-200 rounded-lg shadow-lg shadow-zinc-400 my-20 w-36 h-64 p-3 md:w-44 lg:my-24 lg:p-7 md:h-80 xl:my-24 xl:p-7 xl:h-80 2xl:my-24 lg:w-44 lg:h-80 xl:w-64 2xl:w-64 2xl:p-8 2xl:h-80'>
                                        <h5 className='row-span-1 text-lg font-bold bg-gray-100 rounded-md'>{`${dato.brand} ${dato.model}`}</h5>
                                        <span className='row-span-6 bg-yellow-200'></span>
                                        <p>
                                            {`Precio: $${dato.price}`}
                                        </p>
                                    </article>
                                );
                            })
                        }
                    </div>

                </section>
            </div>
        </div>
    );
};

export default Home;