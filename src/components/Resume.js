import React from "react";
import res from "./images/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Tooltip, IconButton } from "@material-ui/core";
import { GetApp } from "@material-ui/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  return (
    <Box
      mt="4rem"
      mx="auto"
      maxWidth="1280px"
      width="90%"
      style={{ padding: "30px 0px 0px 18vw" }}
    >
      <Tooltip title="Download PDF">
        <IconButton size="medium" color="primary" href={res}>
          <GetApp fontSize="large"></GetApp>
        </IconButton>
      </Tooltip>
      <Document
        file={res}
        onLoadError={console.error}
        style={{ width: "100vw", height: "auto" }}
      >
        <Page pageNumber={1} />
      </Document>
    </Box>
  );
}

export default Resume;
