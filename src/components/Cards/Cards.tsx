import { CardType } from "../../types/Card";

export function Card({ title, value, path }: CardType) {
    return (
        <div className="max-w-sm p-6 bg-white  border rounded-lg shadow my-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">{value}</p>
            <a href={path} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none">
                Ver más
            </a>
        </div>
    )
}