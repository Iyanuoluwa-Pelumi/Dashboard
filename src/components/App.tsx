import Sidebar from "@/components/Dashboard/Sidebar";
import ExpensesList from "@/components/Dashboard/ExpensesList";

export default function App() {
  return (
    <div className="flex flex-col gap-y-15 md:flex-row w-screen h-full">
      <div className="md:w-64">
        <Sidebar />
      </div>
      
      <div className="flex-1 p-4">
        <ExpensesList />
      </div>
    </div>
  );
}
