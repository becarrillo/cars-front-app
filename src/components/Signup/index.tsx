import { useState } from "react";

export function Signup() {
    const [message, setMessage] = useState('') as any;

    return (
        <div className="px-3">
            <h2 className="text-3xl text-center font-semibold mt-1 mb-1 py-3">Registro</h2>
            <hr />
            <button className="bg-orange-600 text-xl text-white px-5 py2" id="output0">{message}</button>

            <form className="space-x-5 space-y-3.5 bg-purple-100 px-8 py-2" method="post" target="_blank">
                <div>
                    <input type="radio" name="empleoactual" value="tiempo completo" /> Tiempo completo<br></br>

                    <input type="radio" name="empleoactual" value="mediodia" /> Medio día<br></br>

                    <input type="radio" name="empleoactual" value="sinempleo" /> Sin empleo
                </div>
                <select onChange={(ev) => setMessage(() => ev.target.value)}>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                </select>

                <input type='submit' className="bg-green-600 text-yellow-300 font-semibold px-4 py-1 rounded-md hover:bg-green-700 hover:ring-1 hover:ring-slate-400" />
            </form>
        </div>
    );
}

