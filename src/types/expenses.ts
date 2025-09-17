export type IconKey = "cart" | "bus" | "house";

export type Expense = {
  id: number;
  name: string;
  amount: number;
  date: string;
  location: string;
  icon: IconKey;
  color: string;
};
