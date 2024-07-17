import { formatAsDollars } from "@/utils";
import { useAppDispatch } from "@/hooks";
import { Button } from "./ui/button";
import { editItem, removeItem } from "@/features/cart/cartSlice";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";

export function FirstColumn({
  title,
  image,
}: {
  image: string;
  title: string;
}) {
  return (
    <img
      src={image}
      alt={title}
      className="object-cover w-24 h-24 rounded-lg sm:h-32 sm:w-32"
    />
  );
}
export function SecondColumn({
  title,
  company,
  productColor,
}: {
  company: string;
  title: string;
  productColor: string;
}) {
  return (
    <div className="sm:ml-4 md:ml-12 sm:w-48">
      <h3 className="font-medium capitalize">{title}</h3>
      <h3 className="mt-2 text-sm capitalize">{company}</h3>
      <p className="flex items-center mt-4 text-sm capitalize gap-x-2">
        color:{" "}
        <span
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: productColor,
          }}
        ></span>
      </p>
    </div>
  );
}
export function ThirdColumn({
  amount,
  cartID,
}: {
  amount: number;
  cartID: string;
}) {
  const dispatch = useAppDispatch();

  const removeItemFromCart = () => {
    dispatch(removeItem(cartID));
  };

  const setAmount = (value: number) => {
    dispatch(editItem({ cartID, amount: value }));
  };

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={setAmount}
        mode={Mode.CartItem}
      />
      <Button onClick={removeItemFromCart} variant="link" className="-ml-4">
        Remove
      </Button>
    </div>
  );
}
export function FourthColumn({ price }: { price: string }) {
  return <p className="font-medium sm:ml-auto">{formatAsDollars(price)}</p>;
}
