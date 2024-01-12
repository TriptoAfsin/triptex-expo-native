import { ReactComponentElement } from "react";
import { AlertDialog, Button, XStack, YStack } from "tamagui";
type Props = {
  triggerComponent?: ReactComponentElement<any>;
  title?: string | number;
  description?: string | number;
  showCancel?: boolean;
  showPositiveAction?: boolean;
  positiveActionComponent?: ReactComponentElement<any>;
  triggerFunction?: () => any;
};
export default function CustomDialog({
  triggerComponent = (
    <Button bg={"#259745"} color={"white"} mt={10}>
      Tap me
    </Button>
  ),
  title = "Accept",
  description = "By pressing yes, you accept our terms and conditions.",
  showCancel = true,
  positiveActionComponent = <Button theme="active">Accept</Button>,
  triggerFunction = () => null,
  showPositiveAction = true,
}: Props) {
  return (
    <AlertDialog native>
      <AlertDialog.Trigger asChild>{triggerComponent}</AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />

        <AlertDialog.Content
          bordered
          elevate
          key="content"
          animation={[
            "quick",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>{title}</AlertDialog.Title>

            <AlertDialog.Description>{description}</AlertDialog.Description>
            <XStack space="$3" justifyContent="flex-end">
              {showCancel && (
                <AlertDialog.Cancel>
                  <Button bg={"#e43e30"} color={"white"} bordered>
                    Cancel
                  </Button>
                </AlertDialog.Cancel>
              )}
              {showPositiveAction && (
                <AlertDialog.Action asChild onPress={() => triggerFunction()}>
                  {positiveActionComponent}
                </AlertDialog.Action>
              )}
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  );
}
