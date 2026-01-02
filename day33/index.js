// const tasks = [
//   {
//     id: 1,
//     title: "Task 1",
//   },
//   {
//     id: 2,
//     title: "Task 2",
//   },
//   {
//     id: 3,
//     title: "Task 3",
//   },
// ];

// const tasks2 = [
//   {
//     id: 1,
//     title: "Task 1",
//   },
//   {
//     id: 2,
//     title: "Task 2",
//   },
//   {
//     id: 3,
//     title: "Task 3",
//   },
// ];
// const handleClick = (e) => {
//   console.log("Clicked");
// };
// const handleRemove = (id, event) => {
//   console.log(id);
//   console.log(event);
// };
// //Component -> Thành phần
// //const a = () => {}
// //const b = a;
// //const c = b
// //c()
// const User = (props) => {
//   return (
//     <div>
//       <h2>User: {props.title}</h2>
//       {props.children}
//       <button onClick={props.onClick}>Click me</button>
//     </div>
//   );
// };
// const Something = ({ name, email }) => {
//   const handleClick = () => {
//     console.log("Click something component");
//   };
//   return (
//     <div>
//       <h1>Học React không khó</h1>
//       <p>{name}</p>
//       <p>{email}</p>
//       <User title="Fullstack K17" onClick={handleClick}>
//         <h2>Ok chưa?</h2>
//       </User>
//     </div>
//   );
// };
// const element = (
//   <div id="container">
//     <Something name="Hoàng An" email="hoangan.web@gmail.com" />
//     <h2>Xin chào</h2>
//     <button onClick={handleClick}>Click me</button>
//     {tasks.map((task) => (
//       <div key={task.id}>
//         <h3>{task.title}</h3>
//         <button
//           onClick={(e) => {
//             handleRemove(task.id, e);
//             //....
//           }}
//         >
//           Xóa
//         </button>
//       </div>
//     ))}
//   </div>
// );

//JSX -> Compiler ->  React element -> React dom -> HTML

//Component:
// - Class Component: Kế thừa từ React.Component -> Có sẵn state
// - Function Component: Không có state, lifecycle
//Từ React 16.8 -> Bổ sung React Hook: Hàm đặc biệt cho phép truy cập vào các api có sẵn của React: state, lifecycle, context,...
//Bắt đầu bằng từ use
//1. State
// const [tenState, hamCapnhatState] = React.useState(giatrikhoitao);
// - Muốn cập nhật state -> cập nhật thông qua hàm
// - Khi state thay đổi -> Component tự động kích hoạt re-render (Hàm component sẽ tự động gọi lại)
// - Hàm cập nhật state là 1 hàm bất đồng bộ
// - Khi component re-render -> State sẽ không bị reset
// const Counter = () => {
//   const [count, setCount] = React.useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//     console.log(count);
//     // setCount((prevCount) => {
//     //   return prevCount + 1;
//     // });
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button>-</button>
//       <button onClick={handleIncrement}>+</button>
//     </div>
//   );
// };
// const Input = () => {
//   const [value, setValue] = React.useState("");
//   // const [data, setData] = React.useState("");
//   const [items, setItems] = React.useState(["Item 1", "Item 2", "Item 3"]);
//   const [msg, setMsg] = React.useState("");

//   const handleChangeValue = (e) => {
//     setValue(e.target.value);
//   };
//   const handleClick = () => {
//     if (!value) {
//       setMsg("Vui lòng nhập");
//       return;
//     }
//     setMsg("");
//     // setItems([...items, value]);
//     setItems(items.concat(value));
//     setValue("");
//   };
//   const handleDelete = (_index) => {
//     setItems(items.filter((_, index) => index !== _index));
//   };

//   const [tab, setTab] = React.useState("tab-1");
//   const handleChangeTab = (tabName) => {
//     setTab(tabName);
//   };
//   return (
//     <div>
//       <input
//         placeholder="Nhập từ khóa..."
//         onChange={handleChangeValue}
//         value={value}
//       />
//       <button onClick={handleClick}>Submit</button>
//       {msg && <span style={{ color: "red" }}>{msg}</span>}
//       <h3>Danh sách</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item} <button onClick={() => handleDelete(index)}>&times;</button>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <div className="tabs">
//         <button
//           className={tab === "tab-1" ? "active" : ""}
//           onClick={() => handleChangeTab("tab-1")}
//         >
//           Tab 1
//         </button>
//         <button
//           className={tab === "tab-2" ? "active" : ""}
//           onClick={() => handleChangeTab("tab-2")}
//         >
//           Tab 2
//         </button>
//         <button
//           className={tab === "tab-3" ? "active" : ""}
//           onClick={() => handleChangeTab("tab-3")}
//         >
//           Tab 3
//         </button>
//         <div className={`tab-pane ${tab === "tab-1" ? "active" : ""}`}>
//           Tab Content 1
//         </div>
//         <div className={`tab-pane ${tab === "tab-2" ? "active" : ""}`}>
//           Tab Content 2
//         </div>
//         <div className={`tab-pane ${tab === "tab-3" ? "active" : ""}`}>
//           Tab Content 3
//         </div>
//       </div>
//     </div>
//   );
// };
// const element = (
//   <div>
//     <h1>State</h1>
//     {/* <Counter /> */}
//     <Input />
//   </div>
// );

//Vòng đời component
//1. Khởi tạo (Mounting): Quá trình component được gắn vào dom
// - Khởi tạo component, state, props
// - Render
//2. Cập nhật (Updating)
// - Thay đổi state, props
// - Re-render
//3. Loại bỏ (Unmounting)
// - Component bị loại bỏ khỏi DOM

//Sử dụng useEffect để bắt từng giai đoạn của vòng đời
//useEffect(callback, dependencies)
let a = 0;
const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
    if (a < 5) {
      a++;
    }
  };
  console.log("render");
  // React.useEffect(() => {
  //   console.log("effect");
  // }, []);
  // React.useEffect(() => {
  //   console.log("effect");
  // });
  // React.useEffect(() => {
  //   console.log("effect", a);
  // }, [a]);
  // React.useEffect(() => {
  //   console.log(`Effect: ${count}`);
  //   return () => {
  //     console.log(`Cleanup: ${count}`);
  //   };
  // }, [count]);
  const [show, setShow] = React.useState(true);
  return (
    <>
      {/* {console.log("UI Update")}
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button> */}
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </>
  );
};
const Content = () => {
  React.useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);
  return <h1>Content</h1>;
};
//Call api
// - make http request
// - cập nhật state
const TodoList = () => {
  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const getTodoList = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setTodoList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTodoList();
  }, []);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error: {error}</h3>;
  }
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
};
const element = (
  <div>
    <h1>Use Effect</h1>
    <TodoList />
  </div>
);

//ReactDOM
const root = document.querySelector("#root");
const container = ReactDOM.createRoot(root);
container.render(element);
