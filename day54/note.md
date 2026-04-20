# Route Handler

- Sử dụng các tính năng đặc biệt của Next: cookies, caching,...
- Cho phép build các endpoint API
- Giống 1 page, khác file `route.ts`

# Server Action

- Tự động các endpoint API với http method là POST
- Chỉ cần tạo 1 hàm có directive là "use server"

```typescript
//Inline Server action
const loginAction = async () => {
  "use server";
  //Logic
};
```

- Cách viết trên chỉ gọi được ở server
- Nếu muốn gọi ở client --> tách file action riêng --> Thêm "use server" ở đầu file

```ts
//File actions/auth.action.ts

"use server";

const loginAction = async () => {
  //Logic
};
```
