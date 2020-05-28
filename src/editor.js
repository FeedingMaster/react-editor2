import React, { useState, useEffect } from "react";

export default function SelectContent({ onChange, type, value }) {
  const [values, setValues] = useState(value);
  let update = onChange;
  useEffect(() => {
    update(values);
  });

  switch (type) {
    case "image":
      // code block
      return (
        <>
          <div class="form-row">
            <label>Src</label>
            <input
              value={values.src}
              onChange={e => {
                setValues({ ...values, src: e.target.value });
              }}
              type="text"
              autoFocus
            />
          </div>
          <div class="form-row">
            <label>Alt</label>
            <input
              value={values.alt}
              onChange={e => {
                setValues({ ...values, alt: e.target.value });
              }}
              type="text"
            />
          </div>
        </>
      );
    case "text":
      // code block
      return (
        <>
          <div class="form-row">
            <label>Value</label>
            <input
              value={values.value}
              onChange={e => {
                setValues({ ...values, value: e.target.value });
              }}
              type="text"
              autoFocus
            />
          </div>
        </>
      );
    case "link":
      // code block
      return (
        <>
          <div class="form-row">
            <label>Link</label>
            <input
              value={values.link}
              onChange={e => {
                setValues({ ...values, link: e.target.value });
              }}
              type="text"
              autoFocus
            />
          </div>
          <div class="form-row">
            <label>Text</label>
            <input
              value={values.text}
              onChange={e => {
                setValues({ ...values, text: e.target.value });
              }}
              type="text"
            />
          </div>
        </>
      );
    default:
      return (
        <>
          <input
            value={values.value}
            onChange={e => {
              setValues(e.target.value);
            }}
            type="text"
          />
        </>
      );
  }
}
