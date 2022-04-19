import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: string) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            if (typeof window !== "undefined") {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            }
        } catch (err) {
            console.error(err);
            return initialValue;
        }
    });

    return [storedValue, setStoredValue];
};
