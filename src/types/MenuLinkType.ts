interface MenuLink {
  header: string;
  menu: {
    icon: {
      inActive: string;
      active: string;
    };
    text: string;
  }[];
}

export type MenuLinkType = {
  mainMenu: MenuLink;
  otherMenu: MenuLink;
  helpAndSettings: MenuLink;
};
