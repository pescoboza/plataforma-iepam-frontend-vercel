import type { FC } from "react";
import type { NextPage } from 'next';
import Link from 'next/link';

const JobApplicationSuccess: FC<{ name: string }> = ({ name }) => {
    return (
        <>
        <div className="bg-green-100 rounded-lg py-14 px-6 mb-4 mt-40 mx-64 text-green-700" role="alert">
        <div className='flex flex-row justify-center'>
          <svg
            className="stroke-2 stroke-current text-green-600 h-14 w-14 mr-2 mt-2 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <h4 className="text-5xl font-bold leading-tight mb-2">Excelente Trabajo {name}!</h4>
        </div>
        <div className='flex flex-col'>
          <h5 className="mb-4 text-2xl font-semibold text-center">
            Su aplicación a sido enviada exitosamente
          </h5>
          <hr className="border-green-600 opacity-30" />
          <h5 className="mt-4 mb-0 text-xl text-center font-medium">
            Siguientes Pasos:
          </h5>
          <ul className="text-lg text-center">1. Estar al pendiente de ofertas nuevas</ul>
          <ul className="text-lg text-center">2. Actualizar información si lo es necesario</ul>
          <ul className="text-lg text-center">3. Haga click <><Link href="/"><a className="bg-green-200 rounded-md font-extrabold">aquí</a></Link></> para ver las ofertas laborales</ul>
        </div>
      </div>
      </>
    );
};

export default JobApplicationSuccess;
