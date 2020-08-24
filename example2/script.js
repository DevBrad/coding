const comments = [
  {
    id: Date.now(),
    email: "email1@gmail.com",
    msg: "ce faci2?",
  },
];

const btn = document.querySelector("#commentButton");
const commentInput = document.querySelector("#commentInput");
const coomentList = document.querySelector("#commentList");
btn.addEventListener("click", function () {
  const userId = Date.now();
  comments.push({
    id: userId,
    email: "email1@gmail.com",
    msg: commentInput.value,
  });
  var node = createCommentNode({
    id: userId,
    email: "email1@gmail.com",
    msg: commentInput.value,
  });
  document.body.appendChild(node);
});
displayComments(comments, document.body);

function createCommentNode(comment) {
  const containerBox = document.createElement("div");
  containerBox.id = "commentList";

  const userData = document.createElement("div");
  userData.id = "user";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete_button";
  deleteBtn.innerText = "Delete";

  deleteBtn.setAttribute("id", comment.id);
  console.log(comment.id);

  deleteBtn.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(event.target.getAttribute("id"));
    containerBox.remove();
  });

  const img = document.createElement("img");
  img.src = "user.png";
  const title = addTitle(comment.email);
  const p = addParagraph(comment.msg);

  containerBox.appendChild(userData);
  userData.appendChild(img);
  userData.appendChild(title);
  containerBox.appendChild(p);
  containerBox.appendChild(deleteBtn);

  return containerBox;
}
function addParagraph(text) {
  const newP = document.createElement("p");
  newP.innerText = text;
  return newP;
}

function addTitle(title) {
  const h1 = document.createElement("h1");
  h1.innerText = title;
  return h1;
}

function displayComments(comments, containerNode) {
  for (let idx = 0; idx < comments.length; idx++) {
    const comment = comments[idx];
    const commentNode = createCommentNode(comment);
    containerNode.appendChild(commentNode);
  }
}
