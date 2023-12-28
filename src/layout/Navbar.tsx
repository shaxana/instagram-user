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
import { Container, Avatar, Typography, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
type Props = {}
interface User {
   id:number;
   username: string;
   surname:string;
   password: string;
   email:string;
   posts:{
     imgSRC:string,
     title:string
   }[];
   followers:string[];
   isPublic:boolean;
   following:string[];
   blockList:string[];
   stories:string[];
   notifications:string[];
   bio:{}
 }
function Navbar({}: Props) {
   const [users, setUsers] = useState<User[]>([])
   const [searchResult, setSearchResult] = useState("")
   useEffect(()=>{
       axios("http://localhost:5000/users").then((res)=>{
           setUsers(res.data)
           console.log(res.data);
           
       })
   },[])
    // const openSideBar():void=>{
        
    // }
  return (
   <>
   <header className={styles.header}>

  <div className="logo"> <h1>INSTAGRAM</h1></div>
   <div className="searchbar">
    <input type="search"  onChange={(e)=>{
      console.log(e.target.value);
    
      setSearchResult(e.target.value)
      
    }}/>  <SearchOutlined/> 
   </div>

   
 {
  searchResult.trim() !== ""  &&
 
 users.map((user)=>(
   user.username.toLowerCase().includes(searchResult.toLowerCase()) ?
  (  
      <Container sx={{ display: 'flex', flexDirection:'column',alignItems: 'center', justifyContent: 'center', height: '20vh',width:'100%', margin:0 }} key={user.id}>
     <Paper sx={{ width: 400, padding: 2 }}>
       <div style={{ display: 'flex', alignItems: 'center' }}>
         <Avatar sx={{ width: 40, height: 40, marginRight: 2 }}>{user.username[0]}</Avatar>
           <Typography variant="subtitle1">{user.username}</Typography>         
       </div>
       </Paper>
       </Container>
    ) : null
 ))
}
   
   <div  className = {styles.header}>
<Link to="/"><Button>  
   <GoHome className={styles.icons}/>

</Button></Link>
<Button>
   <IoIosSend className={styles.icons}/>
   </Button>
   <Button>
   <BsPlusSquare className={styles.icons}/>
   </Button>
  <Link to="/posts">
  <Button>
   <TiCompass className={styles.icons} />
   </Button></Link>
   <Button>
   <FaRegHeart className={styles.icons}/>
   </Button>
   <Button >
   <CiUser className={styles.icons}/>
   </Button>
{/* <div className="sidebar" style={{display:'hidden'}}>
    <ul>
       <Button>Profile</Button>
       <Button>Saved</Button>
       <Button>Settings</Button>
       <Button>Switch Accounts</Button>
       <hr />
       <Link to="/"><Button>Log Out</Button></Link>
    </ul>
</div> */}
   </div>
 
   </header>
   </>
  )
}

export default Navbar