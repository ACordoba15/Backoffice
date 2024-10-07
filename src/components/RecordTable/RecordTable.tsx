import { useEffect, useState } from "react";
import { RecordTS, RecordGO } from "../../types/Record";
import axios from "axios";

export const RecordTable = () => {
    const base: string = "http://localhost:8000/api";

    const [data, setData] = useState<(RecordTS | RecordGO)[]>([]);

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
        axios.get(`${base}/record/all`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
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
                                    {'id' in val ? val.id : val.ID}
                                </th>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {'username' in val ? val.username : val.Username}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">
                                    {'createdAt' in val ? val.createdAt : val.CreatedAt}
                                </td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap text-orange-400">
                                    {'action' in val ? val.action : val.Action}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
