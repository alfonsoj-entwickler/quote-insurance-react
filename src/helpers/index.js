import { MARKS } from "../constants";

export function getSubtractYear(year) {
  return new Date().getFullYear() - year;
}

export function calculateMark(mark) {
  const auto = MARKS.find((item) => item.id === mark);
  let increase;
  switch (auto.continent) {
    case "europa":
      increase = 1.3;
      break;
    case "usa":
      increase = 1.15;
      break;
    case "asia":
      increase = 1.05;
      break;
    default:
      break;
  }
  return increase;
}

export function calculatePlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatMoney(quantity) {
    return quantity.toLocaleString( 'de-DE' ,{
        style: 'currency',
        currency: "EUR",
    })
}
