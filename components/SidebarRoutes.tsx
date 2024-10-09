import { BarChart4, Building2, Calendar, CircleHelpIcon, PanelsTopLeft, Settings, ShieldCheck } from "lucide-react"
import SidebarItem from "./SidebarItem"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const dataGeneralSidebar = [
  {
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/"
  },
  {
    icon: Building2,
    label: "Companies",
    href: "/companies"
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/task"
  },
]

const dataToolsSidebar = [
  {
    icon: CircleHelpIcon,
    label: "Faqs",
    href: "/faqs"
  },
  {
    icon: BarChart4,
    label: "Analytics",
    href: "/analytics"
  },
]

const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Settings",
    href: "/settings"
  },
  {
    icon: ShieldCheck,
    label: "Security",
    href: "/security"
  },
]

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="p-2 md:p-6">
        <p className="text-slate-500 mb-2">General</p>
        {dataGeneralSidebar.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))} 
      </div>
      <Separator/>
      <div className="p-2 md:p-6">
        <p className="text-slate-500 mb-2">Support</p> 
        {dataSupportSidebar.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>
      <Separator/>
      <div className="p-2 md:p-6">
        <p className="text-slate-500 mb-2">Tools</p> 
        {dataToolsSidebar.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>

      <div className="flex flex-col mt-auto">
        <div>
          <div className="text-center p-6">
            <Button variant={"outline"} className="w-full">
              Upgrade Plan
            </Button>
          </div>
        </div>
        <Separator/>
        <div className="mt-3 p-3 text-center">
          2024 © All rights reserved
        </div>
      </div>
    </div>
  )
}

export default SidebarRoutes