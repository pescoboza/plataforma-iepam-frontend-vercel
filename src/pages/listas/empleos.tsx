import type { FC } from "react";
import React, { useState, useRef, useEffect , Fragment }  from "react";
import { useListasQuery, useDescripcionLazyQuery, useFilterListLazyQuery } from "@/codegen/client";
import { CalendarIcon, LocationMarkerIcon, OfficeBuildingIcon, PaperClipIcon } from '@heroicons/react/solid'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import moment from 'moment';

const Page: FC = () => {
    const { data, loading, error } = useListasQuery();
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null);

    const [value, setValue] = useState("2")

    const [filterData, setfilterData] = useState(data)

    const [getDesc, { dat, load, err }] = useDescripcionLazyQuery();
    const [getFilt, { datF, loadF, errF }] = useFilterListLazyQuery();

    function filg(){
        getFilt({value});
        setfilterData(datF);
      }

      function modaF(ida){
        setOpen(true);
        ida = ida.toString();
        getDesc({ida});
        if (load) return 'Loading...';
        if (err) return `Error! ${err.message}`;
    }; 

    return (
    <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    
            <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h1>Trabajos Disponibles</h1>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:p-6">
                    <div>
                        <label
                        htmlFor="search"
                        className="block text-sm font-medium text-gray-700"
                        >
                        Búsqueda Rápida
                        </label>
                        <div className="mt-1 relative flex items-center">
                        <input
                            type="text"
                            onChange={event => setValue(event.target.value)}
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
                        />
                                <input
          type="button"
          value="Alert the text input"
          onClick={filg}
        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Transition.Root show={open} as={Fragment}>
        <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            open={open}
            onClose={setOpen}
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
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Descripción del Trabajo</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Empresa</dt>
                                <dd className="mt-1 text-sm text-gray-900">{data.puesto[0].empresa.nombreComercial}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Vacante</dt>
                                <dd className="mt-1 text-sm text-gray-900">{data.puesto[0].nombre}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Turno</dt>
                                <dd className="mt-1 text-sm text-gray-900">{data.puesto[0].turno}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Salario</dt>
                                <dd className="mt-1 text-sm text-gray-900">$120,000</dd>
                            </div>
                            <div className="sm:col-span-2">
                                <dt className="text-sm font-medium text-gray-500">Acerca</dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>                            
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"

                    onClick={() => setOpen(false)}
                    >
                    Apply
                    </button>
                    <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                    >
                    Cancel
                    </button>
                </div>
                </div>
            </Transition.Child>
            </div>
        </Dialog>
        </Transition.Root>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
            {filterData && filterData.puesto.map((position) => (
            <li key={position.id}>
                <a href="" className="block hover:bg-gray-50" onClick={(e) => {e.preventDefault(); modaF(position.id)}}>
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-600 truncate">{position.nombre}</p>
                    <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {position.jornada}
                        </p>
                    </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                        <OfficeBuildingIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        {position.empresa.nombreComercial}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        {position.empresa.ciudad}
                        </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        <p>
                        {position.status} <time>{moment(position.fechaCreacion).format('YYYY-MM-DD HH:mm')}</time>
                        </p>
                    </div>
                    </div>
                </div>
                </a>
            </li>
            ))}
        </ul>
        </div>
        </div>
    </div>

    );
};

export default Page;
