import type { FC } from "react";
import type { GetServerSideProps } from "next";
import { sdk } from "@/codegen/server";

type Props = NonNullable<Awaited<ReturnType<typeof sdk.SuccessPage_ApplicationSummary>>["application"]>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const applicationId = ctx.params?.applicationId;
    if (typeof applicationId !== "string" || isNaN(Number(applicationId))) return { notFound: true };

    const res = await sdk.SuccessPage_ApplicationSummary({ applicationId });

    return { props: res.application! };
};

const Page: FC<Props> = (props) => {
    return <pre>{JSON.stringify(props, null, 4)}</pre>;
};

export default Page;
