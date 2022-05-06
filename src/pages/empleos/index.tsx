import React, { FC, useCallback, useState, useRef, Fragment } from 'react';
import Head from 'next/head';
import NavbarSignedOut from 'components/general/NavbarSignedOut';
import Footer from 'components/general/Footer';
import { useSearchPage_PuestosQuery, Puesto_Filter } from '@/codegen/client';
import { CalendarIcon, LocationMarkerIcon, OfficeBuildingIcon, PaperClipIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import moment from 'moment';
import Link from 'next/link';
import startCase from 'lodash/startCase';
import capitalize from 'lodash/capitalize';
import { useForm } from 'react-hook-form';
import { GetStaticProps } from 'next';
import { sdk } from '@/lib/codegen/server';
import usePagination from '@/hooks/usePagination';

const NIVELES_ESTUDIO = {
    primaria: 1,
    secundaria: 2,
    preparatoria: 3,
    'carrera-trunca': 4,
    licenciatura: 5,
    posgrado: 6,
};

const NIVEL_ACTIVIDAD_FISICA = {
    baja: 1,
    media: 2,
    alta: 3,
};

interface SearchFormData {
    ciudad?: string;
    nivelEstudios?: string;
    search?: string;
}

const FILTER_FORM_ID = 'filter-form';

const Page: FC<Props> = ({ ciudades, nivelesEstudios }) => {
    const { register, handleSubmit, reset } = useForm<SearchFormData>();
    const { page, nextPage, prevPage } = usePagination(10);

    const [filter, setFilter] = useState<Puesto_Filter>({});
    const { data, error, loading } = useSearchPage_PuestosQuery({
        variables: {
            filter,
            page,
        },
        fetchPolicy: 'cache-and-network',
    });
    const puestos = (data?.puestos ?? []) as JobListItemProps[];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState<JobListItemProps | null>(null);
    if (error) console.error(error);

    console.log('[QUERY_DATA]', puestos);

    const onSubmit = handleSubmit((data) => {
        console.log('[FORM_FILTERS]', data);

        const filterArg: Puesto_Filter = { _and: [] };

        const search = data.search;
        if (search != null && search.length > 0)
            filterArg._and!.push({
                _or: [
                    { nombre: { _contains: search } },
                    {
                        descripcion: {
                            _contains: search,
                        },
                    },
                ],
            });

        const ciudad = data.ciudad;
        if (ciudad != null && ciudad.length > 0)
            filterArg._and!.push({
                ciudad: { _eq: ciudad },
            });

        const nivelEstudios = data.nivelEstudios;
        if (nivelEstudios != null && nivelEstudios.length > 0)
            filterArg._and!.push({
                nivelEstudios: { _eq: nivelEstudios },
            });
        setFilter(filterArg);
    });

    return (
        <div>
            <Head>
                <title>IEPAM | Gobierno Nuevo León</title>
                <meta name="author" content="Loesen SA" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <header>
                <NavbarSignedOut />
            </header>
            <main className="overflow-hidden bg-white">
                <div className="mt-4 pt-12">
                    <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:py-5 lg:px-8">
                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <form id={FILTER_FORM_ID} onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="search">Búsqueda</label>
                                    <input type="text" {...register('search')} />
                                </div>

                                <div>
                                    <label htmlFor="ciudad">Ciudad</label>
                                    <select {...register('ciudad')}>
                                        <option value=""></option>
                                        {ciudades.map(({ name, value }, i) => (
                                            <option key={i} value={value}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="nivelEstudios">Nivel de estudios</label>
                                    <select {...register('nivelEstudios')}>
                                        <option value=""></option>
                                        {nivelesEstudios.map(({ name, value }, i) => (
                                            <option key={i} value={value}>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* <div>
                            <label>Nivel de Estudios</label>
                            <input />
                        </div> */}
                            </form>
                            <button
                                form={FILTER_FORM_ID}
                                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                type="submit"
                            >
                                Filtrar
                            </button>
                            <button
                                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                onClick={() => {
                                    reset();
                                }}
                            >
                                Limpiar filtros
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl py-5 px-4 sm:px-6 lg:py-5 lg:px-8">
                        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h1>Trabajos Disponibles</h1>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:p-6">
                        <div>
                            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                                Búsqueda Rápida
                            </label>
                            <div className="mt-1 relative flex items-center">
                                <input
                                    type="text"
                                    onChange={(event) => setValue(event.target.value)}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                                />
                                <input type="button" value="Alert the text input" onClick={filg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

                        <div className="bg-white shadow overflow-hidden sm:rounded-md">
                            <JobList
                                puestos={puestos}
                                onJobPostClick={(puesto) => {
                                    setModalData(puesto);
                                    setIsModalOpen(true);
                                }}
                            />
                        </div>

                        {modalData && (
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <JobModal
                                    isOpen={isModalOpen}
                                    onRequestClose={() => setIsModalOpen(false)}
                                    puesto={modalData}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

interface JobListItemProps {
    id: string;
    nombre: string;
    descripcion: string;
    jornada: string;
    turno: string;
    fechaCreacion: string;
    ciudad: string;
    empresa: {
        nombreComercial: string;
        ciudad: string;
    };
}

const JobList: FC<{ puestos: JobListItemProps[]; onJobPostClick?: (puesto: JobListItemProps) => void }> = ({
    puestos,
    onJobPostClick,
}) => (
    <ul className="divide-y divide-gray-200">
        {puestos.map((puesto) => (
            <JobListItem puesto={puesto} key={puesto.id} onClick={onJobPostClick} />
        ))}
    </ul>
);

const JobListItem: FC<{ puesto: JobListItemProps; onClick?: (data: JobListItemProps) => void }> = ({
    onClick: handleClick,
    puesto,
}) => {
    return (
        <li onClick={handleClick ? () => handleClick(puesto) : undefined}>
            <a
                href=""
                className="block hover:bg-gray-50"
                onClick={(e) => {
                    e.preventDefault();
                    // modaF(position.id);
                }}
            >
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">{puesto.nombre}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {capitalize(puesto.jornada).replace(/-/g, ' ')}
                            </p>
                        </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                                <OfficeBuildingIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                {puesto.empresa.nombreComercial}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                <LocationMarkerIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                {puesto.ciudad}
                            </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <p>
                                {/* {position.status}{" "} */}
                                <time>{moment(puesto.fechaCreacion).format('YYYY-MM-DD HH:mm')}</time>
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    );
};

const JobModal: FC<{
    isOpen: boolean;
    onRequestClose: () => void;
    puesto: JobListItemProps;
}> = ({ puesto, isOpen, onRequestClose }) => {
    const cancelBtnRef = useRef<HTMLButtonElement>(null);

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                static
                className="fixed z-10 inset-0 overflow-y-auto"
                // initialFocus={cancelButtonRef}
                open={true}
                onClose={onRequestClose}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div>
                                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Descripción del Trabajo
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            Personal details and application.
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Empresa</dt>
                                                <dd className="mt-1 text-sm text-gray-900">
                                                    {puesto.empresa.nombreComercial}
                                                </dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Vacante</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{puesto.nombre}</dd>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <dt className="text-sm font-medium text-gray-500">Turno</dt>
                                                <div className="mt-1 text-sm text-gray-900">
                                                    {startCase(puesto.turno)}
                                                </div>
                                            </div>
                                            {/* <div className="sm:col-span-1">
                                            <dt className="text-sm font-medium text-gray-500">Salario</dt>
                                            <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                                        </div> */}
                                            <div className="sm:col-span-2">
                                                <dt className="text-sm font-medium text-gray-500">Acerca</dt>
                                                <dd className="mt-1 text-sm text-gray-900">{puesto.descripcion}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                                <Link href={`/empleos/${puesto.id}`}>
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                                    >
                                        Aplicar
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                                    onClick={onRequestClose}
                                    ref={cancelBtnRef}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

interface Props {
    ciudades: { name: string; value: string }[];
    nivelesEstudios: { name: string; value: string }[];
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
    const { puesto } = await sdk.SearchPage_FilterOptions();

    const citiesSet = new Set<string>();
    const nivelesEstudioSet = new Set<string>();
    puesto?.forEach((p) => {
        if (p == null) return;
        citiesSet.add(p.ciudad);
        nivelesEstudioSet.add(p.nivelEstudios);
    });

    const ciudades = Array.from(citiesSet)
        .sort((a, b) => a.localeCompare(b))
        .map((c) => ({ name: startCase(c), value: c }));

    const nivelesEstudios = Array.from(nivelesEstudioSet)
        .sort((a, b) => a.localeCompare(b))
        .map((ne) => ({ name: startCase(ne), value: ne }));

    const props = {
        ciudades,
        nivelesEstudios,
    };

    console.log('[PROPS]', props);
    return {
        props,
    };
};

export default Page;
