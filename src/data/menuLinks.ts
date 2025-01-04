import peopleGreenIcon from '@/assets/images/icons/people-green-18x18.svg';
import peopleIcon from '@/assets/images/icons/people-18x18.svg';
import categoryIcon from '@/assets/images/icons/category-18x18.svg';
import categoryGreenIcon from '@/assets/images/icons/category-green-18x18.svg';
import calendarIcon from '@/assets/images/icons/calendar-2-18x18.svg';
import calendarGreenIcon from '@/assets/images/icons/calendar-2-green-18x18.svg';
import flagIcon from '@/assets/images/icons/flag-18x18.svg';
import flagGreenIcon from '@/assets/images/icons/flag-green-18x18.svg';
import data2Icon from '@/assets/images/icons/data-2-18x18.svg';
import data2GreenIcon from '@/assets/images/icons/data-2-green-18x18.svg';
import dollarCircleIcon from '@/assets/images/icons/dollar-circle-18x18.svg';
import dollarCircleGreenIcon from '@/assets/images/icons/dollar-circle-green-18x18.svg';
import boxIcon from '@/assets/images/icons/box-18x18.svg';
import boxGreenIcon from '@/assets/images/icons/box-green-18x18.svg';
import infoCircleIcon from '@/assets/images/icons/info-circle-18x18.svg';
import infoCircleGreenIcon from '@/assets/images/icons/info-circle-green-18x18.svg';
import settingsIcon from '@/assets/images/icons/settings-18x18.svg';
import settingsGreenIcon from '@/assets/images/icons/settings-green-18x18.svg';
import type { MenuLinkType } from '@/types/MenuLinkType';

export const menuLinks: MenuLinkType = {
  mainMenu: {
    header: 'Main Menu',
    menu: [
      {
        icon: {
          inActive: categoryIcon,
          active: categoryGreenIcon,
        },
        text: 'Overview',
      },
      {
        icon: {
          inActive: peopleIcon,
          active: peopleGreenIcon,
        },
        text: 'Patients',
      },
      {
        icon: {
          inActive: calendarIcon,
          active: calendarGreenIcon,
        },
        text: 'Appointment',
      },
      {
        icon: {
          inActive: flagIcon,
          active: flagGreenIcon,
        },
        text: 'Report',
      },
    ],
  },
  otherMenu: {
    header: 'Other Menu',
    menu: [
      {
        icon: {
          inActive: data2Icon,
          active: data2GreenIcon,
        },
        text: 'Department',
      },
      {
        icon: {
          inActive: dollarCircleIcon,
          active: dollarCircleGreenIcon,
        },
        text: 'Payment',
      },
      {
        icon: {
          inActive: boxIcon,
          active: boxGreenIcon,
        },
        text: 'Product & Stock',
      },
    ],
  },
  helpAndSettings: {
    header: 'Help & Settings',
    menu: [
      {
        icon: {
          inActive: infoCircleIcon,
          active: infoCircleGreenIcon,
        },
        text: 'Help & Center',
      },
      {
        icon: {
          inActive: settingsIcon,
          active: settingsGreenIcon,
        },
        text: 'Settings',
      },
    ],
  },
};
