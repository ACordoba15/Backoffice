import { useEffect, useState } from "react";
import { Card } from "../components/Cards/Cards";
import axios from "axios";

export function Home() {
    const base: string = "http://localhost:8000/api";
    const [totalUsers, setTotalUsers] = useState<number>(0);
    const [totalRecords, settotalRecords] = useState<number>(0);

    useEffect(() => {
        // Llama a la API cada 30 segundos
        const intervalId = setInterval(fetchData, 30000);

        // Llama la primera vez sin esperar el intervalo
        fetchData();

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    const fetchData = async() => {
        axios.get(`${base}/user/all`)
        .then(response => {
            setTotalUsers(response.data.length)
        })
        .catch(error => {
            console.error(error);
        });
    
    axios.get(`${base}/record/all`)
        .then(response => {
            settotalRecords(response.data.length)
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div className="relative overflow-x-auto overflow-y-auto rounded-lg m-4 content">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <h1 className="text-2xl font-bold mb-4 text-orange-500">Dashboard</h1>
                <div>
                    <Card title="Total de Usuarios" value={totalUsers} path="/Users"/>
                    <Card title="Total de Registros" value={totalRecords} path="/Records"/>
                </div>
            </div>
        </div>
    )
}