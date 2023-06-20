import { useState, createContext } from "react";
import {
  getSubtractYear,
  calculateMark,
  calculatePlan,
  formatMoney,
} from "../helpers";

const ContributeContext = new createContext();

const ContributeProvider = ({ children }) => {
  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [loading, setLoading ] = useState(false);
  const [data, setData] = useState({
    mark: "",
    year: "",
    plan: "",
  });

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    // basis
    let result = 2000;

    // subtract 3% per year
    const difference = getSubtractYear(data.year);

    result -= (difference * 3 * result) / 100;

    result *= calculateMark(data.mark);

    result *= calculatePlan(data.plan);

    result = result.toFixed(2);

    result = formatMoney(result);
    setLoading(true);
    setTimeout( ()=> {
      setResult(result);
      setLoading(false);
    }, 3000);
    
  };

  return (
    <ContributeContext.Provider
      value={{ data, error, result, loading, handleChangeData, setError, quoteInsurance }}
    >
      {children}
    </ContributeContext.Provider>
  );
};

export { ContributeProvider };

export default ContributeContext;
