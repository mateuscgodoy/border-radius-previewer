import { IconType } from "react-icons";

export type Radiis = {
  horizontal: number,
  vertical: number
}

export type BorderType = {
  icon?: IconType | undefined,
  label: string,
  id: string,
  radiis: Radiis
}

export type DimensionType = {
  id: string,
  type: BorderType
}