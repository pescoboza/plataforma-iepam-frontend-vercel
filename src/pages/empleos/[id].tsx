import type { FC } from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import { sdk } from "@/codegen/server";

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await sdk.FormPage_PuestosStaticPaths();

    const paths: string[] = [];
    res.puestos?.forEach((j) => {
        const id = j?.id;
        if (id == null) return;
        paths.push(`/empleos/${id}`);
    });

    return { paths, fallback: true };
};

type Props = NonNullable<Awaited<ReturnType<typeof sdk["FormPage_PuestoById"]>>["puesto"]> & {
    id: string;
    fechaCreacion: string;
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const id = ctx.params?.id;
    if (typeof id !== "string" || id.length === 0 || isNaN(Number(id))) return { notFound: true };

    const { puesto } = await sdk.FormPage_PuestoById({ id });

    if (puesto?.id == null) return { notFound: true };

    return {
        props: {
            ...puesto,
            id: puesto.id!,
            fechaCreacion: new Date(puesto.fechaCreacion).toISOString(),
        },
    };
};

const Page: FC<Props> = (props) => {
    return (
        <div>
            <h1>Aplicar a empleo</h1>
            <pre>{JSON.stringify(props, null, 4)}</pre>
            {/* Incluir form con id del puesto para aplicar */}
        </div>
    );
};

export default Page;