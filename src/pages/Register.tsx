import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import axios from 'axios';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Use <MyForm /> wherevs
function Register() {
  const navigate = useNavigate()
  // Shape of form values
interface FormValues {
  id:number;
  username: string;
  surname:string;
  password: string;
  email:string;
  posts:object[];
  followers:string[];
  isPublic:boolean;
  following:string[];
  blockList:string[];
  stories:string[];
  notifications:string[];
  bio:{}
}

interface OtherProps {
  message: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form style={{marginLeft:"50px"}}>
      <h1>{message}</h1>
      <label htmlFor="Username">Username</label><br />  
      <Field type="text" name="username" />
      {touched.username && errors.username && <div>{errors.username}</div>}
<br />
<label htmlFor="surname">surname</label><br />  
      <Field type="text" name="surname" />
      {touched.surname && errors.surname && <div>{errors.surname}</div>}
<br />
<label htmlFor="Email">Email</label>
<br />
<Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}
      <br />
      <label htmlFor="PAssword">password</label>
<br />
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}
<br />

{/* <label htmlFor="Info">info</label> */}
{/* <br />
      <Field type="text" name="info" />
      {touched.bio?.info && errors.bio?.info && <div>{errors.bio?.info}</div>}
<br /> */}
{/* <label htmlFor="Country">country</label> */}
{/* <br />
      <Field type="text" name="country" />
      {touched.bio?.country && errors.bio?.country && <div>{errors.bio?.country}</div>}
<br /> */}
<label htmlFor="isPublic">ispublic</label>
<br />
      <Field type="checkbox" name="ispublic" />
      {touched.isPublic && errors.isPublic && <div>{errors.isPublic}</div>}
<br />
      <Button type="submit" >
        Submit
      </Button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialUsername?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      id:users.length+1,
      username: props.initialUsername || '',
      surname:'',
      password: '',
      email:'',
      posts:[],
      followers:[],
      isPublic:false,
      following:[],
      blockList:[],
      stories:[],
      notifications:[],
      bio:{}
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (!isValidEmail(values.email)) {
    //   errors.email = 'Invalid email address';
    // }
    return errors;
  },

  handleSubmit: values => {
    // do submitting things
    axios.post("http://localhost:5000/users",values).then((res)=>{
      console.log(res);

      if (res.status == 201){
        alert("this user already exists")
      }
      if (res.status == 200){
        alert("user succesfully registered")
        navigate("/login")
      }
    })
    
  },
})(InnerForm);
  let [users, setUsers] = useState([])
 
   useEffect(()=>{
    axios("http://localhost:5000/users").then((res)=>{
      setUsers(res.data)
      })
   },[])

  return (

  <div>
    <MyForm message="Register" />
  </div>
);
  }
export default Register;