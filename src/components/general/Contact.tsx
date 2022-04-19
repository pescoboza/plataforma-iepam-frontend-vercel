// Icon Imports
import { iconPhone, iconEmail } from "../icons";

const icons = {
    phone: iconPhone,
    email: iconEmail,
};

// Component
export default function Example() {
    return (
        <div className="mx-auto grid max-w-7xl py-4 sm:px-6 md:px-4 lg:grid-cols-3 lg:px-8">
            <div className="col-span-1 border bg-white p-4 sm:rounded-lg">
                <div className="mx-auto">
                    <div>
                        <h2 className="text-xl font-medium text-gray-900">Contacto</h2>
                        <div className="mt-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <icons.phone className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-sm text-gray-500">
                                    <p>+1 (555) 123 4567</p>
                                    <p className="mt-1">Lunes-Viernes 8:00-16:00 hs</p>
                                </div>
                            </div>
                            <div className="mt-3 flex">
                                <div className="flex-shrink-0">
                                    <icons.email className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                </div>
                                <div className="ml-3 text-sm text-gray-500">
                                    <p>soporte@Gobierno Nuevo León.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
