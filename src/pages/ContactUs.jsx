import {Fragment, useEffect, useState} from "react";
import styles from './ContactUs.module.css'

const MIN_CHAR_LENGTH = 10;

const ContactUs = () => {
    const [formData, setFormData] = useState(null);
    const [messageText, setMessageText] = useState('');

    const handleSubmit = (eventObj) => {
        eventObj.preventDefault();
        const data = new FormData(eventObj.target);
        const formattedFormData = Object.fromEntries(data.entries());

        if (formattedFormData.email === '' || formattedFormData.message === '') {
            alert('The email and or message fields cannot be blank');
            return;
        }

        if (messageText.length < MIN_CHAR_LENGTH) {
            alert(`The message needs to be at least ${MIN_CHAR_LENGTH} characters long`);
            return;
        }

        setFormData(formattedFormData);
    }

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData]);

    if (formData) {
        return (
            <Fragment>
                <h1>Thank you for submitting this form</h1>
                <p>Your email: {formData.email}</p>
                <p>Your message: {formData.message}</p>
            </Fragment>
        );
    }
    else {
        return (
            <Fragment>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id="email" name="email" className={styles.email} placeholder="test@test.com"/>
                    </section>
                    <section>
                        <label htmlFor="message">Message</label>
                        <br />
                        <textarea name="message" id="message" className={styles.message} placeholder="What's on your mind" onChange={(e) => setMessageText(e.target.value)}/>
                        <div>{messageText.length} / {MIN_CHAR_LENGTH}</div>
                    </section>
                    <button type="submit" className={styles.button}>Submit</button>
                </form>
            </Fragment>
        );
    }
}

export default ContactUs;
