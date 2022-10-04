import './changePassword.css';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { apiServices } from "../../services/API";

const ChangePassword = () => {
    const [successText, setSuccessText] = useState("")
    const [errorText, setErrorText] = useState("")



    return <>
        <div className="changePasswordContainer">
            <div className='changePasswordContent'>
                <div className='changePasswordHeader'>
                    <h4>Change Password</h4>
                </div>
                <div className='changePasswordWrapper'>
                    <Formik
                        initialValues={{
                            oldPassword: "",
                            newPassword: "",
                            confirmPassword: ""
                        }}
                        validationSchema={Yup.object().shape({
                            oldPassword: Yup.string().required("Old Password field is required"),
                            newPassword: Yup.string().required("New Password field is required"),
                            confirmPassword: Yup.string().required("Confirm Password field is required"),
                        })}
                        onSubmit={(
                            { oldPassword, newPassword, confirmPassword },
                            { setStatus, setSubmitting }
                        ) => {
                            setStatus();
                            apiServices.changePasswordPost(oldPassword, newPassword, confirmPassword).then(
                                (res) => {
                                    if (res.success) {
                                        setSuccessText(res.success)
                                    }
                                    else {
                                        try {
                                            setErrorText(Object.values(Object.values(res)[1])[0][0])
                                        }
                                        catch {
                                            setErrorText("Old Password is incorrect")
                                        }
                                    }
                                    setSubmitting(false)
                                },
                            )
                        }}
                    >
                        {({ errors, status, touched, isSubmitting, onChange }) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="oldPassword">Old Password</label>
                                    <Field
                                        id="oldPassword"
                                        name="oldPassword"
                                        type="password"
                                        placeholder="Old Password"
                                        className={
                                            "form-control" +
                                            (errors.oldPassword && touched.oldPassword
                                                ? " is-invalid"
                                                : "")
                                        }
                                    />
                                    <ErrorMessage
                                        name="oldPassword"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newPassword">New Password</label>
                                    <Field
                                        name="newPassword"
                                        type="password"
                                        placeholder="New Password"
                                        autoComplete="off"
                                        className={
                                            "form-control" +
                                            (errors.newPassword && touched.newPassword
                                                ? " is-invalid"
                                                : "")
                                        }
                                    />
                                    <ErrorMessage
                                        name="newPassword"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirm Password"
                                        autoComplete="off"
                                        className={
                                            "form-control" +
                                            (errors.confirmPassword && touched.confirmPassword
                                                ? " is-invalid"
                                                : "")
                                        }
                                    />
                                    <ErrorMessage
                                        name="confirmPassword"
                                        component="div"
                                        className="invalid-feedback"
                                    />
                                </div>
                                <div className="form-group submit_div">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isSubmitting}
                                        onClick={() => {
                                            setSuccessText("")
                                            setErrorText("")
                                        }}
                                    >
                                        Update
                                    </button>
                                </div>
                                {errorText && (
                                    <div className={"alert alert-danger"}>{errorText}</div>

                                )}
                                {successText && (
                                    <div className={"alert alert-success"}>{successText}</div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    </>
}

export default ChangePassword;