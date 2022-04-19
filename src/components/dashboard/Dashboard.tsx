import Results from "./Results";

const Dashboard = () => {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto grid max-w-7xl gap-4 py-5 sm:px-4">
                <div>
                    <Results />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
