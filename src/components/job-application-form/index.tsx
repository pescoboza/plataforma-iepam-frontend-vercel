import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormPage_SubmitFormDataMutation } from "@/codegen/client";
import JobApplicationSuccess from "./components/JobApplicationSuccess";

interface JobApplicationFormData {
    primerNombre: string;
    otrosNombres: string;
    apellidoMaterno: string;
    apellidoPaterno: string;
    ciudad: string;
    sexo: string;
    direccion: string;
    codigoPostal: string;
    colonia: string;
    correo?: string;
    telefono: string;
    fechaNacimiento: string;
}

const REQUIRED_ERROR_MSG = "Debe llenar este campo.";
const EMAIL_ERROR_MSG = "Introducir un correo válido.";

const schema: yup.SchemaOf<JobApplicationFormData> = yup.object().shape({
    primerNombre: yup.string().required(REQUIRED_ERROR_MSG),
    otrosNombres: yup.string().required(REQUIRED_ERROR_MSG),
    apellidoMaterno: yup.string().required(REQUIRED_ERROR_MSG),
    apellidoPaterno: yup.string().required(REQUIRED_ERROR_MSG),
    ciudad: yup.string().required(REQUIRED_ERROR_MSG),
    sexo: yup.string().required(REQUIRED_ERROR_MSG),
    direccion: yup.string().required(REQUIRED_ERROR_MSG),
    codigoPostal: yup.string().required(REQUIRED_ERROR_MSG),
    colonia: yup.string().required(REQUIRED_ERROR_MSG),
    correo: yup.string().email(EMAIL_ERROR_MSG),
    telefono: yup.string().required(REQUIRED_ERROR_MSG),
    fechaNacimiento: yup.string().required(REQUIRED_ERROR_MSG),
});

// type Profile = {
//     firstname: string;
//     othername: string;
//     lastname: string;
//     secondlastname: string;
//     birthdate: Date;
//     gender: string;
//     email: string;
//     phonenumber: number;
//     address: string;
//     secondaddress: string;
//     city: string;
//     cp: number;
// };

// const schema = yup
//     .object({
//         firstname: yup.string().required().min(4),
//         othername: yup.string(),
//         lastname: yup.string().required().min(4),
//         secondlastname: yup.string().required().min(4),
//         birthdate: yup.date().required(),
//         gender: yup.string().required(),
//         email: yup.string().required().email(),
//         phonenumber: yup.string().required(),
//         address: yup.string().required(),
//         secondaddress: yup.string().required(),
//         city: yup.string().required(),
//         cp: yup.number().required(),
//     })
//     .required();

const JobApplicationForm: FC<{ puestoId: string }> = ({ puestoId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<JobApplicationFormData>({
        resolver: yupResolver(schema),
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [submitData] = useFormPage_SubmitFormDataMutation();
    const [submitted, setSubmitted] = useState(false);

    if (submitted) return <JobApplicationSuccess name={getValues("primerNombre")} />;

    const onSubmit = handleSubmit((data) => {
        setLoading(true);
        setError(null);

        submitData({ variables: { ...data, puestoId } })
            .then((res) => {
                setLoading(false);
                setError(null);
                const aplicacionId = res.data?.aplicacion?.id;
                if (typeof aplicacionId !== "string" || aplicacionId.length === 0 || isNaN(Number(aplicacionId)))
                    throw new Error("Invalid aplicacionId");

                setSubmitted(true);
            })
            .catch((err) => {
                setLoading(false);
                setError("Ocurrió un error inesperado, inténtelo más tarde.");
                console.error(err);
            });
    });

    return (
        <div>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center ">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-center">
                        <img className="mx-auto" src="../images/iepamLogo.png" alt="iepamlogo" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Formulario</div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="primerNombre" className="text-sm font-bold text-gray-600 block">
                                Nombre
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("primerNombre")}
                                id="primerNombre"
                                name="primerNombre"
                                type="text"
                            />
                            {errors.primerNombre && <div className="red">{errors.primerNombre.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="otrosNombres" className="text-sm font-bold text-gray-600 block">
                                Segundo nombre
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("otrosNombres")}
                                id="otrosNombres"
                                name="otrosNombres"
                                type="text"
                            />
                            {errors.otrosNombres && <div className="red">{errors.otrosNombres.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="apellidoPaterno" className="text-sm font-bold text-gray-600 block">
                                Apellido paterno
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("apellidoPaterno")}
                                id="apellidoPaterno"
                                name="apellidoPaterno"
                                type="text"
                            />
                            {errors.apellidoPaterno && <div className="red">{errors.apellidoPaterno.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="apellidoMaterno" className="text-sm font-bold text-gray-600 block">
                                Apellido materno
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("apellidoMaterno")}
                                id="apellidoMaterno"
                                name="apellidoMaterno"
                                type="text"
                            />
                            {errors.apellidoMaterno && <div className="red">{errors.apellidoMaterno.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="fechaNacimiento" className="text-sm font-bold text-gray-600 block">
                                Fecha de nacimiento
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("fechaNacimiento")}
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                type="date"
                            />
                            {errors.fechaNacimiento && <div className="red">{errors.fechaNacimiento.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="sexo" className="text-sm font-bold text-gray-600 block">
                                Sexo
                            </label>
                            <select
                                id="sexo"
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("sexo")}
                            >
                                <option value="">Escoge una opción</option>
                                <option value="H">Masculino</option>
                                <option value="M">Femenino</option>
                                <option value="O">Otro</option>
                            </select>
                            {errors.sexo && <div className="red">{errors.sexo.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="correo" className="text-sm font-bold text-gray-600 block">
                                Correo electrónico
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("correo")}
                                id="correo"
                                name="correo"
                                type="correo"
                            />
                            {errors.correo && <div className="red">{errors.correo.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="telefono" className="text-sm font-bold text-gray-600 block">
                                Número de teléfono
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("telefono")}
                                id="telefono"
                                name="telefono"
                                type="number"
                            />
                            {errors.telefono && <div className="red">{errors.telefono.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="direccion" className="text-sm font-bold text-gray-600 block">
                                Dirección
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("direccion")}
                                id="direccion"
                                name="direccion"
                                type="text"
                            />
                            {errors.direccion && <div className="red">{errors.direccion.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="colonia" className="text-sm font-bold text-gray-600 block">
                                Colonia
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("colonia")}
                                id="colonia"
                                name="colonia"
                                type="text"
                            />
                            {errors.colonia && <div className="red">{errors.colonia.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="ciudad" className="text-sm font-bold text-gray-600 block">
                                Ciudad
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("ciudad")}
                                id="ciudad"
                                name="ciudad"
                                type="text"
                            />
                            {errors.ciudad && <div className="red">{errors.ciudad.message}</div>}
                        </div>
                        <div>
                            <label htmlFor="codigoPostal" className="text-sm font-bold text-gray-600 block">
                                Código postal
                            </label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded mt-1"
                                {...register("codigoPostal")}
                                id="codigoPostal"
                                name="codigoPostal"
                                type="text"
                            />
                            {errors.codigoPostal && <div className="red">{errors.codigoPostal.message}</div>}
                        </div>
                        {error && (
                            <div>
                                <span>{error}</span>
                            </div>
                        )}

                        <div>
                            <button
                                className="w-full py-2 px-4 bg-[#6F206A] hover:bg-blue-700 rounded-md text-white text-sm"
                                type="submit"
                            >
                                {loading ? "Cargando..." : "Enviar"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApplicationForm;
