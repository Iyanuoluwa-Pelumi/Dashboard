'use client';

import { useState } from "react";
import Image from "next/image";


export default function SideBar() {

    const [active, setActive] = useState('Expenses');
    const MenuItems = ['Dashboard', 'Expenses', 'Wallets', 'Summary', 'Account', 'Settings'];

    return (
        <aside className="relative flex flex-col w-sm justify-around items-center h-screen">

            <p className="absolute flex justify-center items-center right-30 top-18 z-30 rounded-full w-6 h-6 text-[rgba(255,255,255,1)] bg-[rgba(220,52,52,1)]">4</p>

            <div className="flex flex-col items-center gap-2 ">
                <Image
                    src='/Samantha.png'
                    alt="profile"
                    width={72}
                    height={72}
                />

                <h3 className="text-[rgba(255,255,255,1)] font-bold text-lg">Somantha</h3>
                <small className="text-[rgba(255,255,255,1)] opacity-50">Somantha@email.com</small>
            </div>


            <div className="flex flex-col gap-6">
                {MenuItems.map((item) => (
                    <ul
                        key={item}
                        onClick={() => setActive(item)}
                        className={`${active === item ? "text-[rgba(255,255,255,1)] font-bold text-lg"
                            : "text-[rgba(255,255,255,1)] font-semibold text-left opacity-50"}`
                        }
                    >
                        {item}
                    </ul>
                ))}
            </div>
        </aside>
    )
}
