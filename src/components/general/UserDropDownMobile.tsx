// Icon Imports
import { iconGear, iconLayout, iconUser, iconStar } from "../icons";

// Component
export default function UserDropDownMobile() {
    const user = {
        firstName: "Carlos",
        lastName: "Alvarez",
        email: "carlos.alvarez@autorep22.com",
    };

    const menuItems = [
        { name: "Tablero", href: "/buscar", icon: iconLayout },
        { name: "Favoritos", href: "/favoritos", icon: iconStar },
        { name: "Perfil", href: "/cuenta/perfil", icon: iconUser },
        {
            name: "Configuración",
            href: "/configuracion",
            icon: iconGear,
        },
    ];

    return (
        <div className="pt-4">
            <div className="flex items-center px-3">
                <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-500"></div>
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium leading-none text-gray-800">{user.firstName}</div>
                    <div className="text-sm font-medium leading-none text-gray-500">{user.email}</div>
                </div>
            </div>
            <div className="mt-3 px-2">
                {menuItems.map((item) => (
                    <a key={item.name} href={item.href}>
                        <div className="block cursor-pointer rounded-md px-2 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">
                            {item.name}
                        </div>
                    </a>
                ))}
                <a href="/autenticacion/cerrar-sesion">
                    <div className="block cursor-pointer rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700">
                        Cerrar Sesión
                    </div>
                </a>
            </div>
        </div>
    );
}
