import { cn } from "@/lib/utils"
import { SidebarItemProps } from "@/types"
import { Icon } from "lucide-react"
import Link from "next/link"

const SidebarItem = (props: SidebarItemProps) => {
  const { icon: Icon, label, href }= props
  return (
    <Link href={href} className={cn(`flex gap-x-2 mt-2  text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`)}>
      <Icon className="h-5 w-5" strokeWidth={1}/>
      {label}
    </Link>
  )
}

export default SidebarItem