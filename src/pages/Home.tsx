import {useDispatch, useSelector} from "react-redux"
import Login from "./Login"
import { RootState } from "./../redux/store"
import Direct from "./Direct"


type Props = {}


function Home({}: Props) {
const dispatch = useDispatch()
const isLogin = useSelector((state:RootState)=> state.users.isLogin)

  return (
    
      isLogin ? <Direct/> : <Login/>
    
    
  )
}

export default Home