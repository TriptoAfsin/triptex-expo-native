import { AlarmCheck, Search } from "@tamagui/lucide-icons";
import { CheckboxWithLabel } from "components/Checkbox/CheckboxWithLabel";
import CustomDialog from "components/Dialog/CustomDialog";
import { InputWithLabel } from "components/Input/InputWithLabel";
import RadioGroupItemWithLabel from "components/RadioGroup/RadiogroupWithLabel";
import CustomSelect from "components/Select/CustomSelect";
import { SwitchWithLabel } from "components/Switch/SwitchWithLabel";
import { ToastDemo } from "components/Toast/CustomToast";
import ToggleGroupComponent from "components/ToggleGroup/ToggleGroupComp";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, useColorScheme } from "react-native";
import {
  Button,
  H1,
  H2,
  H3,
  H4,
  Input,
  RadioGroup,
  ScrollView,
  Text,
  TextArea,
  XStack,
  YStack,
} from "tamagui";

export default function App() {
  let colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === "dark" ? "#23272e" : "#ffff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      {/* <ToastViewport /> */}
      <ScrollView>
        <XStack>
          <YStack mx={30}>
            <Button bg={"#288dff"} color={"white"} mt={10}>
              <Text>Button</Text>
            </Button>
            <Button mt={10} variant="outlined" outlineColor="#22a7f2">
              <Text> Button</Text>
            </Button>
            <Button
              alignSelf="center"
              mt={10}
              icon={AlarmCheck}
              bg={"#fd5534"}
              color={"white"}
            >
              <Text color={"white"}>Icon Before</Text>
            </Button>
            <Button
              alignSelf="center"
              mt={10}
              iconAfter={Search}
              bg={"#6650fd"}
              color={"white"}
            >
              <Text color={"white"}>Icon After</Text>
            </Button>
            <CustomDialog
              description={"Dialog description goes here"}
              title={"Title"}
              triggerComponent={
                <Button bg={"#259745"} color={"white"} mt={10}>
                  <Text>Open Dialog</Text>
                </Button>
              }
              positiveActionComponent={
                <Button bg={"#037cd5"} color={"white"} bordered>
                  Tap me
                </Button>
              }
            />
          </YStack>
          <YStack mx={30}>
            <H1>H1</H1>
            <H2>H2</H2>
            <H3>H3</H3>
            <H4>H4</H4>
            <Text fontSize={16}>Text</Text>
            <Text fontWeight={"bold"} fontSize={16}>
              Bold Text
            </Text>
          </YStack>
        </XStack>
        <YStack mt={20}>
          <Input size="$4" borderWidth={1} placeholder="Input Element" />
          <TextArea
            size="$4"
            borderWidth={2}
            mt={10}
            placeholder="454 South Kafrul, Dhaka"
          />
          <InputWithLabel label={"Name"} />
          <CustomSelect />
          <CheckboxWithLabel size="$3" label="Accept Terms & Conditions" />
          <RadioGroup
            aria-labelledby="Select one item"
            defaultValue="3"
            name="form"
          >
            <YStack width={300} alignItems="center" space="$2">
              <RadioGroupItemWithLabel
                size="$3"
                value="2"
                label="Radio Group"
              />
            </YStack>
          </RadioGroup>
          <SwitchWithLabel size="$2" label="Hello" />
          <ToggleGroupComponent
            type="single"
            size="$3"
            orientation="horizontal"
            mt={10}
          />
          <ToastDemo />
        </YStack>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
