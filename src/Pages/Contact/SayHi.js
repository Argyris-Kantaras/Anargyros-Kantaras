import styles from "./SayHi.module.css";
import axios from "axios";
import logo from "../../icons/logo2.png";
import { useRef } from "react";
function SayHi() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const successMsgRef = useRef();
  const inputFieldsRef = useRef();

  const sendMail = function () {
    const options = {
      method: "POST",
      url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
        "X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      },
      data: `{"personalizations":[{"to":[{"email":"argyriskantas@gmail.com"}],"subject":${nameRef.current.value}}],"from":{"email":${emailRef.current.value}},"content":[{"type":"text/plain","value":${messageRef.current.value}}]}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    messageRef.current.style.display = "block";
    inputFieldsRef.current.style.display = "none";
  };

  return (
    <div className={styles.contact}>
      <header>
        <img className={styles.logo} src={logo} />
      </header>
      <div ref={inputFieldsRef} className={styles.inputFields}>
        <h1>Thanks you for reaching out to me. What can I do for you?</h1>
        <div className={styles.input}>
          <label>Name</label>
          <input ref={nameRef} type="text" />
        </div>
        <div className={styles.input}>
          <label>Email</label>
          <input ref={emailRef} type="email" />
        </div>
        <div className={styles.input}>
          <label>Message</label>
          <textarea ref={messageRef}></textarea>
        </div>
        <div
          onClick={() => {
            sendMail();
          }}
          className={styles.sendBtn}
        >
          Send
        </div>
      </div>
      <div ref={successMsgRef} className={styles.successMsg}>
        <h1>
          Thanks for your time! I will get back to you as soon as possible.
        </h1>
      </div>
    </div>
  );
}

export default SayHi;
