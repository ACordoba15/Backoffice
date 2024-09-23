import { useEffect, useState } from "react";
import { User } from "../../types/User";

export const UserTable = () => {
    const info: User[] = [
        {
            id: 1,
            username: "Andres",
            password: "f61cc049-3aba-46e9-a867-aba2b68d8c6e",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 2,
            username: "Pedro",
            password: "a0e0487c-c2c8-4bf5-b594-0e89f4fc8880",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 3,
            username: "Luis",
            password: "6db114d5-8253-4dec-9a6c-7d8c0ba17737",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 4,
            username: "Juan",
            password: "318741cf-1d03-4a70-894e-84c7b112a889",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
        {
            id: 5,
            username: "Rey",
            password: "cb280436-bf5b-4737-b8ba-36ce68be67a1",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ];

    const [data, setData] = useState<User[]>([]);
    const [visiblePasswords, setVisiblePasswords] = useState<Record<number, boolean>>({});

    useEffect(() => {
        return () => {
            handleInformation();
        };
    }, []);

    function handleInformation(): void {
        // get the data
        setData(info);
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
                                        className="py-1 px-3 rounded"
                                    >
                                        {visiblePasswords[val.id] ? <img src="/src/assets/eye-slash.svg" alt="eye-slash"/> : <img src="/src/assets/eye.svg" alt="eye"/>}
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
