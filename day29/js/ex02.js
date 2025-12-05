const BASE_URL = "https://dummyjson.com";
const app = {
  _query: {
    order: "desc",
    limit: 10,
    page: 1,
  },
  _timeoutId: null,
  init() {
    this.getUsers();
    this.search();
    this.sort();
    this.paginate();
  },
  async getUsers() {
    try {
      //Add loading
      this.renderLoading();
      const skip = (this._query.page - 1) * this._query.limit;
      let url = `${BASE_URL}/posts?sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      if (this._query.q) {
        url = `${BASE_URL}/posts/search?q=${this._query.q}&sortBy=id&order=${this._query.order}&limit=${this._query.limit}&skip=${skip}`;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch /posts");
      }
      const data = await response.json();
      const pageNumber = Math.ceil(data.total / this._query.limit);
      this.renderPosts(data.posts);
      this.renderPaginate(pageNumber);
    } catch (error) {
      //Add error
      this.renderError(error.message);
    } finally {
      //Remove loading
      this.renderLoading(false);
    }
  },
  renderPaginate(pageNumber) {
    const paginateEl = document.querySelector(".js-paginate");
    paginateEl.innerHTML = "";
    for (let page = 1; page <= pageNumber; page++) {
      const active = this._query.page === page ? "bg-green-600" : "";
      paginateEl.innerHTML += `<button class="border border-gray-300 px-4 py-2 ${active}">${page}</button>`;
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
        this._query.page = 1;
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
  paginate() {
    const paginateEl = document.querySelector(".js-paginate");
    paginateEl.addEventListener("click", (e) => {
      const page = +e.target.innerText;
      this._query.page = page;
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      this.getUsers();
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

//Phân trang
// - Backend --> giới hạn (Mỗi trang 10 bản ghi)
// - BackEnd --> nhận params là page hoặc offset, skip

//1
//2
//3
//4
//5
//6
//7

//limit = 3, skip = 0 --> 1,2,3 --> page = 1
//limit = 3, skip = 3 --> 4,5,6 --> page = 2
//limit = 3, skip = 6 --> 7 --> page = 3

//Convert page -> skip
// skip = (page - 1) * limit

//Upload file
//Authentication, Authorization
