import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCarts } from "@/services/cart.service";
export default async function CartPage() {
  const { items, total } = await getCarts();

  return (
    <div>
      <h1 className="text-3xl mb-3">Cart</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(
            (item: {
              productId: string;
              name: string;
              price: number;
              total: number;
              quantity: number;
            }) => (
              <TableRow key={item.productId}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price.toLocaleString()}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{item.total.toLocaleString()}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
}
