import React from "react";

export default function ToDoList() {
  const today = new Date();
  function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  }
  return <h1>To Do list for {formatDate(today)}</h1>;
}
