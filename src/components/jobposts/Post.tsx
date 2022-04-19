import JobTitle from "./JobTitle";
import EmployerInfo from "./EmployerInfo";
import ContactInfo from "./ContactInfo";
import JobInfo from "./JobInfo";
import Abilities from "./Abilities";
import Skills from "./Skills";

const Post = () => {
    return (
        <>
            <div className="mx-auto mt-3 grid max-w-3xl grid-cols-1 gap-4 pb-20 sm:mt-0 sm:py-5 sm:px-6 lg:max-w-7xl lg:grid-cols-3">
                <div className="lg:col-span-3">
                    <JobTitle />
                </div>
                <div className="lg:col-span-1">
                    <div className="grid gap-4">
                        <EmployerInfo />
                    </div>
                </div>
                <div className="space-y-6 lg:col-span-1">
                    <div className="grid gap-4">
                        <ContactInfo />
                    </div>
                </div>
                <div className="space-y-6 lg:col-span-1">
                    <div className="grid gap-4">
                        <JobInfo />
                    </div>
                </div>
                <div className="space-y-6 lg:col-span-1">
                    <div className="grid gap-4">
                        <Abilities />
                    </div>
                </div>
                <div className="space-y-6 lg:col-span-1">
                    <div className="grid gap-4">
                        <Skills />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
