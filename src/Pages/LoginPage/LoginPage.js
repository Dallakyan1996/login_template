import React, { useState } from "react";
import { MyButton, MyCard, MyInput } from "../../Components/UI/UiComponents";
import s from "./login.module.css";
import { BiEnvelope } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import AuthService from "../../Services/AuthService";
import CSDLogo from "./../../Assets/images/CSDLogo.png"
import HeamoneticsLogo from "./../../Assets/images/Haemonetics.png"

const LoginPage = () => {
  let [payload, setPayload] = useState({
    email: "",
    password: ""
  })

  return (
    <>
      <div className={s.loginWrapper}>
        <div className={s.loginPageLineBg}>
          <div className={s.logoImgDiv}>
            <img src={CSDLogo} style={{
              width: "70%"
            }}></img>
          </div>
        </div>
        <div className={s.container}>
          <div className={s.loginSide}>
            <div className={s.headerName}>
              <img
                style={{
                  width: "18rem"
                }}
                src={HeamoneticsLogo} />
            </div>
            <div className={s.loginForm}>
              <div style={{
                fontWeight: "900",
                paddingLeft: ".5rem",
                paddingBottom: ".5rem",
                color:"#566681"
              }}>Log In</div>
              <div className={s.formGroup}>
                <MyInput
                  name="username"
                  type="text"
                  label="Email"
                  customStyle={{
                    width: "22rem",
                    borderRadius: "7px",
                    backgroundColor: "#f0f1f5"
                  }}
                  icon={<BiEnvelope style={{ fill: "#FF8111" }} />}
                  onChange={(email) => {
                    setPayload({
                      ...payload,
                      email: email
                    })
                  }}
                />
              </div>
              <div className={s.formGroup}>
                <MyInput
                  name="password"
                  type="password"
                  autoComplete="off"
                  icon={<AiOutlineLock style={{ fill: "#FF8111" }} />}
                  label="Password"
                  onChange={(password) => {
                    setPayload({
                      ...payload,
                      password: password
                    })
                  }}
                  customStyle={{
                    width: "22rem",
                    borderRadius: "7px",
                    backgroundColor: "#f0f1f5"

                  }}
                />
              </div>
              <div className={s.buttonDiv}>
                <span style={{
                  color: "#FF8111"
                }}>Forgot Password</span>
                <MyButton
                  type="submit"
                  customStyle={{
                    fontSize: "14px",
                    padding: "0.4rem 0.2rem",
                    backgroundColor: "#FF8111",
                    width: "7rem",
                  }}
                  onClick={() => {
                    AuthService.login(payload).then(res => {
                    }).catch(e => {
                      console.log(e)
                    })
                  }}
                >Log in</MyButton>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export { LoginPage };