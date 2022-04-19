import Head from "next/head";

import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";

const Page = () => {
    return (
        <>
            <Head>
                <title>404 | IEPAM | Gobierno Nuevo León</title>
                <meta
                    name="description"
                    content="" //Fill with page description
                />
                <meta
                    name="keywords"
                    content="" //Fill with keywords
                />
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="overflow-hidden bg-white">
                <div className="min-h-screen bg-gray-100 pt-20 sm:pb-16">
                    <div className="mx-auto max-w-7xl py-16 px-4  lg:py-60">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Error 404</span>
                            <span className="block text-gray-600">Esta página no existe.</span>
                        </h2>
                        <div className="mt-8 flex">
                            <div className="inline-flex">
                                <a
                                    href="/"
                                    className="flex w-full items-center justify-center rounded-md bg-gray-600 px-5 py-3 text-base font-medium text-white hover:bg-gray-700"
                                >
                                    Volver al Inicio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Page;
