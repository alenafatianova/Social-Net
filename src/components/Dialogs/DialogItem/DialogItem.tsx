import React from "react";
import style from "../../../styles/DialogItem.module.css";
import { NavLink } from "react-router-dom";

type namePropsType = {
    name: string
    id: number
  }

export const DialogItem = (props: namePropsType) => {
let path = "user/" + props.id;

  return (
    <div>
      <div className={style.user}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}
