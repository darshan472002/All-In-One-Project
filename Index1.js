let a;
let date;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("time").innerHTML = time + " <br>on " + date;
}, 1000);


src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js";
integrity =
  "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa";
crossorigin = "anonymous";

src =
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js";
integrity =
  "sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk";
crossorigin = "anonymous";

src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js";
integrity =
  "sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK";
crossorigin = "anonymous";
