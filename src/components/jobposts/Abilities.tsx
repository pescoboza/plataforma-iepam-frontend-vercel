import { iconCircledCheck, iconPlus } from "@/components/icons";

const icons = {
    circledCheck: iconCircledCheck,
    plus: iconPlus,
};

const Abilities = () => {
    return (
        <div className="bg-white sm:rounded-md">
            <div className="flex items-center border-b px-3 py-2">
                <icons.circledCheck className="mr-2 h-5 w-5 text-green-600" />
                <p className="text-sm font-medium text-black">Habilidades Requeridas</p>
            </div>
            <ul className="divide-y divide-gray-200">
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Conocimientos Técnicos</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Manejo Equipo Cómputo</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Programación u MS Office</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Análisis Lógico</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3 ">
                        <p className="text-sm text-gray-600 sm:col-span-3">Análisis Numérico</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Abilities;
