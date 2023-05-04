import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import Blog from "./Blog";

const BlogHeader = () => {
  return (
    <div>
      {/* <PDFDownloadLink document={<Blog />} fileName="FROM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink> */}
    </div>
  );
};

export default BlogHeader;
<h1>Download</h1>;
