import { LucideIcon } from "lucide-react"

export type CardSummaryProps = {
  icon: LucideIcon
  total: string
  average: number
  title: string
  tooltipText: string
}

export type CustomIconProps = {
  icon: LucideIcon
}

export type CustomTootipProps = {
  content: string
}