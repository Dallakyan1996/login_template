import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState, useRef } from "react";
import * as Yup from "yup";
import { MyModal } from '../../Components/UI/UiComponents';
import { useDispatch, useSelector } from 'react-redux';
import { changePassActionsType } from '../../Reducers/actions-type';
import { BiLockAlt } from "react-icons/bi";
import AuthService from '../../Services/AuthService';
import s from "./change_password.module.css"
import { useOutsideClick } from "../../CustomHooks/CustomHooks";
import { MyButton } from "../../Components/UI/UiComponents";

const ChangePassword = () => {
    const modalRef = useRef(null);
    const [successText, setSuccessText] = useState("")
    const [errorText, setErrorText] = useState("")
    const { CHANGE_PASSWORD_CLOSE } = changePassActionsType
    const changePasswordOpen = useSelector(state => state.changePassword.changePassIsOpen)
    const dispatch = useDispatch()
    const closeChangePassword = (open) => {
        if (changePasswordOpen) {
            dispatch({
                type: CHANGE_PASSWORD_CLOSE,
                payload: {
                    open: open
                }
            })
        }
    }
    useOutsideClick(modalRef, closeChangePassword);
    return <>
        <MyModal modalHeader="Change Password"
            headerIcon={<div className={s.iconWrapper}><BiLockAlt /></div>}
            onClose={() => {
                closeChangePassword(false)
            }} >
            <div ref={modalRef}>
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
                        let payload = {
                            old_password: oldPassword,
                            new_password: newPassword,
                            confirm_new_password: confirmPassword
                        }
                        AuthService.updatePassword(payload).then(
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
                            }
                        )
                    }}
                >
                    {({ errors, status, touched, isSubmitting, onChange }) => (
                        <Form>
                            <div className={s.formGroup}>
                                <label htmlFor="oldPassword">Old Password</label>
                                <Field
                                    id="oldPassword"
                                    name="oldPassword"
                                    type="password"
                                    placeholder="Old Password"
                                    className={
                                        (errors.oldPassword && touched.oldPassword)
                                            ? s.isInvalid
                                            : s.textField
                                    }
                                />
                                <ErrorMessage
                                    name="oldPassword"
                                    component="div"
                                    className={s.errorMessage}
                                />
                            </div>
                            <div className={s.formGroup}>
                                <label htmlFor="newPassword">New Password</label>
                                <Field
                                    name="newPassword"
                                    type="password"
                                    placeholder="New Password"
                                    autoComplete="off"
                                    className={
                                        (errors.newPassword && touched.newPassword)
                                            ? s.isInvalid
                                            : s.textField
                                    }
                                />
                                <ErrorMessage
                                    name="newPassword"
                                    component="div"
                                    className={s.errorMessage}
                                />
                            </div>
                            <div className={s.formGroup}>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    autoComplete="off"
                                    className={
                                        (errors.confirmPassword && touched.confirmPassword)
                                            ? s.isInvalid
                                            : s.textField
                                    }
                                />
                                <ErrorMessage
                                    name="confirmPassword"
                                    component="div"
                                    className={s.errorMessage}
                                />
                            </div>
                            <div className={s.btnWrapper}>
                                <MyButton type="submit"
                                    onClickFn={function () {
                                        setSuccessText("")
                                        setErrorText("")
                                    }}>UPDATE</MyButton>
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
        </MyModal>
    </>
}

export default ChangePassword;