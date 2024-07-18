import { useAppSelector } from "@/hooks";
import { CheckoutForm, SectionTitle, CartTotals } from "@/components";
import { LoaderFunction, redirect } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import { type ReduxStore } from "@/store";

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async (): Promise<Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: "Please Login to Continue" });
      return redirect("/login");
    }
    return null;
  };

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text="Your Cart is Empty" />;
  }
  return (
    <>
      <SectionTitle text="Place Your Order" />
      <div className="grid items-start gap-8 mt-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}
export default Checkout;
