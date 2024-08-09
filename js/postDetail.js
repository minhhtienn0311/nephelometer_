// Photo Credit
// https://unsplash.com/kimberlyrichards
const $ = document.querySelector.bind(document);

var comments = $(".comment-card");
var btnClose = $(".btn-close");
$(".comment-link").addEventListener("click", onCommentClick);
$(".btn-close").addEventListener("click", onCloseClick);

// TweenLite:  tu gsap (thu vien cua js giup hien thi comments)
function onCommentClick(event) {
  TweenLite.to(comments, 0.8, { top: "60px", ease: Power4.easeOut });
  TweenLite.to(btnClose, 0.8, { alpha: 1 });
}
function onCloseClick(event) {
  TweenLite.to(comments, 0.8, { top: "500px", ease: Power4.easeOut });
  TweenLite.to(btnClose, 0.8, { alpha: 0 });
}

// Load post detail ------------------------------------------------------
// lay thong tu local storage => neu khong co => blog
const post = JSON.parse(localStorage.getItem("current_post"));
if (!post) {
  window.location.href = "./blog.html";
} else {
  // render post
  $(".spring-fever").style.backgroundImage = `url(${post.pic_url})`;
  $("#post_title").innerText = post.title;
  $("#post_content").innerText = post.body;
}

// Random comments by PlaceHolder API ------------------------------------
// random so luong comments (1 -> 10 comments)
var random_comments_qty = Math.floor(Math.random() * 10);

// doi so luong comment trong giao dien
$(".comment-link").innerText = random_comments_qty;

async function getRandomComments(comments_size) {
  for (let index = 0; index < comments_size; index++) {
    // get random avatar
    const ava = await getRandomAvatar().catch((err) => console.log(err));
    // random id comment de lay trong list API
    const random_comment_id = Math.floor(Math.random() * 400) + 1;
    await fetch(
      "https://jsonplaceholder.typicode.com/comments/" + random_comment_id
    )
      .then((response) => response.json())
      .then((comment) => {
        // render ra giao dien
        renderComment(comment, ava.url);
      })
      .catch((err) => console.log(err));
  }
}

async function getRandomAvatar() {
  const random_id = Math.floor(Math.random() * 10) + 1200;
  return await fetch(
    "https://jsonplaceholder.typicode.com/photos/" + random_id
  ).then((response) => response.json());
}

function renderComment(comment, ava_url) {
  const commentsContainer = document.getElementById("comment_list");

  const comment_card = `<div class="comment-post">
          <div class="avatar">
            <img
              src="${ava_url}"
              alt="John Doe"
            />
          </div>
          <div class="comment">
            <h4>${comment.email}</h4> 
           ${comment.body}
          </div>
          <div style="clear: both"></div>
        </div>`;
  commentsContainer.innerHTML += comment_card;
}

getRandomComments(random_comments_qty);
