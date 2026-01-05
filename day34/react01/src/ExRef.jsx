import { useEffect, useRef } from "react";
import "./assets/exref.css";
export default function ExRef() {
  const sidebarRef = useRef();
  const handleMouseMove = (e) => {
    let x = e.clientX;
    if (x < 150) {
      x = 150;
    }
    if (x > 300) {
      x = 300;
    }
    sidebarRef.current.style.width = `${x}px`;
  };
  const handleMousedown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.body.style.userSelect = "none";
  };
  const handleCloseSidebar = () => {
    sidebarRef.current.style.width = 0;
    sidebarRef.current.style.paddingInline = 0;
    sidebarRef.current.style.transition = `all .3s ease`;
  };
  useEffect(() => {
    const handeMouseup = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.userSelect = null;
    };
    document.addEventListener("mouseup", handeMouseup);

    return () => {
      if (sidebarRef.current) {
        document.removeEventListener("mouseup", handeMouseup);
      }
    };
  }, []);
  return (
    <main>
      <div className="sidebar" ref={sidebarRef}>
        <h3>Sidebar</h3>
        <div className="resize" onMouseDown={handleMousedown}></div>
        <button className="close-btn" onClick={handleCloseSidebar}>
          Thu gọn
        </button>
      </div>
      <div className="content">
        <h1>Content</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
          eaque at. Reprehenderit accusantium a assumenda? Dolore, harum
          voluptate quibusdam officiis laudantium magni. Atque mollitia repellat
          repudiandae et officiis! Consectetur, aliquam.
        </p>
      </div>
    </main>
  );
}
