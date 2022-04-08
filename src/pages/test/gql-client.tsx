import type { FC } from "react";
import { useEmpresasQuery } from "@/codegen/client";

const Page: FC = () => {
    const { data, error, loading } = useEmpresasQuery();

    return <div>
        <h1>Hello</h1>
        {loading && <span>Cargando...</span>}
        <pre>{JSON.stringify(data)}</pre>
    </div>
};

export default Page;
