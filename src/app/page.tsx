import Sidebar from "@/components/Sidebar";
import ExpensesList from "@/components/ExpensesList";;

export default function DashboardPage() {
  return (

    <div className="flex flex-col md:flex-row items-center w-screen">
      <Sidebar />
      <ExpensesList />
    </div>
  
  );
}
