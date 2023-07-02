'use client'

import Image from "next/image";

export default function Contact() {

  function redirect(link: string) {
    if (link !== "") {
      window.open(link);
    }
  }

  return (
    <div className="contact-wrap">
      <div className="line-container">
        <h1 className="contact-title"> contact </h1>
        <div className="vl"></div>
        <div className="socials-container">
          <button className="social-button" onClick={() => redirect("https://www.instagram.com/ethanthansen/")}>
            <span className="social-icon">
              <Image src="https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338780/instagram_ne8xfk.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethanthansen</span>
          </button>
          <button className="social-button" onClick={() => redirect("https://github.com/ethan-t-hansen/")}>
            <span className="social-icon">
              <Image src="https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338779/github_qdpehf.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethan-t-hansen</span>
          </button>
          <button className="social-button" onClick={() => redirect("https://www.linkedin.com/in/ethanth/")}>
            <span className="social-icon">
              <Image src="https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338781/linkedin_ri2bwz.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethanth</span>
          </button>
          <button className="social-button" onClick={() => navigator.clipboard.writeText("ethan.t.hansen@gmail.com")}>
            <span className="social-icon">
              <Image src="https://res.cloudinary.com/dggcsrnyf/image/upload/v1688338780/mail_yklimd.svg" width={30} height={30} alt="ig" />
            </span>
            <span className="social-text">/ethan.t.hansen@gmail.com</span>
          </button>
          <div className="ty-text"> Thanks for visiting! </div>
        </div>
      </div>
    </div>
  );
}
