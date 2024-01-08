import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, signup } from '../redux/Action'

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let dispatch = useDispatch();
  const handleLogin =  async (email, password) => {
    // console.log(userdata);
    let user = await axios.get
    (`http://localhost:8090/user?email=${email}&password=${password}`);
    console.log(...user.data);
    dispatch(signup(...user.data));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
      handleLogin(email, password);

  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  )
}

export default Login
