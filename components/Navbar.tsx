import Link from "next/link";
import React from "react";
import { Nav as NavBs, Navbar as NavbarBs, Container } from "react-bootstrap";
import { FaShoppingBag, FaUserCircle } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const styles = {
  logo: {
    color: "#BABABA",
    letterSpacing: "5px",
    height: "50px",
    backgroundImage: "url(/images/arrow-light.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  logoText: {
    color: "#616161",
    fontFamily: "Jura",
    marginLeft: "3rem",
  },
  navIcons: {
    color: "#616161",
    marginLeft: "1.5rem",
  },
  nav: (isTabletOrMobile: boolean) => ({
    display: isTabletOrMobile ? "none" : "flex",
    backgroundColor: "#EEEEEE",
  }),
};

function Navbar() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <NavbarBs
      expand="lg"
      variant="light"
      className="position-relative shadow-sm"
      style={{ backgroundColor: "#EEEEEE" }}
    >
      <Container>
        <NavbarBs.Brand
          href="/"
          as={Link}
          style={styles.logo}
          className="d-flex align-items-center w-25"
        >
          <span style={styles.logoText}>PERFECT GRADE</span>
        </NavbarBs.Brand>

        <NavBs className="ms-auto collapse">
          <NavBs.Link href="/explore" as={Link}>
            Explore
          </NavBs.Link>
          <NavBs.Link href="/collection" as={Link}>
            Collection
          </NavBs.Link>
          <NavBs.Link href="/community" as={Link}>
            Community
          </NavBs.Link>
          <NavBs.Link href="/news" as={Link}>
            News
          </NavBs.Link>
        </NavBs>

        <div
          className="d-flex justify-content-center align-items-center gap-3"
          style={styles.navIcons}
        >
          <FaUserCircle />
          <FaShoppingBag />
        </div>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
