import { useNavigation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function SubmitBtn({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Button type="submit" disabled={isSubmitting} className={className}>
      {isSubmitting ? (
        <span className="flex">
          <ReloadIcon className="w-4 h-4 mr-2 animate-spin" />
          Submitting...
        </span>
      ) : (
        text
      )}
    </Button>
  );
}
