import { GoHome } from "react-icons/go";
import { SearchOutlined } from '@mui/icons-material'
import { IoIosSend } from "react-icons/io";
import { BsPlusSquare } from "react-icons/bs";
import { TiCompass } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './../styles/style.module.css'
type Props = {}

function Navbar({}: Props) {
    // const openSideBar():void=>{
        
    // }
  return (
   <>
   <header className={styles.header}>

  <div className="logo"> <h1>INSTAGRAM</h1></div>
   <div className="searchbar">
    <input type="search" />  <SearchOutlined/> 
   </div>
   <div  className = {styles.header}>
<Button>  
   <GoHome className={styles.icons}/>

</Button>
<Button>
   <IoIosSend className={styles.icons}/>
   </Button>
   <Button>
   <BsPlusSquare className={styles.icons}/>
   </Button>
   <Button>
   <TiCompass className={styles.icons} />
   </Button>
   <Button>
   <FaRegHeart className={styles.icons}/>
   </Button>
   <Button >
   <CiUser className={styles.icons}/>
   </Button>
<div className="sidebar">
    <ul>
       <Button>Profile</Button>
       <Button>Saved</Button>
       <Button>Settings</Button>
       <Button>Switch Accounts</Button>
       <hr />
       <Link to="/"><Button>Log Out</Button></Link>
    </ul>
</div>
   </div>
 
   </header>
   </>
  )
}

export default Navbar