import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout,} from '../src/features/authSlice';

function App() {
  // const [login, setLogin] = useState(false)
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
  // useEffect( async()=>{
  //       const result = await fetch("https://dummyjson.com/auth/login");
  //       console.log(result)
  // },[login])

    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   console.log(`Username: ${username}, Password: ${password}`);
  
    //   // const res = await  fetch('https://dummyjson.com/auth/login', {
    //   //   method: 'POST',
    //   //   headers: { 
    //   //     "access-control-allow-origin" : "*",
    //   //     'Content-Type': 'application/json' },
    //   //   body: JSON.stringify({
  
    //   //     username: "username",
    //   //     password: "password",
    //   //     // expiresInMins: 30, // optional, defaults to 60
    //   //   }),
    //   //   // credentials: 'include' // Include cookies (e.g., accessToken) in the request
    //   // })
    //   //   .then(res =>{
    //   //     console.log({res})
    //   //     const result = res.json()
    //   //     console.log("result",result)
    //   //   })
    //   //   .catch((error)=>{
    //   //     console.log("error --",error)
    //   //   });
  
  
    //   // console.log("res",res)
   
    // };

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = { username, password }; // In a real app, you would validate these credentials
      dispatch(login(userData));

      console.log("hii")
    };

  console.log({user})
  

  const handleLogout = () => {
    dispatch(logout());
  };


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>

      {/* Shoe User */}
        <div>
            <h1>Welcome to the User Portal</h1>
            {
              (user) ? 
                 <>
                  <div >Name  {user.username}  </div> 
                <div >Password  {user.password}  </div> 
                </>
                : ""
            }
        </div>


        {/* user login  */}
        <div>
        <h2>User authentication</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>

      </div>

      <br />
      <hr />
      <br />

      {/* Lgout Section */}
      <section>
        <button onClick={handleLogout}>Logout</button>
      </section>
    </>
  )
}

export default App
