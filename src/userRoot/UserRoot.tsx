
import Navbar from '../layout/Navbar'
import { Outlet } from "react-router-dom";

type Props = {}

function userRoot({}: Props) {
  return (
<div>
<Navbar/>
<Outlet/>
</div>  )
}

export default userRoot