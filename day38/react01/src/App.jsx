import { useQuery } from "@tanstack/react-query";
import Posts from "./components/Posts";
import { todoCacheKey } from "./cache/todoCacheKey";
// import { useFetch } from "./hooks/useFetch";

const getTodos = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=5`,
  );
  return response.json();
};

export default function App() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: todoCacheKey.list,
    queryFn: getTodos,
    initialData: [], //Giá trị mặc định của data
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={refetch}>Refresh</button>
      {/* {data.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))} */}
      <Posts />
    </div>
  );
}

//state
// - data
// - loading
// - error
//useEffect

// -> Custom Hook

//Component
//Custom Hook --> Truyền fetcher

/*
useQuery({
  queryKey: [key1, key2],
  queryFn: fetcher
})

Nếu request trùng lặp -> dựa vào key để đọc dữ liệu từ cache

Lần đầu có request -> call api -> lưu cache
Lần sau gọi lại request đó -> đọc từ cache (Không có loading)
*/
