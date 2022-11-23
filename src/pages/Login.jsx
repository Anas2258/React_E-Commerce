import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [ pwd, setPwd ] = useState('')

 const  loginFunc = async  () => {
    await axios.post('https://reqres.in/api/login', {
      email: userName,
      password: pwd
    })
    .then((res) => {
      console.log(res)
      if(res.status === 200) {
        const token = res.data.token
        console.log(token, 'token')
        localStorage.setItem('token', token)
        navigate('/')
      }
    })
    .catch(err => console.log(err, 'error'))
  }

  useEffect(() => {
    loginFunc()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    loginFunc()
  }
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={userName}
                  onChange= {(e) => setUserName(e.target.value)}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={pwd}
                  onChange= {(e) => setPwd(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
