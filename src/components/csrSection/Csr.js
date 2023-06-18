import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const CSR = () => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div style={{ padding: "3rem" }}>
      {/* <h3
        className="heading"
        style={{ textAlign: "left", paddingBottom: "40px" }}
      >
        CSR
      </h3> */}

      <Typography
        component="h2"
        variant="h4"
        sx={{ marginBottom: "30px", color: "#09c" }}
      >
        CSR{" "}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <img
          src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/csr-img.png"
          alt=""
          height={"300px"}
          width={"300px"}
        />
        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            wordSpacing: "2px",
            color: "#455a64",
            lineHeight: "1.5em",
          }}
        >
          <p className="less">
            Even though Simarjeet Kaur scored 449 out of 500, she was unsure of
            continuing her studies due to the poor financial condition of her
            family. "My dream is to become an IAS officer one day", said
            Simarjeet Kaur who hails from Budhlada, a small town in Punjab. We
            came across Simarjeet's story via an
            <a
              href="https://indianexpress.com/article/education/pseb-12-results-mansa-girl-scores-449-450-unsure-continuing-studies-6522812/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#337ab7", textDecoration: "underline" }}
            >
              Indian Express Article.
            </a>
            When we spoke to her, Simarjit was proud of her achievement, but
            also constrained that she would not be able to pursue her dream.
            Eduvanz decided to help the hardworking & ambitious girl at all
            costs the moment the story was published, in line with our motto of
            Fuelling the career growth of young India!
          </p>
          <br />
          <p
            className="more"
            style={isReadMore ? { display: "none" } : { display: "block" }}
          >
            With our leadership position as the only RBI licensed NBFC focussed
            on Education, we constituted a scholarship for Simarjeet and
            arranged for her fees, invested in a new laptop and a leading online
            IAS preparatory course. Indian express did a follow-up
            <a
              style={{ color: "#337ab7", textDecoration: "underline" }}
              href="https://indianexpress.com/article/education/unsure-of-continuing-studies-over-a-month-back-mansa-pseb-topper-gets-help-to-carry-on-6592766/"
              target="_blank"
              rel="noreferrer"
            >
              "Unsure of continuing studies over a month back, Mansa PSEB topper
              gets help to carry on".
            </a>
            Special thanks to Indian express for highlighting Simarjeet's story.
            Simarjeet, keep working hard towards your dreams, we are cheering
            you along the way.
          </p>
          <button
            onClick={toggleReadMore}
            style={{
              color: "red",
              border: "none",
              background: "none",
              fontSize: "16px",
              fontWeight: "500",
              float: "right",
              paddingRight: "10px",
            }}
          >
            {isReadMore ? "read more +" : "read less -"}
          </button>
        </div>
      </Stack>
    </div>
  );
};

export default CSR;
