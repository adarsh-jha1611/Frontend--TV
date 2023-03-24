import React, { useState, useContext } from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import loginImg from '../assets/images/login.png'
import { AuthContext } from '../context/AuthContext'
import {BASE_URL} from './../utils/config'


const Login = () => {


  const [credentials, setCrendentials]= useState({
    email:undefined,
    password:undefined
})


const {dispatch}=useContext(AuthContext)
const navigate= useNavigate()

  const handleClick = async e=>{
    e.preventDefault()

    dispatch({type:'LOGIN_START'})

    try {
      const res= await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(credentials)
      })

      const result = await res.json()
      if(!res.ok) alert(result.message)

      console.log(result.data)

      dispatch({type:'LOGIN_SUCCESS', payload:result.data})
      navigate('/')
    } catch (err) {
      dispatch({type:'LOGIN_FAILURE',payload:err.message})
    }
  }

  const handleChange=e=>{
    setCrendentials(prev=>({...prev, [e.target.id]:e.target.value}))

}
  return <section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
          <div className='login__container d-flex justify-content-between'>
            <div className='login__img'>
              <img src={loginImg} alt="" />
            </div>

            <div className='login__form'>
              
              <h2>Login</h2>

              <Form onSubmit={handleClick}>
                <FormGroup>
                  <input type='email' placeholder='Mail ID' required id='email' onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                  <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                <p>New here? <Link to='/register'>Create Account</Link></p>
              </Form>


            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login