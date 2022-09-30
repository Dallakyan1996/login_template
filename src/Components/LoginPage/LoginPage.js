import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { apiServices } from "../../services/API";

const LoginPage = (props) => {

  useEffect(() => {
    if (apiServices.currentUserValue) {
      props.history.push("/");
    }
  }, [props])

  return (
    <>
      <div className="login_header">
        <h2>Title</h2>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 form_div">
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
                  apiServices.login(username, password).then(
                    (user) => {
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
                    <div className="form-group">
                      <label htmlFor="username">Email</label>
                      <Field
                        name="username"
                        type="text"
                        className={
                          "form-control" +
                          (errors.username && touched.username
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field
                        name="password"
                        type="password"
                        autoComplete="off"
                        className={
                          "form-control" +
                          (errors.password && touched.password
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group submit_div">
                      <button
                        type="submit"
                        className="btn btn-primary login_btn"
                        disabled={isSubmitting}
                      >
                        Log in
                      </button>
                    </div>
                    {status && (
                      <div className={"alert alert-danger"}>Wrong Email or Password</div>

                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { LoginPage };
