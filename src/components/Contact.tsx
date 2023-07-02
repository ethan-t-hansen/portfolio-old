'use client'

import Image from "next/image";

export default function Contact() {

  function redirect(link: string) {
    if (link !== "") {
      window.open(link);
    }
  }

    const emailButton = document.getElementById("email");
    const popupMessage = document.getElementById("popupMessage");

    if (emailButton !== null && popupMessage != null) {
        emailButton.addEventListener("click", () => {
        const emailToCopy = "ethan.t.hansen@gmail.com";
        navigator.clipboard.writeText(emailToCopy)
        .then(() => {
        // Show popup message
        popupMessage.classList.remove("hidden-copy-msg");
        setTimeout(() => {
            // Hide popup message after 3 seconds
            popupMessage.classList.add("hidden-copy-msg");
        }, 2000);
        })
        .catch((error) => {
        console.error("Failed to copy email:", error);
        });
    });
    }



  return (
    <div className="contact-wrap">
      <div className="line-container">
        <h1 className="contact-title"> contact </h1>
        <div className="vl"></div>
        <div className="socials-container">
          <button className="social-button" onClick={() => redirect("https://www.instagram.com/ethanthansen/")}>
            <span className="social-icon">
              <Image src="/instagram.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethanthansen</span>
          </button>
          <button className="social-button" onClick={() => redirect("https://github.com/ethan-t-hansen/")}>
            <span className="social-icon">
              <Image src="/github.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethan-t-hansen</span>
          </button>
          <button className="social-button" id="email">
            <span className="social-icon">
              <Image src="/mail.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethan.t.hansen@gmail.com</span>
            <span id="popupMessage" className="hidden-copy-msg"> Copied! </span>
          </button>
          <button className="social-button" onClick={() => redirect("https://www.linkedin.com/in/ethanth/")}>
            <span className="social-icon">
              <Image src="/linkedin.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethanth</span>
          </button>
          <div className="ty-text"> Thanks for visiting! </div>
        </div>
      </div>
    </div>
  );
}
