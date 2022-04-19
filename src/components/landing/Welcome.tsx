// Component
export default function Welcome() {
    return (
        <div className="relative">
            <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-32 lg:text-left">
                <div className="px-4 lg:w-1/2 xl:pr-16">
                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
                        <span className="block xl:inline">Encuentra el empleo</span>{" "}
                        <span className="block text-gray-600 xl:inline">adecuado para ti.</span>
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-lg leading-none text-gray-500 md:mt-5 md:max-w-3xl">
                        Descubre perfiles que empresas están buscando en Nuevo León. Nuestro objetivo es brindarle una
                        experiencia de búsqueda de empleo de primer nivel de principio a fin... ¡e incluso más allá!
                    </p>
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md">
                            <a
                                href="/autenticacion/crear-cuenta"
                                className="flex w-full items-center justify-center rounded-md bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:py-4 md:px-10 md:text-lg"
                            >
                                Crear Cuenta
                            </a>
                        </div>
                        <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md bg-gray-100 px-8 py-3 text-base font-medium text-gray-600 hover:bg-gray-200 md:py-4 md:px-10 md:text-lg"
                            >
                                Navegar Puestos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <img className="absolute inset-0 h-full w-full object-cover" src="/images/hero.jpg" alt="" />
            </div>
        </div>
    );
}
