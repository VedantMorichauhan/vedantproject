
import axios from "axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {signup} from '../redux/Action'
import '../css/signup.css'

const Signup = () => {

  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let dispatch = useDispatch();
  const handlesignup =  async (userdata) => {
    // console.log(userdata);
    let user = await axios.post("http://localhost:8090/user",userdata)
    console.log(user);
    dispatch(signup(user.data))
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    let user = {
      username: username,
      email: email,
      password: password,
    }
    handlesignup(user);
    alert("Signup successful")
  }
  return (
    <>
      <form className="form" onSubmit={handlesubmit}>
        <input

          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
      <div className="div">
        <h1 className="text-center"> Sign up</h1>
      </div>
    </>
  )
}

export default Signup;
