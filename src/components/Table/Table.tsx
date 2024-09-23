import { useEffect, useState } from "react";
import { Records } from "../../types/Records";
import "./Table.css";

export const Table = () => {
    const info: Records[] = [
        {
            id: 1,
            name: "Andres",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            id: 2,
            name: "Pedro",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            id: 3,
            name: "Luis",
            password: "12345",
            date: new Date().toISOString(),
            action: "Cambio de contraseña",
        },
        {
            id: 4,
            name: "Juan",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            id: 5,
            name: "Rey",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            id: 1,
            name: "Andres",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            id: 2,
            name: "Pedro",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            id: 3,
            name: "Luis",
            password: "12345",
            date: new Date().toISOString(),
            action: "Cambio de contraseña",
        },
        {
            id: 4,
            name: "Juan",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            id: 5,
            name: "Rey",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            id: 1,
            name: "Andres",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            id: 2,
            name: "Pedro",
            password: "12345",
            date: new Date().toISOString(),
            action: "Registro",
        },
        {
            id: 3,
            name: "Luis",
            password: "12345",
            date: new Date().toISOString(),
            action: "Cambio de contraseña",
        },
        {
            id: 4,
            name: "Juan",
            password: "12345",
            date: new Date().toISOString(),
            action: "Inicio de sesión",
        },
        {
            id: 5,
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
                <thead className="text-xs text-white uppercase bg-color-td sticky top-0">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Usuario
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha y hora
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acción
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
                                    {val.id}
                                </th>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {val.name}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {val.date}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap text-orange-400">
                                    {val.action}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
