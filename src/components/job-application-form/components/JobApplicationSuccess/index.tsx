import type { FC } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import NavbarSignedOut from 'components/general/NavbarSignedOut';
import Footer from 'components/general/Footer';

const JobApplicationSuccess: FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <Head>
                <title>IEPAM | Gobierno Nuevo León</title>
                <meta name="author" content="Loesen SA" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header>
                <NavbarSignedOut />
            </header>
            <main className="overflow-hidden bg-white">
            <div className="m-10 p-5 pt-12 mt-12">
                <div className="bg-green-100 rounded-lg mx-auto max-w-7xl px-4 sm:px-6 py-5 pt5 text-green-700" role="alert">
                    <div className="flex flex-row px justify-center">
                        <svg
                            className="stroke-2 stroke-current text-green-600 h-14 w-14 mr-2 mt-2 flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M0 0h24v24H0z" stroke="none" />
                            <circle cx="12" cy="12" r="9" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                        <h4 className="text-2xl font-bold leading-tight mb-2">¡Excelente trabajo, {name}!</h4>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="mb-4 text-1xl font-semibold text-center">
                            Su aplicación a sido enviada exitosamente
                        </h5>
                        <hr className="border-green-600 opacity-30" />
                        <h5 className="mt-4 mb-0 text-xl text-center font-medium">Siguientes Pasos:</h5>
                        <ul className="text-lg text-center">1. Estar al pendiente de ofertas nuevas</ul>
                        <ul className="text-lg text-center">2. Actualizar información si es necesario</ul>
                        <ul className="text-lg text-center">
                            3. Haga click{' '}
                            <>
                                <Link href="/empleos">
                                    <a className="bg-green-200 rounded-md font-extrabold">aquí</a>
                                </Link>
                            </>{' '}
                            para ver las ofertas laborales
                        </ul>
                    </div>
                </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default JobApplicationSuccess;
