import { useEffect, useState } from "react";
import { Records } from "../../types/Records";
import "./Menu.css";

export const Menu = () => {
    const info: Records[] = [
        {
            name: "Andres",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            name: "Pedro",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            name: "Luis",
            password: "12345",
            date: new Date().toISOString(),
            action: "Cambio de contraseña",
        },
        {
            name: "Juan",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            name: "Rey",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            name: "Andres",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            name: "Pedro",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            name: "Luis",
            password: "12345",
            date: new Date().toISOString(),
            action: "Cambio de contraseña",
        },
        {
            name: "Juan",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            name: "Rey",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            name: "Andres",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            name: "Pedro",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            name: "Luis",
            password: "12345",
            date: new Date().toISOString(),
            action: "Cambio de contraseña",
        },
        {
            name: "Juan",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            name: "Rey",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
    ];

    const [data, setData] = useState<Records[]>([]);

    useEffect(() => {
        return () => {
            handleInformation();
        };
    }, []);

    function handleInformation(): void {
        // get the data
        setData(info);
    }

    return (
        <div className="relative overflow-x-auto overflow-y-auto rounded-lg m-4 content">
            <table className="w-full mx-auto text-sm text-left rtl:text-right">
                <thead className="text-xs text-white uppercase bg-color-td">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Usuario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Contraseña
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha y hora
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acción
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr
                                className="text-black border-b border-gray-300 bg-row"
                                key={key}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium whitespace-nowrap text-black"
                                >
                                    {val.name}
                                </th>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {val.password}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {val.date}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {val.action}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a
                                        href="#"
                                        className="font-bold text-orange-400 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
