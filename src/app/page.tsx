import Sidebar from "@/components/Sidebar";
import ExpensesList from "@/components/ExpensesList";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-[rgba(16,16,16,1)]">
      <Sidebar />
      <ExpensesList/>
    </div>
  );
}
