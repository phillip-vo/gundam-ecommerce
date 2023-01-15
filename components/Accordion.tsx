import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { useMediaQuery } from "react-responsive";

type AccordionProps = {
  engTitle: string;
  jpnTitle: string;
  openSection: boolean;
  handleOpenSection: () => void;
};

export const Accordion = ({
  engTitle,
  jpnTitle,
  openSection,
  handleOpenSection,
}: AccordionProps) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 992px)" });
  return (
    <div
      className="d-flex justify-content-between align-items-center border-bottom mt-5"
      style={styles.sectionBorder}
    >
      <div className="d-flex justify-content-between align-items-center gap-3">
        <h2 style={styles.sectionTitle(isTabletOrMobile)}>{engTitle}</h2>
        <GoPrimitiveDot
          size={isTabletOrMobile ? "14px" : "28px"}
          style={styles.sectionDot}
        />
        <h2 style={styles.sectionTitle(isTabletOrMobile)}>{jpnTitle}</h2>
      </div>
      {openSection ? (
        <TiArrowSortedUp
          size={isTabletOrMobile ? "14px" : "28px"}
          style={styles.sectionIcon}
          onClick={() => handleOpenSection()}
        />
      ) : (
        <TiArrowSortedDown
          size={isTabletOrMobile ? "14px" : "28px"}
          style={styles.sectionIcon}
          onClick={() => handleOpenSection()}
        />
      )}
    </div>
  );
};

const styles = {
  sectionTitle: (isTabletOrMobile: boolean) => ({
    fontSize: isTabletOrMobile ? "1.25rem" : "2.25rem",
  }),
  sectionDot: {
    color: "#BABABA",
  },
  sectionBorder: {
    borderColor: "#BABABA",
  },
  sectionIcon: {
    cursor: "pointer",
  },
};
