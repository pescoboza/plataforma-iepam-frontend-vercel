import { iconDollar } from "../icons";

const icons = {
    dollar: iconDollar,
};

const JobInfo = () => {
    return (
        <div className="bg-white sm:rounded-md">
            <div className="flex items-center border-b px-3 py-2">
                <icons.dollar className="mr-2 h-5 w-5 text-green-600" />
                <p className="text-sm font-medium text-black">Vacante</p>
            </div>
            <ul className="divide-y divide-gray-200">
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600">Tipo de Jornada</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Parcial (4 hs)</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600">Remuneración</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">$ 10,000.00</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600">Función</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Contable</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600">Capacitación</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">10 días hábiles</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default JobInfo;
