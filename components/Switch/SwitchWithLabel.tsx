import { Label, Separator, SizeTokens, Switch, XStack } from "tamagui";

export function SwitchWithLabel({
  defaultChecked,
  size,
  label = "Switch Label",
}: {
  size: SizeTokens;
  defaultChecked?: boolean;
  label: string;
}) {
  const id = `switch-${size.toString().slice(1)}-${defaultChecked ?? ""}}`;
  return (
    <XStack width={200} alignItems="center" space="$4">
      <Label
        paddingRight="$0"
        minWidth={90}
        justifyContent="flex-end"
        size={size}
        htmlFor={id}
      >
        {label}
      </Label>
      <Separator minHeight={20} vertical />
      <Switch id={id} size={size} defaultChecked={defaultChecked}>
        <Switch.Thumb />
      </Switch>
    </XStack>
  );
}
