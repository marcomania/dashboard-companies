"use client"

import Image from "next/image";
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex items-center w-full min-h-20 h-20 px-6 border-r cursor-pointer gap-2"
      onClick={() => router.push("/")}
    >
      <Image src="logo2.svg" alt="logo" width={30} height={30} priority />
      <h1 className="font-bold text-xl">ManiaManager</h1>
    </div>
  )
}

export default Logo