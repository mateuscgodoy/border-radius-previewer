import { IconType } from "react-icons";
import {
  AiOutlineRadiusBottomright,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright
} from 'react-icons/ai';

export type BorderType = {
  icon?: IconType | undefined,
  label: string,
  id: string
}

export type BorderRadiis = {
  horizontal: number,
  vertical: number
}

export const TopLeftSection : BorderType = {
  label: "Top Left",
  id: "top-left",
  icon: AiOutlineRadiusUpleft
}

export const TopRightSection : BorderType = {
  label: "Top Right",
  id: 'top-right',
  icon: AiOutlineRadiusUpright
}

export const BotLeftSection : BorderType = {
  label: "Bottom Left",
  id: 'bot-left',
  icon: AiOutlineRadiusBottomleft
}

export const BotRightSection : BorderType = {
  label: "Bottom Right",
  id: "bot-right",
  icon: AiOutlineRadiusBottomright
}
