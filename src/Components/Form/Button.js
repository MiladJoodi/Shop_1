import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  if (props.to) {
    return (
      <Link to={props.to} className={props.className}>
        {props.children}
      </Link>
    );
  } else if (props.href) {
    return (
      <a href={props.href} className={props.className}>
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        className={props.className}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
}
