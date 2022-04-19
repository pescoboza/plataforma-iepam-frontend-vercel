export function toTitleCase(phrase: string) {
    try {
        return phrase
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
            .split("(")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("(")
            .replace(" De ", " de ")
            .replace(" Y ", " y ")
            .replace(" Con ", " con ");
    } catch (error) {
        return phrase;
    }
}
