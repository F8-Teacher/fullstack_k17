import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id, slug } = useParams();
  return (
    <div>
      ProductDetail: {id}, {slug}
    </div>
  );
}
