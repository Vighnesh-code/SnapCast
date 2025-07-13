import Navbar from "@/components/Navbar"
import ".././globals.css"
import { ReactNode } from "react"

const layout = ({children} : {children: ReactNode}) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default layout