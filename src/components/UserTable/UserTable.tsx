import { useEffect, useState } from "react";
import { User } from "../../types/User";
import axios from "axios";

export const UserTable = () => {
    const base: string = "http://localhost:8000/api";

    const [data, setData] = useState<User[]>([]);
    const [visiblePasswords, setVisiblePasswords] = useState<Record<number, boolean>>({});

    useEffect(() => {
        // Llama a la API cada 30 segundos
        const intervalId = setInterval(handleInformation, 30000);

        // Llama la primera vez sin esperar el intervalo
        handleInformation();

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    function handleInformation(): void {
        // get the data
        axios.get(`${base}/user/all`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function togglePasswordVisibility (userId: number): void {
        setVisiblePasswords((prevState) => ({
            ...prevState,
            [userId]: !prevState[userId], // Cambia la visibilidad de ese usuario
        }));
    };

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
                            Contraseña
                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha creación
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Fecha actualización
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
                                    {val.username}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {visiblePasswords[val.id] ? val.password : "**********"}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    <button
                                        onClick={() => togglePasswordVisibility(val.id)}
                                        className="py-1 px-3"
                                    >
                                        {visiblePasswords[val.id] ? <img src="/src/assets/eye-slash.svg" className="icon-eye" alt="eye-slash"/> : <img src="/src/assets/eye.svg" className="icon-eye" alt="eye"/>}
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {val.createdAt}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {val.updatedAt}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
