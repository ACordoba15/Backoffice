import { CardType } from "../../types/Card";

export function Card({ title, value, path }: CardType) {
    return (
        <div className="max-w-sm p-6 bg-white  border border-orange-200 rounded-lg shadow my-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-600">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-green-600">{value}</p>
            <a href={path} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 ">
                Ver más
            </a>
        </div>
    )
}