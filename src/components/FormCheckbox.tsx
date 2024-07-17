import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type FormCheckboxProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

export default function FormCheckbox({
  name,
  label,
  defaultValue,
}: FormCheckboxProps) {
  const defaultChecked = defaultValue === "on" ? true : false;
  return (
    <div className="flex self-end justify-between mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}
