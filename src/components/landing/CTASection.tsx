// Component
export default function CTASection() {
    return (
        <div className="bg-gray-50 py-8">
            <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
                <div className="px-4 md:pr-48">
                    <p className="text-3xl font-semibold text-gray-900 md:text-4xl">
                        Para casas de repuestos de todos tamaños.
                    </p>
                </div>
                <div className="grid items-center gap-4 py-8 px-4">
                    <p className="text-lg leading-tight text-gray-700">
                        Casas chicas, pymes y grandes negocios. En Gobierno Nuevo León tenemos funcionalidades y
                        asesoría específica para cada uno de ellos. ¡Hablemos sobre el futuro de tu tienda!
                    </p>
                    <div>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-5 py-3 hover:bg-gray-700"
                        >
                            <span className="font-medium text-white ">Prueba Gratuita de 30 Días</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
