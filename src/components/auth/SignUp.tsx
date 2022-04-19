// Package Imports
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

// Component
export default function SignUp() {
  const [number, setNumber] = useState('');
  const [province, setprovince] = useState('');
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();
    //Function to handle SignUp
    router.push('/buscar');
  };

  const validateNumber = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value !== '' || re.test(e.target.value)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }
    setNumber(e.target.value);
  };

  const validateProvince = (e) => {
    setprovince(e.target.value);
  };

  return (
    <>
      <div className='flex flex-col justify-center py-20 sm:px-4'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <a href='/' className='flex items-center  justify-center'>
            <img
              className='h-16 w-auto cursor-pointer'
              src='/images/iepam-logo.svg'
              alt='Gobierno Nuevo León'
            />
            <span className='mx-5 hidden rounded-md border border-gray-500 bg-gray-50 py-1 px-3 text-sm text-gray-600 md:block'>
              Candidatos
            </span>
          </a>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-lg'>
          <div className='border bg-white p-3 sm:rounded-lg'>
            <form onSubmit={handleSignUp}>
              <p className='text-lg font-medium leading-none'>
                Datos Personales
              </p>
              <div className='grid grid-cols-2 space-y-1'>
                <div className='mt-1 pr-3'>
                  <div className='mt-1'>
                    <input
                      id='firstName'
                      name='firstName'
                      type='text'
                      placeholder='Nombre'
                      autoComplete='given-name'
                      required
                      className='focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div className='mt-1'>
                  <div className='mt-1'>
                    <input
                      id='lastName'
                      name='lastName'
                      type='text'
                      placeholder='Apellido'
                      autoComplete='last-name'
                      required
                      className='focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div className='col-span-2'>
                  <div className='mt-1'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      placeholder='E-mail'
                      autoComplete='email'
                      required
                      className='focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div className='col-span-2 sm:col-span-1 sm:pr-3'>
                  <div className='mt-1'>
                    <input
                      id='password'
                      name='password'
                      type='password'
                      placeholder='Contraseña'
                      autoComplete='new-password'
                      required
                      className='focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm'
                    />
                  </div>
                </div>
                <div className='col-span-2 sm:col-span-1'>
                  <div className='mt-1'>
                    <input
                      id='confirmpassword'
                      name='confirmpassword'
                      type='password'
                      placeholder='Confirmar Contraseña'
                      autoComplete='new-password'
                      required
                      className='focus:outline-none block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-gray-500 focus:ring-gray-500 sm:text-sm'
                    />
                  </div>
                </div>
              </div>
              <div className=''>
                <div className='pt-6'>
                  <div className='mx-4 flex justify-center'>
                    <Link href='/' passHref>
                      <div className='focus:outline-none mr-4 w-full cursor-pointer rounded-md border border-gray-600 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-0'>
                        Volver al Inicio
                      </div>
                    </Link>
                    <button
                      type='submit'
                      className='focus:outline-none w-full rounded-md bg-gray-600 py-2 text-sm font-medium text-white hover:bg-gray-700'
                    >
                      Crear Cuenta
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='border bg-white p-3 sm:rounded-lg'>
              <div className='mx-4 flex justify-between'>
                <div className='mr-4 py-2 text-center text-sm font-medium text-gray-800 sm:text-base'>
                  <span>Ya tenes cuenta registrada? </span>
                </div>
                <Link href='/autenticacion/iniciar-sesion'>
                  <div className='focus:outline-none flex cursor-pointer items-center rounded-md bg-green-400 py-2 px-4 text-sm hover:bg-green-500'>
                    <span className='font-medium leading-none text-white'>
                      Iniciar Sesión
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
