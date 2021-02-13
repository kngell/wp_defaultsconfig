import { get_visitors_data } from "corejs/visitors";
document.addEventListener("DOMContentLoaded", () => {
  let visitor = get_visitors_data().then((data) => {
    console.log(data);
  });
});
