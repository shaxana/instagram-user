import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import  ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline';
import axios from 'axios';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
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
 function Posts() {
  
  const [expanded, setExpanded] = React.useState(false);
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(()=>{
    axios("http://localhost:5000/users/").then((res)=>{
    setUsers(res.data)
  })
  },[])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
  <>
   {
    users.map((user:User)=>(
      <Card sx={{ maxWidth: 600 , margin:'0 auto', marginTop:10}} key={user.id}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.username}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={ user.posts[0]?.imgSRC }
        alt="post"
        style={{width:400, height:300, margin:"0 auto"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.posts[0]?.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
         <ChatBubbleOutlineIcon/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
           user.post.title
          </Typography>
         
          
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent> */}
      </Collapse>
    </Card>
    ))
   }</>
  );
}

export default Posts