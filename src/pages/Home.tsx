import {useDispatch, useSelector} from "react-redux"
import Login from "./Login"
import Posts from "../components/Posts"
import { RootState } from "./../redux/store"


type Props = {}


function Home({}: Props) {
const dispatch = useDispatch()
const isLogin = useSelector((state:RootState)=> state.users.isLogin)

  return (
    
      isLogin ? <Posts/> : <Login/>
    
    
  )
}

export default Home