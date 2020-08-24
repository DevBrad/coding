const btn = document.querySelector("button"),
  email = document.getElementById("email"),
  dv = document.querySelector("div"),
  date = document.querySelector("#date"),
  txt = document.querySelector("textarea"),
  firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName");
const regex = /^[a-zA-Z\s]*$/;
const rgxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const resetBtn = document.querySelector(".reset-btn");

var i = 0;

document
  .querySelector(".submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

//Show comments
btn.onclick = function () {
  if (email.value && txt.value && firstName.value && lastName.value != "") {
    firstName.style.padding = "7px";
    lastName.style.padding = "7px";
    email.style.padding = "7px";
    date.style.padding = "7px";
    txt.style.padding = "7px";
    dv.innerHTML +=
      " <div id='comment-" +
      i +
      "'> <h4>" +
      "<img src='/commentBoxTema/io.jpg'></img>" +
      "Name : " +
      firstName.value +
      " " +
      lastName.value +
      " " +
      "email: " +
      email.value +
      "<h3>" +
      "Date: " +
      date.value +
      "</h3>" +
      "</h4>" +
      "<p>" +
      txt.value +
      "<div id='wrapperBtns'>" +
      "<button title='click to delete the comment' class='dltBtn' id='deleteBtn-" +
      i +
      "' onclick='deleteComment(" +
      i +
      ")'>Delete</button>" +
      "<button title='click to change the comment' class='changeBtn' id='delete-comment" +
      i +
      " 'onclick='delete_button()'>Delete comment</button>";
    +"</div >" + "</div >" + "</p>";
    i++;
  }
  if (!regex.test(firstName.value) && !regex.test(lastName.value)) {
    alert("Input invalid!");
    return;
  } else if (firstName.value === "") {
    alert("Please enter your First Name");
  } else if (lastName.value === "") {
    alert("Please enter your Last Name");
  } else if (email.value === "" || !rgxEmail.test(email.value)) {
    alert("Please enter your e-mail");
  } else if (date.value === "") {
    alert("Please select a date");
  } else if (txt.value === "") {
    alert("Please leave a comment");
  }
};

const deleteComment = (postId) => {
  console.log(postId);
  const commentToDelete = document.getElementById("comment-" + postId);
  console.log(commentToDelete);
  commentToDelete.remove();
};

resetBtn.onclick = function () {
  firstName.style.padding = "15px";
  lastName.style.padding = "15px";
  email.style.padding = "15px";
  date.style.padding = "15px";
  txt.style.padding = "15px";
};

//DELETE COMMENT
const delete_button = () => {
  const text = document.querySelector(txt.value);
  text.remove();
};
