"use client"

import Image from "next/image";
import { useRouter } from "next/navigation"

const Logo = () => {
  const router = useRouter();

  return (
    <div className="flex items-center min-h-20 h-20 px-6 border-b  gap-2"
      onClick={() => router.push("/")}
    >
      <Image src="logo2.svg" alt="logo" width={50} height={50} priority className="dark:invert"/>
      <h1 className="font-bold text-xl">ManiaManager</h1>
    </div>
  )
}

export default Logo