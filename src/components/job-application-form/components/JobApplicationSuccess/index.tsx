import type { FC } from "react";

const JobApplicationSuccess: FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            <h1>¡Has aplicado!</h1>
            <p>Saludos {name}, hemos recibido tu aplicación.</p>
        </div>
    );
};

export default JobApplicationSuccess;
