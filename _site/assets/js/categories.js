const categories = { pans: [{ url: `/posts/dishes-digest-416/`, date: `15 Apr 2024`, title: `🔥 Dishes Digest Apr 16 🔥`},{ url: `/posts/dishes-digest-409/`, date: `09 Apr 2024`, title: `🔥 Dishes Digest Apr 9 🔥`},],shrek: [{ url: `/posts/dishes-digest-416/`, date: `15 Apr 2024`, title: `🔥 Dishes Digest Apr 16 🔥`},{ url: `/posts/dishes-digest-409/`, date: `09 Apr 2024`, title: `🔥 Dishes Digest Apr 9 🔥`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};