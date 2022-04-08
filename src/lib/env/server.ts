export const GQL_AUTH_TOKEN = process.env.GQL_AUTH_TOKEN ?? throwOnMissingEnv("GQL_AUTH_TOKEN");
export const GQL_ENDPOINT = process.env.GQL_ENDPOINT ?? throwOnMissingEnv("GQL_ENDPOINT");

function throwOnMissingEnv(varName: string) {
    throw new Error(`Missing env var ${varName}`);
    return "";
}
