import React, { useRef } from "react";
import "./fileUpload.scss";

const FileUpload = ({ setFile, accept, children }) => {
  const ref = useRef(null);

  const onChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div onClick={() => ref.current?.click()}>
      <input
        type="file"
        accept={accept}
        className="fileUpload__input"
        ref={ref}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default FileUpload;
