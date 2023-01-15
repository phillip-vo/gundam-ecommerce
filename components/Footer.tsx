import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const styles = {
  logoText: {
    fontFamily: "Jura",
    letterSpacing: "20px",
  },
  footerLink: {
    textDecoration: "none",
    color: "#616161",
  },
  subTitleSpacing: {
    letterSpacing: "5px",
  },
  footerInput: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "1.25rem",
    width: "300px",
  },
  emailButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#212529",
  },
};

function Footer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="border-top">
        <Container
          className={`d-flex justify-content-between align-items-center pt-4 ${
            isTabletOrMobile && "flex-column gap-3"
          }`}
        >
          <h3 style={styles.logoText}>PERFECT GRADE</h3>
          <div className="d-flex gap-5">
            <Link href="/explore" style={styles.footerLink}>
              Explore
            </Link>
            <Link href="/collection" style={styles.footerLink}>
              Collection
            </Link>
            <Link href="/community" style={styles.footerLink}>
              Community
            </Link>
            <Link href="/news" style={styles.footerLink}>
              News
            </Link>
          </div>
        </Container>
      </div>
      <Container>
        <div
          className={`mt-5 d-flex justify-content-between ${
            isTabletOrMobile && "flex-column gap-3"
          }`}
        >
          <div
            className={`d-flex flex-column align-items-start gap-3 ${
              isTabletOrMobile && "align-items-center"
            }`}
          >
            <span className="fs-5" style={styles.subTitleSpacing}>
              FOLLOW
            </span>
            <div className="d-flex gap-3">
              <FaFacebookF size="28px" />
              <FaInstagram size="28px" />
              <FaTwitter size="28px" />
            </div>
          </div>
          <div
            className={`d-flex flex-column gap-3 ${isTabletOrMobile && "mt-5"}`}
          >
            <span className="fs-5" style={styles.subTitleSpacing}>
              NEWSLETTER
            </span>
            <div className="border-bottom">
              <input placeholder="Email Address" style={styles.footerInput} />
              <button style={styles.emailButton}>Subscribe Now</button>
            </div>
          </div>
        </div>
      </Container>
      <div style={{ backgroundColor: "#EEEEEE" }}>
        <Container className="d-flex justify-content-between mt-5 py-3">
          <span>All rights reserved 2022</span>
          <div className="d-flex gap-5">
            <span>Terms</span>
            <span>Privacy</span>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
