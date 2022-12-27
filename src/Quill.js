import React, { useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 600px; */
`;

const Quill = () => {
  const [contents, setContents] = useState("");

  const imageHandler = () => {
    console.log("image handle");

    // https://12ahn22.tistory.com/entry/Quill-%EC%97%90%EB%94%94%ED%84%B0-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0
  };

  useEffect(() => {
    console.log(typeof contents, "quill>>", contents);
  }, [contents]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, "link"],
          [
            {
              color: [
                "#000000",
                "#e60000",
                "#ff9900",
                "#ffff00",
                "#008a00",
                "#0066cc",
                "#9933ff",
                "#ffffff",
                "#facccc",
                "#ffebcc",
                "#ffffcc",
                "#cce8cc",
                "#cce0f5",
                "#ebd6ff",
                "#bbbbbb",
                "#f06666",
                "#ffc266",
                "#ffff66",
                "#66b966",
                "#66a3e0",
                "#c285ff",
                "#888888",
                "#a10000",
                "#b26b00",
                "#b2b200",
                "#006100",
                "#0047b2",
                "#6b24b2",
                "#444444",
                "#5c0000",
                "#663d00",
                "#666600",
                "#003700",
                "#002966",
                "#3d1466",
                "custom-color",
              ],
            },
            { background: [] },
          ],
          ["image", "video"],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    };
  }, []);

  return (
    <>
      <div>quill</div>
      <Container>
        <ReactQuill
          value={contents}
          onChange={setContents}
          placeholder="게시글을 작성해주세요."
          modules={modules}
        />
      </Container>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </>
  );
};

export default Quill;
