import "../styles/globals.css";
import "../styles/form.css"
// import Script from 'next/script'
// import Head from 'next/head'

import type { FC } from "react";
import type { AppProps } from "next/app";
import { ApolloPersistentProvider } from "@/lib/apollo";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        
        <ApolloPersistentProvider>
            <Component {...pageProps} />

        </ApolloPersistentProvider>
        

    );
};

export default MyApp;
