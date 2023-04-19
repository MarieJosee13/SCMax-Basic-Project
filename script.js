function darkTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    document.querySelector(".theme-button").innerHTML = "Dark Theme";
  } else {
    body.classList.add("dark");
    document.querySelector(".theme-button").innerHTML = "Light Theme";
  }
}
let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", darkTheme);
