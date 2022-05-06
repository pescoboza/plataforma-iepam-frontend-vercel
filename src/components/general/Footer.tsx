// Icon Imports
import { iconFacebook, iconInstagram, iconTwitter } from "../icons";

const thisYear = new Date().getFullYear();

const navigation = {
    support: [
        { name: "Ayuda", href: "#" },
        { name: "Contacto", href: "/contacto" },
    ],
    company: [],
    legal: [
        { name: "Terminos y Condiciones", href: "#" },
        { name: "Privacidad", href: "#" },
    ],
    social: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/IEPAM",
            icon: iconFacebook,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/iepam.nl/",
            icon: iconInstagram,
        },
        {
            name: "Twitter",
            href: "https://www.twitter.com/IEPAM1",
            icon: iconTwitter,
        },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl py-12 px-4 lg:py-16">
                <div className="xl:grid xl:grid-cols-3 xl:gap-4">
                    <div className="space-y-8 xl:col-span-1">
                        <img className="h-10" src="/images/iepam-logo.svg" alt="Loesen SA" />
                        <p className="text-base text-gray-500">Encuentra el empleo adecuado para ti.</p>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    className="text-gray-400 hover:text-gray-500"
                                    referrerPolicy="no-referrer"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12 flex grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-1 md:gap-4">
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                                    Soporte
                                </h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-4">
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Legal</h3>
                                <ul className="mt-4 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.name}>
                                            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {thisYear} Gobierno Nuevo León.</p>
                </div>
            </div>
        </footer>
    );
}
