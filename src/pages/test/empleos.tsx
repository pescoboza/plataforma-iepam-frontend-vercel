import type { FC } from "react";
import { usePuestosQuery } from "@/codegen/client";
import { useSubmitFormAplicacionMutation } from "@/codegen/client";

const Page: FC = () => {
    const [submit] = useSubmitFormAplicacionMutation();

    const { data, loading, error } = usePuestosQuery();
    if (error) console.error(error);
    return (
        <div>
            <button
                onClick={() => {
                    submit({
                        variables: {
                            data: {
                                status: "published",
                                primerNombre: "Pedro",
                                apellidoPaterno: "Escoboza",
                                apellidoMaterno: "Kick",
                                fechaNacimiento: "2022-04-29T02:21:58.007Z",
                                correo: "psescoboza@gmail.com",
                                telefono: "6623482032",
                                sexo: "H",
                                direccion: "San Felipe 156, San Ángel, Hermosillo, Sonora",
                            },
                        },
                    })
                        .then((res) => {
                            alert(res);
                        })
                        .catch((err) => {
                            console.log(err);
                            alert("ERROR");
                        });
                }}
            >
                Submit
            </button>
            <h1>Empleos</h1>
            {loading && <span>Cargando...</span>}
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
};

export default Page;
