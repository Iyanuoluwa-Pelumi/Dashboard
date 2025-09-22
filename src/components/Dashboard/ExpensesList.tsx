'use client';

import React from "react";
import Image from "next/image";
import { ShoppingCart, Ellipsis, BusFront, House, IceCreamBowl, CirclePlay } from 'lucide-react'
import { IconKey, Expense } from '@/types/expenses'

const icons = {
  cart: <ShoppingCart className="w-6 h-6" />,
  bus: <BusFront className="w-6 h-6" />,
  house: <House className="w-6 h-6" />,
  food: <IceCreamBowl className="w-6 h-6" />,
  entertainment: <CirclePlay className="w-6 h-6" />
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

  {
    id: 4,
    name: "Food",
    amount: -156.00,
    date: "5:12 pm",
    location: "Makan Steak",
    icon: "food",
    color: "bg-[rgba(220,52,52,1)]"
  },

  {
    id: 5,
    name: "Entertainment",
    amount: -35.200,
    date: "5:12 pm",
    location: "Nonton Bioskop",
    icon: "entertainment",
    color: "bg-[rgba(75,168,61,1)]"
  }
];



const chart = [
  {
    id: "Food and Drinks",
    amount: 872.4,
    progress: 25
  },
  {
    id: "Shopping",
    amount: "1,378.2",
    progress: 45
  },
  {
    id: "Housing",
    amount: 9285.5,
    progress: 35
  },

  {
    id: "Transportation",
    amount: 420.7,
    progress: 15
  },

  {
    id: "Vehicle",
    amount: 520.0,
    progress: 30
  },
];


export default function ExpensesList() {

  return (
    <div className=" flex flex-col md:flex md:flex-row bg-[rgba(255,255,255,1)] items-center gap-10 md:justify-around md:rounded-3xl md:w-[90%] ">
      <div className="w-11/12 mx-auto mt-0 md:w-[90%] md:flex md:justify-center">
        <div className="md:w-xl justify-center flex flex-col">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-[rgba(38,42,65,1)] text-3xl font-bold">Expenses</h1>
              <p className="text-[rgba(16,16,16,1)] text-sm">01 - 25 March, 2020</p>
            </div>

            <div className="flex justify-end">
              <Image
                src="/Users.png"
                alt="Users"
                width={100}
                height={100}
                className="m-4 p-5"
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
              <h3 className="text-[rgba(38,42,65,1)] font-normal text-lg">Today</h3>
              <Ellipsis className="text-[rgba(216,216,216,1)]"/>
            </div><hr />

            <ul className="flex flex-col gap-4">
              {expenses.map((e) => (
                <React.Fragment key={e.id}>
                  {e.name === "Food" && (
                    <div className="flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-[rgba(38,42,65,1)] font-normal text-lg tracking-wide">
                        Monday, 23 March 2020
                        </h3>
                        <Ellipsis className="text-[rgba(216,216,216,1)]" />
                      </div><hr />
                    </div>
                  )}

                  <li className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 ${e.color} rounded-full flex items-center justify-center`}
                      >
                      {getIcon(e.icon)}
                    </div>
                    
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="text-[rgba(39,50,64,1)] font-bold">{e.name}</span>
                            <span className="text-[rgba(39,50,64,1)] font-bold">{e.amount}.00</span>
                        </div>
                        <p className="text-sm text-[rgba(64,72,82,1)]">
                            {e.date} • {e.location}
                        </p>
                    </div>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CHART */}
      <div className=" flex flex-col justify-evenly md:h-screen bg-[rgba(249,250,252,1)]">
        <div className="flex flex-col items-center gap-10 w-screen md:w-90">
          <h3 className="items-center text-[rgba(38,42,65,1)] text-md">Where your money go?</h3>
          <div className="w-11/12 md:w-70 items-center justify-center">
            <div className="flex flex-col gap-6">
              {chart.map((c) => (
                <div key={c.id}>
                  {/* Title & Amount */}
                  <div className="flex justify-between items-center mb-1">
                    <span className=" text-[rgba(39,50,64,1)] text-base">{c.id}</span>
                    <span className="text-[rgba(39,50,64,1)] text-sm">{c.amount}.00</span>
                  </div>

                    {/* Progress bar */}
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div
                      className="bg-[rgba(49,186,150,1)] h-1 rounded-full"
                      style={{ width: `${c.progress}%` }}>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
            <Image
              src='/Tips.png'
              alt="Tips"
              width={250}
              height={292}
            />
          </div>
        </div>
    </div>
  )
}