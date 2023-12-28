import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/userSlice';
import { Button } from '@mui/material';
import styles from './../styles/style.module.css'
function LoginForm () {

  // let [users, setUsers] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  // useEffect(()=>{
  //  axios("http://localhost:5000/users").then((res)=>{
  //    setUsers(res.data)
  //    })
  // },[])
  
  // Shape of form values
  interface FormValues {
    username: string;

    password: string
   
  }
  
  interface OtherProps {
    message: string;
  }
  
  // Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
  const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting, message } = props;
    return (
      <Form>
        <h1>{message}</h1>
        <label htmlFor="username" className={styles.textLabel}>username</label> <br />
        <Field type="username" name="username"  className={styles.textField}/>
        {touched.username && errors.username && <div>{errors.username}</div>}
  <br />
  <label htmlFor="password" className={styles.textLabel}>password</label ><br />
        <Field type="password" name="password"   className={styles.textField}/>
        {touched.password && errors.password && <div>{errors.password}</div>}
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
       
        username: props.initialUsername || '',
        password: ''
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
  
    handleSubmit: (values) => {
      // do submitting things
      console.log(values);
      axios.post("http://localhost:5000/login", values).then((res: AxiosResponse)=>{
      console.log('response',res)
      if (res.status == 200) {
        console.log(res.data.token);
        localStorage.setItem("token", res.data)
        dispatch(login(true))
        navigate("/")
      }
     })
    },
  })(InnerForm);
  
  // Use <MyForm /> wherevs

  return (
    <div>
      <MyForm message=""/>
    </div>
  );
} 

export default LoginForm;