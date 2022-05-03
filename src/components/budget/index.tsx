import { Line } from "./styles"

type Props = {
  source: string,
  target: string,
  duration: number,
  amount: number,
  amountNoPlan: number,
  plan: string,
};

const Budget: React.FC<Props> = ({ source, target, duration, amount, amountNoPlan, plan }: Props) => {
  const maskCurrency = (value: string) => {
    const splitedValue = value.replace(".", ",").split(",");
    const decimalPlaces = splitedValue[1] === undefined ? "00" : splitedValue[1].padEnd(2, "0");
    return splitedValue[0].concat(",").concat(decimalPlaces);
  }
  return (
    <Line>
      <p>{source}</p>
      <p>{target}</p>
      <p>{duration} min</p>
      <p>{plan}</p>
      <p>R${maskCurrency(amount.toString())}</p>
      <p>R${maskCurrency(amountNoPlan.toString())}</p>
    </Line>
  );
}

export default Budget;