import { useCallback, useMemo, useRef } from "react";
import useContribute from "../hooks/useContribute";
import { MARKS, PLANS } from "../constants";

const Result = () => {
  const { data, result } = useContribute();
  const { mark, year, plan } = data;

  const yearRef = useRef(year);

  const [nameMark] = useCallback(
    MARKS.filter((m) => m.id === mark),
    [result]
  );
  const [namePlan] = useMemo( () =>
    PLANS.filter((p) => p.id === Number(plan)),
    [result]
  );

  if (result === 0) return null;
  return (
    <div className="bg-gray-200 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-700 font-black text-3xl">Summary</h2>
      <p className="my-2">
        <span className="font-bold">Mark: </span>
        {nameMark.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>
      <p className="my-2">
        <span className="font-bold">Year: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total quote: </span>
        {result}€
      </p>
    </div>
  );
};

export default Result;
