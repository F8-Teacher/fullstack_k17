// import Button from "./components/Button";
// import { cookies } from "next/headers";
export default async function HomePage() {
  console.log("HomePage");

  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit iure
        aliquam repellendus, facilis ipsa ut. Sequi odit harum ratione nemo
        quisquam reiciendis dolor laborum ex, voluptates ducimus sit iure
        aliquam!
      </p>
      {/* <Button initCount={10} /> */}
    </div>
  );
}
