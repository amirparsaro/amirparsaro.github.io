import {useEffect, useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import Alert from '@mui/material/Alert';
import Collapse from "@mui/material/Collapse";
import {createPortal} from "react-dom";
import {Fade} from "@mui/material";

export const EmailForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<boolean>(false);
    const [successAlert, setSuccessAlert] = useState<boolean>(false);
    const [errorAlert, setErrorAlert] = useState<boolean>(false);

    useEffect(() => {
        if (successAlert) {
            const timer = setTimeout(() => setSuccessAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [successAlert]);

    useEffect(() => {
        if (errorAlert) {
            const timer = setTimeout(() => setErrorAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [errorAlert]);


    const SuccessPortal = successAlert
        ? createPortal(
            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[999] w-[40%]">
                <div className="w-full block">
                    <Fade in={successAlert} timeout={500}>
                        <Alert
                            variant="filled"
                            severity="success"
                            onClose={() => setSuccessAlert(false)}
                        >
                            Your email has been sent successfully.
                        </Alert>
                    </Fade>
                </div>
            </div>,
            document.body
        )
        : null;

    const ErrorPortal = errorAlert
        ? createPortal(
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[999] w-[40%]">
                <div className="w-full block">
                    <Fade in={errorAlert} timeout={500}>
                        <Alert
                            variant="filled"
                            severity="error"
                            onClose={() => setErrorAlert(false)}
                        >
                            Your email could not be sent. Please try again later.
                        </Alert>
                    </Fade>
                </div>
            </div>,
            document.body
        )
        : null;


    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_ks9clum",
                "template_5wv1l1e",
                formRef.current,
                "ETUc8hUkDjZ8tOv1a"
            )
            .then(
                () => {
                    setStatus(true);
                    formRef.current?.reset();
                    setSuccessAlert(true);
                },
                (error: string) => {
                    console.error(error);
                    setStatus(false);
                    setErrorAlert(true);
                }
            );
    };

    return (
        <>
            {SuccessPortal}
            {ErrorPortal}
            <div className="z-[150] glass-div w-[40%] flex flex-col justify-center text-[#D7D7D7] gap-40 p-6">
                <form id="email-form" ref={formRef} onSubmit={sendEmail}>
                    <div className="flex flex-col gap-3">
                        <p className="text-2xl">Contact Form</p>
                        <div className="flex flex-col gap-1">
                            <p className="text-xl">Name</p>
                            <input type="text" name="user_name" required
                                   className="w-full h-[50px] text-lg p-3 rounded-lg bg-[#333333]"
                                   placeholder="Your name"></input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xl">Email</p>
                            <input type="email" name="user_email" required
                                   className="w-full h-[50px] text-lg p-3 rounded-lg bg-[#333333]"
                                   placeholder="Your Email Address"></input>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-xl">Message</p>
                            <textarea required name="message"
                                      className="w-full h-[150px] text-lg p-3 rounded-lg bg-[#333333]"
                                      placeholder="Type your message here..."></textarea>
                        </div>
                        <div className="flex justify-end w-full gap-3">
                            <button
                                type="reset"
                                className="w-[100px] flex items-center justify-center cursor-pointer p-4 text-lg bg-[#111111] rounded-xl hover:bg-[#1c1c1c] transition"
                            >
                                Clear
                            </button>
                            <button
                                type="submit"
                                className="w-[100px] flex items-center justify-center cursor-pointer p-4 text-lg bg-[#111111] rounded-xl hover:bg-[#1c1c1c] transition"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}