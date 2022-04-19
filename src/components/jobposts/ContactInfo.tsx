import { IconUser } from "../icons";

const icons = {
    user: IconUser,
};

const ContactInfo = () => {
    return (
        <div className="bg-white sm:rounded-md">
            <div className="flex items-center border-b px-3 py-2">
                <icons.user className="mr-2 h-5 w-5 text-green-600" />
                <p className="text-sm font-medium text-black">Persona de Contacto</p>
            </div>
            <ul className="divide-y divide-gray-200">
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Nombre</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Juan</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Apellido</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">Pérez</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">juan.perez@santander.com.mx</p>
                    </div>
                </li>
                <li className="py-2 px-3">
                    <div className="grid grid-cols-2 sm:grid-cols-3">
                        <p className="text-sm text-gray-600">Teléfono</p>
                        <p className="text-sm text-gray-900 sm:col-span-2">+52 449 123 4567</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;
