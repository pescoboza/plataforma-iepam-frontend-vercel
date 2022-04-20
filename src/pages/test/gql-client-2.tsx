import { FC, useState } from "react";
import { useEmpresasTest2Query } from "@/codegen/client";

const Page: FC = () => {
    const [startsWith, setStartsWith] = useState<string | null>(null);

    const { data, error, loading } = useEmpresasTest2Query({
        variables: {
            startsWith: startsWith || "Tec",
        },
        fetchPolicy: "cache-and-network",
    });
    if (error) console.error(error);

    return (
        <div>
            <h1>Query Hook</h1>
            {loading && <span>Cargando...</span>}
            {error && <p>{error.message}</p>}
            <input
                type="text"
                onChange={(e) => {
                    setStartsWith(e.target.value);
                }}
            />
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};

export default Page;
