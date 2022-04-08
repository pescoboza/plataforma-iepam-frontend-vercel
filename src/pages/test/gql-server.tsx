import type { FC } from "react";
import type { GetServerSideProps } from "next";
import { sdk } from "@/codegen/server";

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await sdk.Empresas();

    return { props: res };
};

const Page: FC = (props) => {
    return (
        <div>
            <h1>Server Side Props</h1>
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    );
};

export default Page;
