import { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Signup = () => {

  const navigate = useNavigate();

  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: ""
  // })

  const [name, setName] = useState("")

  const handleChnage = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/home")
    console.log("Hello ", name);
  }

  // console.log(formValue);

  return (
    <div className="main_container">
      <h2>Welcome</h2>
      <p>Create a new account</p>
      <form onSubmit={onSubmit}>
        Full Name
        <input type="text" name="name" placeholder="Enter name here..." onChange={handleChnage} />
        Email
        <input type="email" name="email" placeholder="Enter email here..." />
        Phone No.
        <input type="tel" name="phone" placeholder="Enter phone number here..." />
        Password
        <input type="password" name="password" placeholder="Enter password here..." />

        <button type="submit" onClick={onSubmit}>
          <div style={{display: 'flex',gap: '12px', alignItems: 'center'}}>
            <img src="src\assets\movix-logo.png" alt="" width="30px" />
            Login
          </div>
        </button>
      </form>
    </div>
  );
};

export default Signup;
