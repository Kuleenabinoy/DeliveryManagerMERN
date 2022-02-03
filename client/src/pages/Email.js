import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
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
            <form ref={form} onSubmit={sendEmail}>
                <h1>Email Customer and Employee</h1>
                <br></br>
                <label>Subject</label>
                <input type="text" name="subject" />
                <br></br>
                <label>Customer Name</label>
                <input type="text" name="customername" />
                <br></br> <label>Customer Email</label>
                <input type="email" name="email" />
                <br />
                <label>Delivery Person</label>
                <input type="text" name="deliveryperson" />
                <br />
                <label>Delivery Person Email</label>
                <input type="email" name="email2" />
                <br />
                <label>Manager Email</label>
                <input type="email" name="manageremail" />
                <br></br> <label>Phone</label>
                <input type="text" name="phone" />
                <br></br> <label>code</label>
                {/* <input type="text" name="code" /> */}
                <textarea ref={textAreaEl} name="code" />
                <br></br> <label>Items </label>
                <textarea name="items" />
                <br />
                <label>Site Address </label>
                <textarea name="siteaddress" />
                <br />
                <br></br>
                <input style={styles.btnStyle} className="btn btn-info  py-3 " type="submit" value="Send" />
            </form>
            <div>
                <button className="btn btn-info  py-3 " style={styles.btnStyle} onClick={randomNo}>
                    Generate Code
                </button>
            </div>
        </div>
    );
};
export default Email;
