/*
const foo = async () => {
  const v = await p;
  console.log(v)
  return "toto"
}

const foo = () => {
  return p.then(v => {
    console.log(v)
    return "toto"
  })
}
*/
import { v4 as uuid } from "uuid";

export const fetchTasks = async () => {
  console.log("real fetchTasks");
  await delay(4000);
  const json = localStorage.getItem("todoz") || "[]";
  return JSON.parse(json);
};

export const addTask = async (label, tagLabels) => {
  await delay(3000);
  const object = { label, tagLabels, done: false, id: uuid() };

  // add to local storage
  const json = localStorage.getItem("todoz") || "[]";
  const tasks = JSON.parse(json);
  localStorage.setItem("todoz", JSON.stringify([...tasks, object]));

  return object;
};

export const removeTask = () => {
  throw new Error("NOT IMPLEMENTED");
};

export const updateTask = () => {
  throw new Error("NOT IMPLEMENTED");
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
