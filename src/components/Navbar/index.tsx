import { Link } from 'react-router-dom';
import { Auth } from '../auth/index';
import { TodoBrand } from './brand';

const Navbar = ({brand}: TodoBrand) => {

    return (
        <nav className='grid grid-rows-5 lg:grid-cols-7 w-screen shadow-lg shadow-zinc-300 fixed h-44 bg-slate-100 ml-auto mr-auto pl-1 py-4 justify-center lg:h-28 lg:fixed xl:grid xl:grid-cols-6 xl:fixed 2xl:grid 2xl:grid-cols-12 2xl:fixed'>
            <ul className='grid grid-cols-9 row-span-3 ml-auto mr-auto pt-3 md:divide-x md:divide-slate-300 h-24 md:ml-8 lg:grid grid-cols-11 lg:col-span-6 xl:grid grid-cols-11 xl:col-span-5 2xl:grid grid-cols-11 2xl:col-span-9 lg:flex lg:flex-row 
            xl:flex xl:flex-row 2xl:flex 2xl:flex-row lg:space-x-28 lg-w-auto lg:px-1 lg:col-span-4 xl:space-x-20 2xl:col-span-8 2xl:grid-cols-12 2xl:space-x-20'
            >
                <li className='text-2xl text-blue-800 italic font-bold pt-7 md:pt-2 lg:pt-2 xl:pt-2 2xl:pt-3 pl-2 lg:col-span-2 xl:text-3xl xl:col-span-3 2xl:text-3xl 2xl:col-span-3'><Link to='/#'>{brand}</Link></li>
                
                <li className='invisible pt-1 lg:visible lg:ml-auto lg:w-32 xl:visible'><Link to="/#" className='text-xl italic text-orange-800 pl-2 hover:text-pink-600 font-semibold xl:text-2xl 2xl:text-2xl 2xl:col-span-2'>Inicio</Link></li>
                <li className='invisible pt-1 lg:visible lg:ml-auto lg:w-32 xl:visible'><Link to="/sobre-nosotros" className='text-xl italic block text-orange-800 hover:text-pink-600 font-semibold md:text-lg lg:text-lg lg:col-span-4 lg:pr-auto lg:pt-0 
                xl:text-xl xl:pt-0 xl:pl-1 xl:col-span-4 2xl:text-2xl 2xl:col-span-2'>Nosotros</Link> </li>
                <li className='invisible pt-1 lg:visible lg:ml-auto lg:w-32 xl:visible'><Link to="/#" className='text-xl italic text-orange-800 hover:text-pink-600 font-semibold lg:ml-1 xl:ml-1 xl:text-2xl 2xl:ml-2 2xl:text-2xl'>Marcas</Link></li>
                <li className='invisible pt-1 lg:visible lg:ml-auto lg:w-32 xl:visible'><Link to="/#" className='text-lg italic text-orange-800 pl-2 pr-auto hover:text-pink-600 font-semibold xl:text-2xl 2xl:text-2xl'>Crédito</Link></li>
                <li className='invisible pt-1 lg:visible lg:ml-auto lg:w-32 xl:visible'><Link to="/#" className='text-xl italic text-orange-800 hover:text-pink-600 font-semibold lg:ml-4 xl:text-2xl xl:ml-3 2xl:text-2xl 2xl:ml-3'>Contacto</Link></li>
                <li className='visible px-36 md:px-56 lg:invisible xl:invisible 2xl:invisible'>
                    <button className='text-2xl font-semibold bg-white shadow-lg shadow-slate-400 px-2 py-1 rounded-3xl hover:ring-2 hover:ring-zinc-100 hover:bg-zinc-300'>&#x2630;</button>
                </li>
            </ul>
            <ul className='row-span-2 col-span-3 lg:col-span-2 2xl:col-span-4'> 
                <li className='text-md lg:text-lg lg:mt-12 lg:w-96 xl:text-xl xl:mt-12 xl:text-xl 2xl:mt-10 2xl:pr-9 2xl:grid 2xl:grid-cols-2'>
                    <Auth />
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;