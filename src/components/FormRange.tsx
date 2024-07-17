import { formatAsDollars } from "@/utils";
import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Slider } from "./ui/slider";

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};
export default function FormRange({
  name,
  label,
  defaultValue,
}: FormRangeProps) {
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="flex justify-between capitalize">
        {label || name}
        <span>{formatAsDollars(selectedPrice)}</span>
      </Label>
      <Slider
        id={name}
        name={name}
        step={step}
        value={[selectedPrice]}
        max={maxPrice}
        className="mt-4"
        onValueChange={(value) => setSelectedPrice(value[0])}
      />
    </div>
  );
}
