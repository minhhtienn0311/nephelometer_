// random post + toi thieu la 3 post => 23
const random_post_list = Math.floor(Math.random() * 20) + 3;

function renderPost(container, post) {
  // Create the outer div with the class 'blog-item'
  const blogItem = document.createElement("div");
  blogItem.className = "blog-item";

  // Create the inner div with the class 'blog-img'
  const blogImg = document.createElement("div");
  blogImg.className = "blog-img";

  // Create the img element and set its src and alt attributes
  const img = document.createElement("img");
  img.src = post.pic_url;
  img.alt = "";
  //   console.log(post.pic_url.regular);

  // Create the span element with the heart icon
  const spanHeart = document.createElement("span");
  const heartIcon = document.createElement("i");
  heartIcon.className = "far fa-heart";
  spanHeart.appendChild(heartIcon);

  // Append the img and span to the blogImg div
  blogImg.appendChild(img);
  blogImg.appendChild(spanHeart);

  // Create the blog-text div
  const blogText = document.createElement("div");
  blogText.className = "blog-text";

  // Create the span for the date
  const spanDate = document.createElement("span");
  spanDate.textContent = "20 January, 2020";

  // Create the h2 element for the title
  const h2 = document.createElement("h2");
  h2.textContent = post.title;

  // Create the paragraph element for the description
  const p = document.createElement("p");
  p.textContent = post.body;

  // Create the anchor tag for the 'Read More' link
  const anchor = document.createElement("a");
  //   anchor.href = "#";
  anchor.textContent = "Read More";
  anchor.addEventListener("click", function () {
    // luu lai du lieu vao local storage => chuyen trang
    localStorage.setItem("current_post", JSON.stringify(post));
    location.href = "./postDetail.html";
  });

  // Append the date span, h2, paragraph, and anchor to the blogText div
  blogText.appendChild(spanDate);
  blogText.appendChild(h2);
  blogText.appendChild(p);
  blogText.appendChild(anchor);

  // Append the blogImg and blogText to the blogItem div
  blogItem.appendChild(blogImg);
  blogItem.appendChild(blogText);

  // Finally, append the entire blogItem to the desired parent element in your DOM
  container.appendChild(blogItem); // Replace 'body' with the parent element you want
}

async function getRandomPosts(posts_size) {
  const posts_container = document.getElementById("post_list");

  for (let index = 0; index < posts_size; index++) {
    // get random picture
    const pic_url = await getRandomPicture().catch((err) => console.log(err));
    // random id post de lay trong list API
    const random_post_id = Math.floor(Math.random() * 99) + 1;
    await fetch("https://jsonplaceholder.typicode.com/posts/" + random_post_id)
      .then((response) => response.json())
      .then((post) => {
        // render ra giao dien
        renderPost(posts_container, {
          title: post.title,
          body: post.body,
          pic_url: pic_url.urls.regular,
        });
      })
      .catch((err) => console.log(err));
  }
}

async function getRandomPicture() {
  // random so tu 10 => 110
  //   const random_picture_id = Math.floor(Math.random() * 1000) + 10;
  // Your Unsplash API Access Key
  const accessKey = "hW7OUIYaeKFwJedYfW2siYrKDqt7KOp5AF58EUf8AH0";

  // Fetch a random nature picture from Unsplash
  return await fetch(
    `https://api.unsplash.com/photos/random?query=nature&client_id=${accessKey}`
  ).then((response) => response.json());
}

console.log(random_post_list);
getRandomPosts(random_post_list);
