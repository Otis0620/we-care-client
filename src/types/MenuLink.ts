import type { RouteName } from '@/enums';

interface MenuLink {
  header: string;
  menu: {
    icon: {
      inActive: string;
      active: string;
    };
    text: string;
    routeName: RouteName;
  }[];
}

export type MenuLinkType = {
  mainMenu: MenuLink;
  otherMenu: MenuLink;
  helpAndSettings: MenuLink;
};
