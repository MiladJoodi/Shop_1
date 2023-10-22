import React, { useEffect, useReducer } from "react";
import validator from "../../validators/validator";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

export default function Input(props) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { value, isValid } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
      isValid: true,
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );

  return <div>{element}</div>;
}
