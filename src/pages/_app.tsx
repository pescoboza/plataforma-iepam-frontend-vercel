import "../styles/globals.css";

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
