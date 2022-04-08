export const NEXT_PUBLIC_GQL_ENDPOINT = process.env.NEXT_PUBLIC_GQL_ENDPOINT ?? (() => { throw new Error("Missing env var NEXT_PUBLIC_GQL_ENDPOINT"); })();
