import React from "react";
import Swal from "sweetalert2";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5bff845b-642d-4472-a300-91483c9848b1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset(); //Reset form fields after submission
    }
  };

  return (
    <div className="contact-sec" id="contact">
      <div className="main-container">
        <h2 className="heading-sec">
          <span className="heading-sec-main">Contact</span>
          <span className="heading-sec-sub">
            Feel free to Contact me by submitting the form below and I will get
            back to you as <br /> soon as possible
          </span>
        </h2>

        <div className="contact-form-container">
          <form onSubmit={onSubmit} className="contact-form">
            <input type="hidden" name="form-name" />
            <div className="contact-form-field">
              <label htmlFor="name" className="contact-form-label">
                Name
              </label>
              <input
                required
                type="text"
                className="contact-form-input"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="email" className="contact-form-label">
                Email
              </label>
              <input
                required
                type="email"
                className="contact-form-input"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="contact-form-field">
              <label htmlFor="message" className="contact-form-label">
                Message
              </label>
              <textarea
                required
                rows={7}
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className="contact-form-input"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button type="submit" className="nav-btn contact-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
