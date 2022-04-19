import Head from "next/head";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import Dashboard from "@/components/dashboard/Dashboard";

const Page = () => {
    return (
        <div>
            <Head>
                <title>IEPAM | Gobierno Nuevo León</title>
                <meta name="author" content="Loesen SA" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header>
                <Navbar />
            </header>
            <main className="overflow-hidden bg-white">
                <div className="mt-4 pt-12">
                    <Dashboard />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
