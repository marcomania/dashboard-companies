import CardSummary from "./components/CardSummary";
import LastCustomers from "./components/LastCustomers";
import SalesDistributors from "./components/SalesDistributors";
import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import TotalSuscribers from "./components/TotalSuscribers";

const dataCardSummary = [
  {
    icon: UsersRound,
    total: "12.450",
    average: 12,
    title: "Companies created",
    tooltipText: "See all the companies created"
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Total Revenue",
    tooltipText: "See all of the summary"
  },
  {
    icon: BookOpenCheck,
    total: "363,95€",
    average: 30,
    title: "Bounce Rate ",
    tooltipText: "See all of the bounce rate"
  }
]

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardSummary.map((item, index) => (
          <CardSummary key={index} {...item} />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <SalesDistributors/>
      </div>
      <div className="flex-col xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
        <TotalSuscribers />
        <p className="">List integrations</p>
      </div>
    </div>
  );
}
