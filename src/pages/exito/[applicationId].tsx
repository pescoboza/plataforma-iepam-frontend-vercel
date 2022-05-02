import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const applicationId = ctx.params?.applicationId;
    if (typeof applicationId !== "string" || isNaN(Number(applicationId))) return { notFound: true };

    return {};
};
