export default function loadHomePageInfo() {
  console.log("success!");
  const homePageContentContainer = document.createElement("div");
  homePageContentContainer.classList.add("flexbox");
  const homePageContent = document.createElement("p");
  homePageContent.textContent = "Welcome to Potat.";
  homePageContentContainer.appendChild(homePageContent);
  document.querySelector("#content").appendChild(homePageContentContainer);
}
