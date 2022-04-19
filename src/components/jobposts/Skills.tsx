import { IconStack } from "../icons";

const icons = {
    stack: IconStack,
};

const Skills = () => {
    return (
        <div className="bg-white sm:rounded-md">
            <div className="flex items-center border-b px-3 py-2">
                <icons.stack className="mr-2 h-5 w-5 text-green-600" />
                <p className="text-sm font-medium text-black">Competencias Requeridas</p>
            </div>
            <ul className="divide-y divide-gray-200">
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Liderazgo</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Cinciliador</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Negociador</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Trabajo en Equipo</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Certificación en Capacitación</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Certificación como Consejero</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Título Profesional</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Capacidad Gerencial</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Capacidad Directiva</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Skills;
