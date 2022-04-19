const JobTitle = () => {
    return (
        <div className="rounded-lg">
            <div className="grid gap-4 sm:items-center md:grid-cols-3">
                <div className="flex w-full items-center justify-between rounded-lg bg-white">
                    <img
                        className="m-4 mr-4 h-16 w-auto rounded-lg border"
                        src="/images/companies/santander.svg"
                        width={100}
                        height={100}
                    />
                    <div className="w-full p-2">
                        <div className="grid">
                            <p className="text-base text-gray-900">Banco Santander México S.A.</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="mt-4 grid w-full items-center rounded-lg bg-white p-4 sm:mt-0">
                        <h1 id="message-heading" className="text-lg font-medium leading-none text-gray-900">
                            Asistente Financiero
                        </h1>
                        <p className="truncate text-base leading-none text-gray-500">Créditos: Préstamos y Tarjetas</p>
                    </div>
                </div>

                <div className="mt-4 flex items-center justify-between sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"></div>
            </div>
        </div>
    );
};

export default JobTitle;
