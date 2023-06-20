import { useContext } from "react";
import ContributeContext from "../context/ContributeProvider";

const useContribute = () => {
    return useContext(ContributeContext)
}

export default useContribute