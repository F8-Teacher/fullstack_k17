const ForbiddenException = require("../exceptions/forbidden.exception");
module.exports = {
  getUsers: () => {
    //Gọi model hoặc repository để thao tác với DB
    //return về giá trị sau khi đã xử lý hoặc throw Error
    const isError = true;
    if (!isError) {
      throw new ForbiddenException("Không có quyền");
    }
    const users = [
      {
        id: 1,
        name: "User 1",
      },
      {
        id: 2,
        name: "User 2",
      },
    ];
    return users;
  },
  getUser: (id) => {},
  createUser: (data) => {},
};

//1 controller --> gọi nhiều service
//1 service --> gọi nhiều model hoặc repository
//1 repository --> thường gọi 1 model
//Lưu ý: Không được trả về response trong service
