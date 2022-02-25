const parent = document.querySelector(".parent");
function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
function displayPost(posts) {
  // for (const post of posts) {
  //   console.log(post.title);

  // }
  const section = document.querySelector("section");

  posts.forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = ` 
    <h2> ${post.title}</h2>
    <p> ${post.body}</p>
    `;
    section.appendChild(div);
  });
}
loadPost();
