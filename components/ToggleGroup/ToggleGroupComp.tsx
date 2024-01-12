import { AlignCenter, AlignLeft, AlignRight } from "@tamagui/lucide-icons";
import { Label, SizeTokens, ToggleGroup, XStack, XStackProps } from "tamagui";

type Props = {
  size: SizeTokens;
  type: "single" | "multiple";
  orientation: "vertical" | "horizontal";
  label?: string;
  align?: "center" | "start" | "end";
};
export default function ToggleGroupComponent({
  size,
  type,
  orientation,
  label = "Toggle",
  ...stackProps
}: Props & XStackProps) {
  const id = `switch-${size.toString().slice(1)}-${type}`;
  return (
    <XStack
      flexDirection={orientation === "horizontal" ? "row" : "column"}
      space="$4"
      {...stackProps}
    >
      <Label
        paddingRight="$0"
        justifyContent="flex-end"
        size={size}
        htmlFor={id}
      >
        {label}
      </Label>

      <ToggleGroup
        orientation={orientation}
        id={id}
        type={type}
        size={size}
        disableDeactivation={type === "single" ? true : undefined}
      >
        <ToggleGroup.Item value="left" aria-label="Left aligned">
          <AlignLeft />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="center" aria-label="Center aligned">
          <AlignCenter />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="right" aria-label="Right aligned">
          <AlignRight />
        </ToggleGroup.Item>
      </ToggleGroup>
    </XStack>
  );
}
