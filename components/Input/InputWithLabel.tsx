import { Input, InputProps, Label, XStack, YStack } from "tamagui";
type Props = { label: string | number; inputId?: string };
export function InputWithLabel({
  label = "label",
  inputId = "name",
  ...inputProps
}: InputProps & Props) {
  return (
    <YStack padding="$3" minWidth={300} space="$4">
      <XStack alignItems="center" space="$4">
        <Label width={90} htmlFor={inputId}>
          {label}
        </Label>

        <Input flex={1} id={inputId} {...inputProps} />
      </XStack>
    </YStack>
  );
}
