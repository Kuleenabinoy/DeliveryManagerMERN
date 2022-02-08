import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import validateEmail from "../utils/helpers";
import { ExclamationCircleOutlined } from "@ant-design/icons";
init("user_Xp4pYLGsMh94eExog19XF");
const styles = {
    btnStyle: {
        background: "#505d8c",
        cursor: "pointer",
        color: "black",
        margin: 5,
    },
};

const Email = () => {
    const form = useRef();
    const textAreaEl = useRef();
    const [errorMessage, setErrorMessage] = useState("");
    function handleChange(e) {
        if (e.target.name === "email" || (e.target.name = "email2") || e.target.name === "email3") {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage("  Please Enter a Valid Email ");
            } else {
                setErrorMessage("");
            }
        }
    }

    const randomNo = () => {
        const min = 100;
        const max = 100000;
        const rNo = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(rNo);

        textAreaEl.current.value = rNo;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_2045mi9", "template_uz1ixwl", form.current, "user_Xp4pYLGsMh94eExog19XF").then(
            (result) => {
                console.log(result.text);
                alert("Email Sent Sucessfully");
                window.location.reload();
            },
            (error) => {
                console.log(error.text);
                alert(error.text);
            }
        );
    };

    return (
        <div>
            <h1>Email Customer and Employee</h1>
            <div>
                {errorMessage && (
                    <div>
                        <p className="error-text bg-danger text-white ">
                            <ExclamationCircleOutlined />
                            {errorMessage}
                        </p>
                    </div>
                )}
            </div>
            <form
                style={{ border: "2px dotted #1a1a1a" }}
                className=" flex-row justify-center justify-space-between-md align-center  "
                ref={form}
                onSubmit={sendEmail}
            >
                <div className="col-12 col-lg-9">
                    <label>Subject </label>
                    <input className="form-input w-50" placeholder="Subject" type="text" name="subject" />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Customer Name</label>
                    <input className="form-input w-50" placeholder="Customer Name" type="text" name="customername" />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Customer Email</label>

                    <input
                        className="form-input w-50"
                        placeholder="Customer Email"
                        type="email"
                        name="email"
                        onBlur={handleChange}
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Delivery Person</label>
                    <input className="form-input w-50" placeholder="Delivery Person" type="text" name="deliveryperson" />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Delivery Person Email</label>
                    <input
                        className="form-input w-50"
                        placeholder="Delivery Person Email"
                        type="email"
                        name="email2"
                        onBlur={handleChange}
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Manager Email</label>
                    <input
                        className="form-input w-50"
                        placeholder="Manager Email"
                        type="email"
                        name="email3"
                        onBlur={handleChange}
                    />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Phone</label>
                    <input className="form-input w-50" placeholder="Phone" type="text" name="phone" />{" "}
                </div>

                <div className="col-12 col-lg-9">
                    <label>Items </label>
                    <textarea placeholder="Items for delivery" className="form-input w-50" name="items" />
                </div>
                <div className="col-12 col-lg-9">
                    <label>Site Address </label>
                    <textarea className="form-input w-50" placeholder="Site Address" name="siteaddress" />
                </div>

                <div className="col-12 col-lg-9">
                    <label>Code</label>

                    <textarea className="form-input w-50" ref={textAreaEl} name="code" />
                </div>
                <div className="col-12 col-lg-3">
                    <input style={styles.btnStyle} className="btn btn-info  py-3" type="submit" value="Send" />
                </div>
            </form>
            <button className="btn btn-info  py-3 " style={styles.btnStyle} onClick={randomNo}>
                Generate Code
            </button>
        </div>
    );
};
export default Email;
