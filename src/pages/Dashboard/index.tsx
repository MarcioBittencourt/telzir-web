import { Container, BudgetHeader, BudgetList, BudgetCalculator, DurationField, CallField, PlanField, CalculatorActions, BudgetBody } from "./styles";
import api from "../../services/api";
import { useState } from "react";
import Budget from "../../components/budget";

const Dashboard: React.FC = () => {

  const tariffTable = [
    { source: "011", target: "016", costPerMinute: 1.90 },
    { source: "016", target: "011", costPerMinute: 2.90 },
    { source: "011", target: "017", costPerMinute: 1.70 },
    { source: "017", target: "011", costPerMinute: 2.70 },
    { source: "011", target: "018", costPerMinute: 0.90 },
    { source: "018", target: "011", costPerMinute: 1.90 }
  ];

  const plans = [
    { name: "FaleMais 30", franchise: 30, key: "FALEMAIS30" },
    { name: "FaleMais 60", franchise: 60, key: "FALEMAIS60" },
    { name: "FaleMais 120", franchise: 120, key: "FALEMAIS120" }
  ]

  const [codeArea, setCodeArea] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const [plan, setPlan] = useState<string>("FaleMais 30");
  const [budgets, setBudgets] = useState<any[]>([]);

  const franchise = async () => {
    const response = await api.post('/franchise/simulate', {
      source: tariffTable[codeArea].source,
      target: tariffTable[codeArea].target,
      duration: duration,
      amount: 0,
      amountNoPlan: 0,
      plan: plan,
    });
    setBudgets(prevState => [...prevState, response.data]);
  }

  return (
    <Container>
      <BudgetCalculator>
        <CallField>
          <label htmlFor="code-area">Chamada</label>
          <select
            id="code-area"
            name="code-area"
            defaultValue={codeArea}
            onChange={(event) => setCodeArea(+event.target.value)}>
            {tariffTable.map((tariff, index) =>
              <option value={index}>
                {tariff.source} - {tariff.target} R${tariff.costPerMinute}
              </option>
            )}
          </select>
        </CallField>
        <PlanField>
          <label htmlFor="plan">Plano</label>
          <select
            id="plan"
            name="plan"
            defaultValue={plans[0].name}
            onChange={(event) => setPlan(event.target.value)}>
            {plans.map((plan) => <option value={plan.key}>{plan.name}</option>)}
          </select>
        </PlanField>
        <DurationField>
          <label htmlFor="duration">Duração (min)</label>
          <input
            id="duration"
            defaultValue={1}
            type="number"
            min={0}
            onChange={(event) => setDuration(+event.target.value)} />
        </DurationField>
        <CalculatorActions>
          <button type="submit" onClick={franchise}>Calcular</button>
        </CalculatorActions>
      </BudgetCalculator>
      <BudgetList>
        <BudgetHeader>
          <h3>Origem (DDD)</h3>
          <h3>Destino (DDD)</h3>
          <h3>Tempo</h3>
          <h3>Plano</h3>
          <h3>Com o plano</h3>
          <h3>Sem o plano</h3>
        </BudgetHeader>
        <BudgetBody>
          {budgets.map((budget) => {
            return (
              <Budget
                source={budget.source}
                target={budget.target}
                duration={budget.duration}
                amount={budget.amount}
                amountNoPlan={budget.amountNoPlan}
                plan={budget.plan}
              />
            )
          })
          }
        </BudgetBody>
      </BudgetList>
    </Container>
  );
}

export default Dashboard;