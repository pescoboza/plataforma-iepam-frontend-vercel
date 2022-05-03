import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router' 
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Head from "next/head";
import NavbarForm from "../components/general/NavbarForm";


type Profile = {
    firstname: string
    othername: string
    lastname: string
    secondlastname: string
    birthdate: Date
    gender: string
    email: string
    phonenumber: number
    address: string
    secondaddress: string
    city: string
    cp: number
    

}

const schema = yup.object().shape({
    firstname: yup.string().required().min(4),
    othername: yup.string(),
    lastname: yup.string().required().min(4),
    secondlastname: yup.string().required().min(4),
    birthdate: yup.date().required(),
    gender: yup.string().required(),
    email: yup.string().required().email(),
    phonenumber: yup.string().required(),
    address: yup.string().required(),
    secondaddress: yup.string().required(),
    city: yup.string().required(),
    cp: yup.number().required(),
  }).required();

function Form() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Profile>(
        {
            resolver: yupResolver<yup.AnyObjectSchema>(schema),
        }
    )

    const onSubmit = handleSubmit((data) => {
        fetch('/api/formdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(data);
        alert(`Es tu nombre: ${data.firstname}?`);
        router.push('/thankyou');
    })

    return (
        <>
        <div className='pb-20'>
            <Head>
                <title>IEPAM | Gobierno Nuevo León</title>
                <meta name="author" content="Loesen SA" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header>
                <NavbarForm />
            </header>
        </div>
        
        <main>
            <div className='min-h-screen bg-gray-50 flex flex-col justify-center '>
                <div className='max-w-md w-full mx-auto'>
                    <div className='text-center'>
                        <img className="mx-auto" src='../images/iepamLogo.png' alt='iepamlogo'/>
                    </div>
                    <div className='text-3xl font-bold text-gray-900 mt-2 text-center'>Formulario</div>
                </div>
                <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
                    <form onSubmit={onSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor="firstname" className='text-sm font-bold text-gray-600 block'>Nombre</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('firstname', { required: true, minLength: 4, maxLength: 20 })} id="firstname" name="firstname" type="text" />
                            {
                                errors.firstname && <div className="red">Ingresa tu nombre</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="othername" className='text-sm font-bold text-gray-600 block'>Segundo nombre</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('othername')} id="othername" name="othername" type="text" />
                            {
                                errors.othername && <div className="red">Ingresa tu segundo nombre</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="lastname" className='text-sm font-bold text-gray-600 block'>Apellido</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('lastname', { required: true, minLength: 4, maxLength: 20 })} id="lastname" name="lastname" type="text" />
                            {
                                errors.lastname && <div className="red">Ingresa tu apellido</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="secondlastname" className='text-sm font-bold text-gray-600 block'>Segundo apellido</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('secondlastname', { required: true, minLength: 4, maxLength: 20 })} id="secondlastname" name="secondlastname" type="text" />
                            {
                                errors.secondlastname && <div className="red">Ingresa tu segundo apellido</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="birthdate" className='text-sm font-bold text-gray-600 block'>Año de nacimiento</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('birthdate', { required: true })} id="birthdate" name="birthdate" type="date" />
                            {
                                errors.birthdate && <div className="red">Ingresa tu año de nacimiento</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="gender" className='text-sm font-bold text-gray-600 block'>Género</label>
                            <select id="gender" className='w-full p-2 border border-gray-300 rounded mt-1' {...register('gender', { required: true })}>
                                <option value="">Escoge una opción</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>

                            
                            
                            {
                                errors.gender && <div className="red">Ingresa tu género</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="email" className='text-sm font-bold text-gray-600 block'>Correo electrónico</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('email', { required: true, minLength: 4, maxLength: 20, })} id="email" name="email" type="email" />
                            {
                                errors.email && <div className="red">Ingresa tu correo</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="phonenumber" className='text-sm font-bold text-gray-600 block'>Número de teléfono</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('phonenumber', { required: true })} id="phonenumber" name="phonenumber" type="number" />
                            {
                                errors.phonenumber && <div className="red">Ingresa tu apellido</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="address" className='text-sm font-bold text-gray-600 block'>Dirección</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('address', { required: true })} id="address" name="address" type="text" />
                            {
                                errors.address && <div className="red">Ingresa tu dirección</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="secondaddress" className='text-sm font-bold text-gray-600 block'>Colonia</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('secondaddress', { required: true })} id="secondaddress" name="secondaddress" type="text" />
                            {
                                errors.secondaddress && <div className="red">Ingresa tu colonia</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="city" className='text-sm font-bold text-gray-600 block'>Ciudad</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('city', { required: true })} id="city" name="city" type="text" />
                            {
                                errors.city && <div className="red">Ingresa tu ciudad</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="cp" className='text-sm font-bold text-gray-600 block'>Código postal</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('cp', { required: true })} id="cp" name="cp" type="text" />
                            {
                                errors.cp && <div className="red">Ingresa tu código postal</div>
                            }
                        </div>
                        <div>
                            <button className='w-full py-2 px-4 bg-[#6F206A] hover:bg-blue-700 rounded-md text-white text-sm' type="submit">Enviar</button>
                        </div>

                    </form>
                </div>

            </div>

        </main>
        </>
    );
}

export default Form;