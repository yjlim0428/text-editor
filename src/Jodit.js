import React, { useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Jodit = () => {
  const [contents, setContents] = useState("");

  useEffect(() => {
    console.log(typeof contents, "jodit>>", contents);
  }, [contents]);

  return (
    <>
      <div>jodit</div>
      <Container>
        <JoditEditor
          value={contents}
          config={{ readonly: false, placeholder: "게시글을 작성해주세요." }}
          tabIndex={1}
          onChange={(newContent) => setContents(newContent)}
        />
      </Container>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </>
  );
};

export default Jodit;
