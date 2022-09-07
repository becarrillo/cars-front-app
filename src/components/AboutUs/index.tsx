import Navbar from "../Navbar"


export const AboutUs = () => {
    return (
        <div className="flex flex-row place-content-center h-screen" id="space">
            <Navbar brand="VehistockUsa2.Com" />
            <main className="text-center text-xl font-bold w-8/12 h-full py-48 overflow-y-scroll body_about ring-4 ring-gray-600">
                <h1 className="flex flex-row mt-9 mx-auto rounded-xl w-80 bg-slate-200 shadow-md shadow-zinc-400 text-2xl">
                    <svg className="w-8 h-7 ml-2 mr-16 text-orange-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Nosotros
                </h1>
                <p className="mt-20 mx-auto p-5 rounded-xl w-7/12 bg-slate-200 shadow-md shadow-zinc-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aut excepturi
                    sapiente quibusdam doloremque delectus officia aliquid modi perferendis<br></br>eum, distinctio nam neque tempora dolorem
                    quis fugit itaque sint consequatur.
                </p>
                <p className="mt-20 mx-auto p-5 rounded-xl w-7/12 bg-slate-200 shadow-md shadow-zinc-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aut excepturi
                    sapiente quibusdam doloremque delectus officia aliquid modi perferendis<br></br>eum, distinctio nam neque tempora dolorem
                    quis fugit itaque sint consequatur.
                </p>
                <p className="mt-20 mx-auto p-5 rounded-xl w-7/12 bg-slate-200 shadow-md shadow-zinc-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto aut excepturi
                    sapiente quibusdam doloremque delectus officia aliquid modi perferendis<br></br>eum, distinctio nam neque tempora dolorem
                    quis fugit itaque sint consequatur.
                </p>
            </main>
        </div>
    )
}