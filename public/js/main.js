const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");
const outputJockes = document.querySelector("#outputJocks");
const jockesBtn = document.querySelector("#get-jocks-btn");

async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Fauled to fetch posts");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Error fetching posts: ", error);
  }
}

// Submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");

  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("Faild to add post");
    }

    const newPosts = await res.json();

    const postEl = document.createElement("div");
    postEl.textContent = newPosts.title;
    output.appendChild(postEl);
    showPosts();

  } catch (error) {
    console.error("Error adding posts: ", error);
  }
}

async function getJockes(e) {
    e.preventDefault();
     
    try {
      const res = await fetch("https://api.chucknorris.io/jokes/random");
  
      const newJocke = await res.json();
  
      const jockeEl = document.createElement("div");
      jockeEl.textContent = newJocke.value;
      outputJockes.appendChild(jockeEl);
      
      showPosts();
    } catch (error) {
      console.error("Error adding jocke: ", error);
    }
  }

// Event listeners
button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
jockesBtn.addEventListener("click", getJockes);
