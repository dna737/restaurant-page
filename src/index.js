import "./contactUsPage";
import loadHomePageInfo from "./homePage.js";
import "./contactUsPage";

const content = document.querySelector("#content");

const displayHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");
  header.classList.add("flexbox");
  //TODO: check if this is the right way to append multiple children to the header.
  appendTabButtons(header);
  content.appendChild(header);
};

const appendTabButtons = function (header) {
  console.log("hi there!");
  //home:
  const homeButton = document.createElement("div");
  homeButton.textContent = "HOME";
  homeButton.classList.add("tab-button");
  header.appendChild(homeButton);

  //menu:
  const menuButton = document.createElement("div");
  menuButton.textContent = "MENU";
  menuButton.classList.add("tab-button");
  header.appendChild(menuButton);

  //contact us:
  const contactUsButton = document.createElement("div");
  contactUsButton.textContent = "CONTACT US";
  contactUsButton.classList.add("tab-button");
  header.appendChild(contactUsButton);
};

const displayHomePage = function () {
  //TODO: implement the header here itself.
  console.log("calling?");
  loadHomePageInfo();
};

const displayMenuPage = function () {};

const displayContactUsPage = function () {};

const removeCurrentContent = function () {};

const initialLoadPage = (() => {
  displayHeader();
  displayHomePage();
  //TODO: add event listeners for the buttons/"tabs"
})();
