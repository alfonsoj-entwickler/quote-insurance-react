import { Fragment } from "react";
import { MARKS, YEARS, PLANS } from "../constants";
import useContribute from "../hooks/useContribute";
import MessageError from "./MessageError";

const Form = () => {
  const { data, error, setError, handleChangeData, quoteInsurance } = useContribute();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(data).includes("")) {
      console.error("Error, all fields are mandatory");
      setError("Error, all fields are mandatory");
      return;
    }
    setError("");
    quoteInsurance();
  };

  return (
    <>
      {error && <MessageError />}
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Mark
          </label>
          <select
            className="w-full p-3 bg-white border border-gray-400"
            name="mark"
            onChange={(e) => handleChangeData(e)}
            value={data.mark}
          >
            <option value="">Select a mark</option>
            {MARKS.map((mark) => (
              <option key={mark.id} value={mark.id}>
                {mark.name}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Year
          </label>
          <select
            className="w-full p-3 bg-white border border-gray-400"
            name="year"
            onChange={(e) => handleChangeData(e)}
            value={data.year}
          >
            <option value="">Select a year</option>
            {YEARS.map((year) => (
              <option key={`year-${year}`} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase">
            Select a plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={`plan-${plan.id}`}>
                <label>{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeData(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-green-400 hover:bg-green-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="contribute"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </>
  );
};

export default Form;
