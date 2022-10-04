import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { MyCard } from "../../Components/UI/UiComponents";
import * as Yup from "yup";
import s from "./login.module.css";
import AuthService from "../../Services/AuthService";

const LoginPage = (props) => {

  return (
    <>
      <div className={s.loginHeader}>
        <h2>Title</h2>
      </div>
      <div className={s.loginWrapper}>
        <div className={s.container}>
          <MyCard style={{
            justifyContent: "center",
            alignItems: "center"
          }}>
            <div>
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  username: Yup.string().required("Email is required"),
                  password: Yup.string().required("Password is required"),
                })}
                onSubmit={(
                  { username, password },
                  { setStatus, setSubmitting }
                ) => {
                  setStatus();
                  AuthService.login(username, password).then(
                    () => {
                      const { from } = props.location.state || {
                        from: { pathname: "/" },
                      };
                      props.history.push(from);
                    },
                    (error) => {
                      setSubmitting(false);
                      setStatus(error);
                    }
                  );
                }}
              >
                {({ errors, status, touched, isSubmitting }) => (
                  <Form>
                    <div className={s.formGroup}>
                      <label htmlFor="username">Email</label>
                      <Field
                        name="username"
                        type="text"
                        className={
                          (errors.username && touched.username)
                            ? s.isInvalid
                            : s.textField
                        }
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className={s.errorMessage}
                      />
                    </div>
                    <div className={s.formGroup}>
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        autoComplete="off"
                        className={
                          (errors.password && touched.password)
                            ? s.isInvalid
                            : s.textField
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className={s.errorMessage}
                      />
                    </div>
                    <div className={s.formGroup}>
                      <button
                        type="submit"
                        className={s.button}
                        disabled={isSubmitting}
                      >
                        Log in
                      </button>
                    </div>
                    {status && (
                      <div className={s.alertDanger}>Wrong Email or Password</div>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </MyCard>
        </div>
      </div>
    </>
  );
}

export { LoginPage };
