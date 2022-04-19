import type { FC } from "react";
import { useRouter } from "next/router";

const SignOut: FC = () => {
    const router = useRouter();
    if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        router.push("/autenticacion/iniciar-sesion");
    }
    return <div></div>;
};

export default SignOut;
