const categories = { pans: [{ url: `/posts/dishes-digest/`, date: `14 Apr 2024`, title: `🔥 Dishes Digest Apr 14 🔥`},{ url: `/posts/dishes-digest/`, date: `11 Apr 2024`, title: `🔥 Dishes Digest Apr 9 🔥`},],shrek: [{ url: `/posts/dishes-digest/`, date: `14 Apr 2024`, title: `🔥 Dishes Digest Apr 14 🔥`},{ url: `/posts/dishes-digest/`, date: `11 Apr 2024`, title: `🔥 Dishes Digest Apr 9 🔥`},], }

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