import { BorderType, DimensionType } from '@/types';

import {
  AiOutlineRadiusBottomright,
  AiOutlineRadiusBottomleft,
  AiOutlineRadiusUpleft,
  AiOutlineRadiusUpright
} from 'react-icons/ai';

export const TopLeftSection : BorderType = {
  label: "Top Left",
  id: "top-left",
  icon: AiOutlineRadiusUpleft,
  radiis: {
    horizontal: 0,
    vertical: 0
  }
}

export const TopRightSection : BorderType = {
  label: "Top Right",
  id: 'top-right',
  icon: AiOutlineRadiusUpright,
  radiis: {
    horizontal: 0,
    vertical: 0
  }
}

export const BotLeftSection : BorderType = {
  label: "Bottom Left",
  id: 'bot-left',
  icon: AiOutlineRadiusBottomleft,
  radiis: {
    horizontal: 0,
    vertical: 0
  }
}

export const BotRightSection : BorderType = {
  label: "Bottom Right",
  id: "bot-right",
  icon: AiOutlineRadiusBottomright,
  radiis: {
    horizontal: 0,
    vertical: 0
  }
}

export const borderTypes: BorderType[] = [
  TopLeftSection, TopRightSection, BotRightSection, BotLeftSection
]

export const dimensions: DimensionType[] = [
  {
    id: TopLeftSection.id,
    type: TopLeftSection
  },
  {
    id: TopRightSection.id,
    type: TopRightSection
  },
  {
    id: BotLeftSection.id,
    type: BotLeftSection
  },
  {
    id: BotRightSection.id,
    type: BotRightSection
  },
]
