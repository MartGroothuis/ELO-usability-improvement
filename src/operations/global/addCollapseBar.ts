export default () => {
  // 1 == open 0 == closed
  let status = 1;
  const nav = document.querySelector("nav");

  const bar = document.createElement("div");
  bar.style.height = "20px";
  bar.style.width = "100%";
  bar.style.backgroundColor = "white";
  bar.style.color = "black";
  bar.style.textAlign = "center";
  bar.style.borderBottom = "1px solid black";
  bar.innerHTML = "^";

  bar.onclick = () => {
    status = status === 1 ? 0 : 1;

    if (nav == undefined || nav == null) {
      return;
    }

    nav.style.display = status === 1 ? "block" : "none";
    bar.innerHTML = status === 1 ? "^" : "v";
  };
  
  const header = document.querySelector("header");
  header?.appendChild(bar);
};
