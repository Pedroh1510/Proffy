import { eraseLogin } from "./../services/storage";
import { useNavigation } from "@react-navigation/native";
import { DropDownObj } from "./../components/Dropdown/index";

export function getDropdownInicialValue(
  text: string | number | undefined,
  constant: DropDownObj[]
): number | null {
  console.log({ text, constant });

  if (text === undefined) return null;

  if (typeof text === "number") {
    const result = constant.find((element) => {
      return element.value === text;
    });
    if (result === undefined) return null;
    return result.value;
  } else {
    const result = constant.find((element) => {
      return element.label === text;
    });

    if (result === undefined) return null;

    return result.value;
  }
}
