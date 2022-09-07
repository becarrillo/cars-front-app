import { MouseEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../context/TodoContext";


export function Auth() {
    let clickCtx: boolean = useContext(TodoContext).stateAuthCompPointer;
    const [showAuthModal, setShowAuthModal] = useState<boolean>(clickCtx);
    const btnYellowSignStr ="bg-yellow-400 text-green-700 font-semibold lg:px-3 xl:px-3 2xl:w-72 2xl:px-3 hover:bg-yellow-500 hover:text-white 2xl:mr-20";
    
    const handleClickLoginBtn = (ev:  MouseEvent) => {
        if (!showAuthModal) {
            ev.currentTarget.toggleAttribute("hidden");
            if (!ev.currentTarget.getAttribute("hidden") && ev.currentTarget.getAttributeNode('isShown')) {
                    setShowAuthModal(() => false)
                }
            else {
                setShowAuthModal(() => true);
                document.querySelector('#signup-btn')?.setAttribute("class", btnYellowSignStr + ' ' + "rounded-lg py-2");
            }
            
        } else {
            ev.currentTarget.toggleAttribute("hidden", false);
            setShowAuthModal(() => false);
        }
    }

    const handleModClickCloseEvent = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.currentTarget.parentElement?.parentElement?.parentElement?.
        children.namedItem("login-btn")?.removeAttribute("hidden");
        setShowAuthModal(() => false);
        ev.currentTarget.parentElement?.remove();
        document.querySelector('#signup-btn')?.setAttribute("class", btnYellowSignStr + ' ' + "py-1");
    }

    return (
        <div className='flex flex-col bg-white rounded-lg mr-4 pr-5 pb-3 pl-3 py-2 shadow-md shadow-zinc-400 space-x-3 divide-x 
        divide-slate-400 2xl:col-span-2'>
            <span className='text-center'>Ingresa o regístrate</span>
            <button className='bg-blue-400 py-1 font-semibold lg:px-3 xl:px-3 2xl:w-72 2xl:px-3 hover:ring-1 hover:bg-blue-500 
            hover:text-orange-300' name="login-btn" id="login-btn" onClick={handleClickLoginBtn}>Login</button>
            {
                showAuthModal && (
                    <form className="w-auto h-full pr-0 2xl:w-14" name="my-form" id="my-form" onSubmit={(ev) => {
                        ev.preventDefault(); ev.currentTarget.remove();
                    }}>
                        <fieldset className="flex flex-col bg-slate-100 space-y-7 rounded-lg text-center 
                        py-5 transition transform h-full 2xl:mr-14">        
                            <button className="bg-red-300 rounded-3xl w-9 h-9 font-semibold self-end mr-4 hover:scale-125 
                            hover:bg-red-500 hover:ring-1 hover:ring-slate-400 hover:text-white align-end"
                            id="closing-btn" onClick={handleModClickCloseEvent}
                            >
                                &#88;
                            </button>
                            <h2 className="text-center font-bold mx-9 rounded-md">INICIAR SESIÓN</h2>
                            
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                className="w-auto mx-7"
                            />          
                            
                            <label htmlFor="password">Contraseña</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="w-auto mx-7"
                            />
                            <button className="mx-14 px-3 py-1 bg-blue-400 rounded-md font-semibold hover:bg-blue-500 hover:text-white">Ingresar con Google</button>
                            <input type="submit" className="mx-auto px-9 bg-green-700 rounded-lg text-white px-3 py-1 cursor-pointer hover:bg-green-800" value="Acceder" />
                        </fieldset>
                    </form>
                )
            }
            <button className='bg-yellow-400 text-green-700 py-1 font-semibold lg:px-3 xl:px-3 2xl:w-72 2xl:px-3 hover:bg-yellow-500 
            hover:text-white 2xl:mr-20' id="signup-btn">
                <Link to='/register' target="_blank">Registrarse</Link>
            </button>
        </div>
    )
};