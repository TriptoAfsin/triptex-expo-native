import { Check as CheckIcon } from "@tamagui/lucide-icons";
import { Checkbox, CheckboxProps, Label, SizeTokens, XStack } from "tamagui";

type Props = { size: SizeTokens; label?: string };

export function CheckboxWithLabel({
  size,
  label = "Accept terms and conditions",
  ...checkboxProps
}: CheckboxProps & Props) {
  const id = `checkbox-${size.toString().slice(1)}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <Checkbox id={id} size={size} {...checkboxProps}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}
