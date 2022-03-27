import React, { useState } from "react";
import "./signupp.css";
import axios from 'axios';
const Signup = () => {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    Age: "",
    MobileNo: "",
    email: "",
    password: "",
    medium: "NA",
  });
  var firstNameRegex = /^[A-Za-z. ]{3,30}$/;
    var lastNameRegex = /^[a-zA-Z\s]{2,}$/;
    var emailRegex = /\S+@\S+\.\S+/;
    var phoneRegex = /(0|91)?[7-9][0-9]{9}/;
    var ageRegex = /[0-9]{2}/;
   

  const placeInput = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setuser({ ...user, [name]: val });
  };
  const gettingData =()=>{
    const res = axios.get('/testing').then((response)=>{
      const data = response.data();
        console.log(data);

    })
    .catch(()=>{
      console.log('error');
    })
  }
  const dataRocket = async (e) => {
    console.log(user);
    e.preventDefault();
    const { fname, lname, Age, MobileNo, email, password, medium } = user;
    if(!fname  || !lname || !Age || !MobileNo || !password || medium==="NA"){
      return window.alert("Fill all fields properly");
    }
    if(!firstNameRegex.test(fname)){
    window.alert("first name is invalid");
    return;
    }
    if(!lastNameRegex.test(lname)){
      window.alert("lastt name is invalid");
      return;
      }
      if(!emailRegex.test(email)){
        window.alert("Email is invalid");
        return;
        }
        if(!phoneRegex.test(MobileNo)){
          window.alert("Mobile No. is invalid");
          return;
          }
          if(!ageRegex.test(Age)){
            window.alert("Age is invalid");
            return;
            }
    if (medium === "Database") {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          Age,
          MobileNo,
          email,
          password,
        }),
      });
        // console.log(res);
      const xx = await res.json();
      if (xx.status === "422" || !xx) {
        return window.alert("Invalid registeration");
      } else {
        window.alert("Successfull registeration");
        // console.log("Successfull register");
      }
    } else {
      if (medium === "Local Storage") {
        if (localStorage.getItem("arr") == null) {
          localStorage.setItem("arr", JSON.stringify([]));
        }

        var users = JSON.parse(localStorage.getItem("arr"));

        users.push(user);

        localStorage.setItem("arr", JSON.stringify(users));
      }
    }
  };
  return (
    <div className="container">
      <h3 className="mainHeading"> Datagrokr's Assessment form </h3>
      <form method="POST">
        <h4> Personal Details</h4>
        <div className="upperContainer">
          <label>
            Firstname:
            <input
              type="text"
              placeholder="Enter your first name"
              name="fname"
              value={user.fname}
              onChange={placeInput}
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              placeholder="Enter your last name"
              name="lname"
              value={user.lname}
              onChange={placeInput}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              placeholder="your Age"
              name="Age"
              value={user.Age}
              onChange={placeInput}
            />
          </label>
          <label>
            phone No.
            <input
              type="text"
              placeholder="enter your mobile No."
              name="MobileNo"
              value={user.MobileNo}
              onChange={placeInput}
            />
          </label>
        </div>
        <h4> Account Details</h4>
        <div className="lowerContainer">
          <label>
            Email:-
            <input
              type="text"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              onChange={placeInput}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={placeInput}
            />
          </label>
        </div>
        <select name="medium" value={user.medium} onChange={placeInput}>
          <option value="NA">NA</option>
          <option value="Database">Database</option>
          <option value="Local Storage">Local Storage</option>
        </select>
      </form>
      <div className="submit">
        <button onClick={dataRocket}> Submit</button>
      </div>
      <div className="yo">
        <button onClick={gettingData}> click me</button>
      </div>
    </div>
  );
};

export default Signup;
