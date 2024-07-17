import { Form, useLoaderData, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ProductsResponseWithParams } from "@/utils";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

export default function Filters() {
  const { meta, params } = useLoaderData() as ProductsResponseWithParams;
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="grid items-center px-8 py-4 border rounded-md gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* SEARCH */}
      <FormInput
        type="submit"
        label="search product"
        name="search"
        defaultValue={search}
      />

      {/* CATEGORIES */}
      <FormSelect
        defaultValue={category}
        label="select category"
        name="category"
        options={meta.categories}
      />

      {/* company */}
      <FormSelect
        defaultValue={company}
        label="select company"
        name="company"
        options={meta.companies}
      />

      {/* ORDER */}
      <FormSelect
        defaultValue={order}
        label="order by"
        name="order"
        options={["a-z", "z-a", "high", "low"]}
      />

      <FormRange label="price" name="price" defaultValue={price} />

      {/* SHIPPING */}
      <FormCheckbox
        label="free shipping"
        name="shipping"
        defaultValue={shipping}
      />
      <Button type="submit" size="sm" className="self-end mb-2">
        Search
      </Button>
      <Button
        type="button"
        asChild
        size="sm"
        variant="outline"
        className="self-end mb-2"
      >
        <Link to="/products">Reset</Link>
      </Button>
    </Form>
  );
}
