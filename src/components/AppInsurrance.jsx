import Form from "./Form";
import Spinner from "./Spinner";
import Result from "./Result";
import useContribute from "../hooks/useContribute";

const AppInsurrance = () => {
    const { loading } = useContribute();
    return (
        
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">
                    AppInsurrance
                </h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />
                { loading ? <Spinner /> : <Result /> } 
            </main>
        </>
    )
}

export default AppInsurrance;