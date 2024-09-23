export const Footer = () => {
    return (
        <footer className="shadow bg-color-td sticky bottom-0">
            <div className="w-full max-w-screen-xl mx-auto p-4">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img
                            src="/src/assets/logo.svg"
                            className="h-8"
                            alt="Teledolar Logo"
                        />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6 hover:text-orange-400"
                            >
                                Bitacora
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6 hover:text-orange-400"
                            >
                                Usuarios
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-whit sm:mx-auto lg:my-8" />
                <span className="block text-sm sm:text-center text-white">
                    © 2024. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};
