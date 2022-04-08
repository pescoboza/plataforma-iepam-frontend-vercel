import type { FC } from "react";
import { useEmpresasQuery } from "@/codegen/client";

const Page: FC = () => {
    const { data, error, loading } = useEmpresasQuery();
    if (error) console.error(error);
    
    return <div>
        <h1>Query Hook</h1>
        {loading && <span>Cargando...</span>}
        {error && <p>{error.message}</p>}
        <pre>{JSON.stringify(data, null,4)}</pre>
    </div>
};

export default Page;
