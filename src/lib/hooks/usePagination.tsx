import { useState, useCallback } from 'react';

export default function usePagination(maxPage: number) {
    const [page, setPage] = useState(1);

    const prevPage = useCallback(() => {
        if (!(page < 1)) return;
        setPage(page - 1);
    }, [page]);

    const nextPage = useCallback(() => {
        setPage(page + 1);
    }, [page]);

    return {
        page,
        prevPage,
        nextPage,
    };
}
