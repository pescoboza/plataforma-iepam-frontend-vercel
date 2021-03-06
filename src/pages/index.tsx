import Head from "next/head";
import NavbarSignedOut from "../components/general/NavbarSignedOut";
import Footer from "../components/general/Footer";
import Welcome from "../components/landing/Welcome";
import LogoClouds from "../components/landing/LogoClouds";

const Page = () => {
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
                <div className="mt-4 pt-12">
                    <Welcome />
                    <LogoClouds />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Page;
