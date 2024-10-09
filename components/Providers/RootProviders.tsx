import { ReactNode } from "react"
import { ThemeProvider } from "./ThemeProvider"

const RootProviders =  ({children} : {children: ReactNode}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

export default RootProviders