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
function Direct({}: Props) {
    const [users, setUsers] = useState<User[]>([])
    useEffect(()=>{
        axios("http://localhost:5000/users").then((res)=>{
            setUsers(res.data)
            console.log(res.data);
            
        })
    },[])
  return (
    <>
     {users.map((user:User)=>(
        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '20vh',width:'100%', margin:0 }} key={user.id}>
        <Paper sx={{ width: 400, padding: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ width: 40, height: 40, marginRight: 2 }}>{user.username[0]}</Avatar>
            <div>
              <Typography variant="subtitle1">{user.username}</Typography>
              message
            </div>
          </div>
          </Paper>
          </Container>
    ))}
    </>
   
   

  )
}

export default Direct