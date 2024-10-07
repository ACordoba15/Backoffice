import { useEffect, useState } from "react";
import { UserGO, UserTS } from "../../types/User";
import axios from "axios";

export const UserTable = () => {
    const base: string = "http://localhost:8000/api";

    const [data, setData] = useState<(UserTS | UserGO)[]>([]);
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
                console.log(response.data)
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
                                    { 'id' in val ? val.id : val.ID }
                                </th>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    { 'username' in val ? val.username : val.Username}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    { 'password' in val ? (visiblePasswords[val.id] ? val.password : "**********") : (visiblePasswords[val.ID] ? val.Password : "**********")}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    <button
                                        onClick={() => togglePasswordVisibility('id' in val ? val.id : val.ID)}
                                        className="py-1 px-3"
                                    >
                                        {
                                            visiblePasswords['id' in val ? val.id : val.ID ] ? 
                                            <img src="/src/assets/eye-slash.svg" className="icon-eye" alt="eye-slash"/> : 
                                            <img src="/src/assets/eye.svg" className="icon-eye" alt="eye"/>
                                        }
                                    </button>
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {'createdAt' in val ? val.createdAt : val.CreatedAt}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    { 'updatedAt' in val ? val.updatedAt : val.UpdatedAt}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
