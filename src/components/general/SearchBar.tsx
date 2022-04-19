// Package Imports
import { useState, useEffect, ChangeEventHandler } from "react";
import { useRouter } from "next/router";

// Custom Hooks Imports
import { useLocalStorage } from "@/hooks/useLocalStorage";

// Icon Imports
import { iconSearch } from "../icons";

// Icons Object
const icons = {
    search: iconSearch,
};

// Component
export default function SearchBar() {
    const router = useRouter();
    const [query, setquery] = useLocalStorage("search", "");
    const [keywords, setkeywords] = useState("");

    const searchKeyword = (e: any) => {
        e.preventDefault();
        if (keywords.length > 2) {
            let newQuery = {
                keywords: keywords || "",
                page: 1,
            };
            localStorage.setItem("search", JSON.stringify(newQuery));
            if (router.pathname === "/#") router.reload();
            else router.push("/#");
        }
    };

    const updateKeywords: ChangeEventHandler<HTMLInputElement> = (e) => {
        setkeywords(e.target.value);
    };

    useEffect(() => {
        const searchField = document.getElementById("search") as HTMLInputElement | null;
        if (searchField == null) throw new Error("No search element");
        if (query.keywords !== "" && query.keywords !== undefined && router.pathname === "/buscar")
            searchField.value = query.keywords;
        else localStorage.removeItem("search");
    }, []);

    return (
        <form className="mx-2 flex flex-1 items-center justify-center" onSubmit={searchKeyword}>
            <div className=" w-full">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <icons.search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-gray-300 border-gray-600 bg-gray-50 py-2 pl-10 pr-8 leading-5 placeholder-gray-500 focus:placeholder-gray-400 focus:outline-none sm:pr-16 sm:text-sm "
                        placeholder="Buscar"
                        type="search"
                        onChange={updateKeywords}
                        maxLength={50}
                        minLength={3}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <button
                            type="submit"
                            className="h-full rounded-r-md border border-gray-600 bg-gray-600 px-2 hover:bg-gray-700 sm:px-4 sm:text-sm"
                        >
                            <span className="sr-only">Buscar</span>
                            <icons.search className="h-5 w-5 stroke-2 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}
