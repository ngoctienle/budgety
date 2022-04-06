import BudgetHeader from "./components/BudgetHeader";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";

function App() {
  return (
    <div>
      <BudgetHeader />
      <div className="bottom">
        <BudgetForm />
        <BudgetList />
      </div>
    </div>
  );
}

export default App;
