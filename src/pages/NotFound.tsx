export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-6xl font-bold text-orange-500">
                        404
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Oops! La página que estás buscando no se pudo encontrar.
                    </p>
                    <a
                        href="/"
                        className="mt-6 inline-block bg-orange-500 text-white py-2 px-4 rounded text-center hover:bg-orange-600"
                    >
                        Volver al inicio
                    </a>
                </div>
                <div className="flex justify-center">
                    <img
                        className="max-w-full h-auto"
                        src={"/src/assets/img_error.svg"}
                        alt="Not Found"
                    />
                </div>
            </div>
        </div>
    );
};
