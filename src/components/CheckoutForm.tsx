import { ActionFunction, Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatAsDollars, type Checkout } from "@/utils";
import { toast } from "@/components/ui/use-toast";
import { clearCart } from "../features/cart/cartSlice";
import { ReduxStore } from "@/store";

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;

    if (!name || !address) {
      toast({ description: "Please Fill Out All Fields." });
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please Login to Place an Order" });
      return redirect("/login");
    }
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatAsDollars(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast({ description: "Order Placed" });
      return redirect("/orders");
    } catch (error) {
      toast({ description: "Order Failed" });
      return null;
    }
  };

export default function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h1 className="mb-4 text-xl font-medium">Shipping Information</h1>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />

      <SubmitBtn className="mt-4" text="Place Your Order" />
    </Form>
  );
}
