import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import { ProductsResponse } from "@/utils";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function ProductsContainer() {
  const { meta } = useLoaderData() as ProductsResponse;
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex items-center justify-between mt-8">
          <h4 className="font-medium text-md">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              size="icon"
              onClick={() => setLayout("grid")}
              variant={layout === "grid" ? "default" : "ghost"}
            >
              <LayoutGrid />
            </Button>
            <Button
              size="icon"
              onClick={() => setLayout("list")}
              variant={layout === "list" ? "default" : "ghost"}
            >
              <List />
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="mt-16 text-2xl">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}
