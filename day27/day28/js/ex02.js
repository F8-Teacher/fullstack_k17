const BASE_URL = "https://dummyjson.com";
const app = {
  _query: {
    order: "desc",
  },
  _timeoutId: null,
  init() {
    this.getUsers();
    this.search();
    this.sort();
  },
  async getUsers() {
    try {
      //Add loading
      this.renderLoading();
      let url = `${BASE_URL}/posts?sortBy=id&order=${this._query.order}`;
      if (this._query.q) {
        url = `${BASE_URL}/posts/search?q=${this._query.q}&sortBy=id&order=${this._query.order}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch /posts");
      }
      const data = await response.json();
      this.renderPosts(data.posts);
    } catch (error) {
      //Add error
      this.renderError(error.message);
    } finally {
      //Remove loading
      this.renderLoading(false);
    }
  },
  renderLoading(status = true) {
    const loadingEl = document.querySelector(".js-loading");
    loadingEl.innerHTML = status
      ? `<span class="block text-3xl text-center">Loading...</span>`
      : "";
  },
  renderError(message) {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.innerHTML = `<span class="block text-3xl text-center">${message}</span>`;
  },
  renderPosts(posts) {
    const postListEl = document.querySelector(".js-post-list");
    postListEl.innerHTML = posts
      .map(
        (post) => `<div class="my-3 border border-gray-300 p-5">
          <h2 class="text-2xl font-medium mb-3">
            ${this.sanitizeText(post.title)}
          </h2>
          <p>
            ${this.sanitizeText(post.body)}
          </p>
          <div class="flex justify-between mt-3">
            <button
              class="cursor-pointer border border-gray-300 py-2 px-5 hover:bg-green-600 rounded-full"
            >
              Xem chi tiết
            </button>
            <div class="flex gap-2">
              <span class="cursor-pointer">Sửa</span>
              <span class="text-red-600 cursor-pointer">Xóa</span>
            </div>
          </div>
        </div>`
      )
      .join("");
  },
  sanitizeText(text) {
    return text.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  },
  search() {
    const inputEl = document.querySelector(".js-search");
    inputEl.addEventListener("input", (e) => {
      if (this._timeoutId) {
        clearTimeout(this._timeoutId);
      }
      this._timeoutId = setTimeout(() => {
        const keyword = e.target.value;
        this._query.q = keyword;
        this.getUsers();
      }, 500);
    });
  },
  debounce(callback, timeout = 500) {
    let id;
    return (...args) => {
      //args --> mảng
      if (id) {
        clearTimeout(id);
      }
      id = setTimeout(() => {
        callback.apply(null, args);
      }, timeout);
    };
  },
  sort() {
    const btnList = document.querySelectorAll(".js-sort button");
    btnList.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sortValue = btn.dataset.sort;
        const btnActive = document.querySelector(".js-sort .btn-active");
        if (btnActive) {
          btnActive.classList.remove("btn-active");
        }
        btn.classList.add("btn-active");
        this._query.order = sortValue;
        this.getUsers();
      });
    });
  },
};

app.init();

//keyword -> call api -> render
//debounce -> Nhận vào 1 hàm và trả về 1 hàm
//a --> setTimeout -> id = 1
//clearTimeout(1)
//b --> setTimeout -> id = 2
//clearTimeout(2)
//c --> setTimeout -> id = 3

// const func1 = (a, b, c) => {
// }
// const dbFn = debounce(func1);
// dbFn(1,2,3) //a, b, c
//Closure
