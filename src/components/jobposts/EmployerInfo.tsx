import { IconBuilding } from "../icons";

const icons = {
    building: IconBuilding,
};

const EmployerInfo = () => {
    return (
        <div className="rounded-md bg-white">
            <div className="flex items-center border-b px-3 py-2">
                <icons.building className="mr-2 h-5 w-5 text-green-600" />
                <p className="text-sm font-medium text-black">Oficina</p>
            </div>
            <ul className="divide-y divide-gray-200">
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Calle</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Av. Paseo de la Reforma</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Nº</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">500</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Colónia</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Lomas de Santa Fe</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Ciudad</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Monterrey</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Provincia</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Nuevo León</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Código Postal</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">01219</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default EmployerInfo;
