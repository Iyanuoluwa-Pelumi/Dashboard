'use client';

import Image from "next/image";
import { ShoppingCart, Ellipsis, BusFront, House, IceCreamBowl, CirclePlay } from 'lucide-react'
import { IconKey, Expense } from '@/types/expenses'

const icons = {
    cart: <ShoppingCart className="w-6 h-6" />,
    bus: <BusFront className="w-6 h-6" />,
    house: <House className="w-6 h-6" />,
  };

  function getIcon(icon: IconKey) {
    return icons[icon] || null;
  }
  
  const expenses: Expense[] = [
    {
      id: 1,
      name: "Grocery",
      amount: -326.800,
      date: "5:12 pm",
      location: "Belanja di pasar",
      icon: "cart",
      color: "bg-[rgba(50,167,226,1)]",
    },
    {
      id: 2,
      name: "Transportation",
      amount: -15.000,
      date: "5:12 pm",
      location: "Naik bus umum",
      icon: "bus",
      color: "bg-[rgba(181,72,198,1)]",
    },
    {
      id: 3,
      name: "Housing",
      amount: -185.750,
      date: "5:12 pm",
      location: "Bayar Listrik",
      icon: "house",
      color: "bg-[rgba(255,135,0,1)]",
    },
  ];

export default function ExpensesList() {

    return (
        <div className="bg-[rgba(255,255,255,1)] flex flex-col justify-around rounded-lg shadow w-lg ">
   
            <div className="grid grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[rgba(38,42,65,1)] text-3xl font-bold">Expenses</h1>
                    <small className="text-[rgba(16,16,16,1)] text-base">01 - 25 March, 2020</small>
                </div>
    
                <div className="flex justify-end -space-x-2">
                    <Image
                    src="/Users.png"
                    alt="Users"
                    width={100}
                    height={100}
                    />
                </div>
            
        
                <div className=" col-span-2">
                    <Image
                        src="/Stats.png"
                        alt="Stats chart"
                        width={510}
                        height={60}
                        className="w-full h-auto"
                    />
                </div>
                
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-[rgba(38,42,65,1)] font-[400px] text-lg">Today</h3>
                    <Ellipsis className="text-[rgba(216,216,216,1)]"/>
                </div><hr />

                <ul className="flex flex-col gap-6">
                    {expenses.map((e) => (
                    <li
                        key={e.id}
                            className="flex items-center gap-6">
                        <div
                            className={`w-12 h-12 ${e.color} rounded-full flex items-center justify-center`}>
                            {getIcon(e.icon)}
                        </div>
                    
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <span className="text-[rgba(39,50,64,1)] font-bold">{e.name}</span>
                                <span className="text-[rgba(39,50,64,1)] font-bold">${e.amount}</span>
                            </div>
                            <p className="text-sm text-[rgba(64,72,82,1)]">
                                {e.date} • {e.location}
                            </p>
                        </div>
                    </li>))}
                </ul>
            </div>


            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                        <h3 className="text-[rgba(38,42,65,1)] font-[400px] text-lg tracking-wide">Monday, 23 March 2020</h3>
                        <Ellipsis className="text-[rgba(216,216,216,1)]"/>
                    </div> <hr />
            </div>
        </div>
      
    )
}