import { useNavigation } from "@react-navigation/native";

import { DropDownObj } from "./../components/Dropdown/index";
import { eraseLogin } from "./../services/storage";

export function getDropdownInicialValue(
  text: string | number | undefined,
  constant: DropDownObj[]
): number | null {
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

export function isValidEmail(email: string) {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regex.test(email);
}
