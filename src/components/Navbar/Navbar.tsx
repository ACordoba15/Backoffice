import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export function Navbar () {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Mi Aplicación
        </div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">Inicio</a>
          <a href="/users" className="text-gray-300 hover:text-white">Usuarios</a>
          <a href="/login" className="text-gray-300 hover:text-white">Iniciar Sesión</a>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700">
                Más Opciones
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </MenuButton>
            </div>
            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="/about"
                    className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
                  >
                    Acerca de
                  </a>
                )}
              </MenuItem>
              <MenuItem>
                {({ focus }) => (
                  <a
                    href="/contact"
                    className={`block px-4 py-2 text-sm ${focus ? 'bg-gray-100' : 'text-gray-700'}`}
                  >
                    Contacto
                  </a>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  )
}