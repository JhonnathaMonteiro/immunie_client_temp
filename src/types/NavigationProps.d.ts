interface MenuItemProps {
  groupTitle: string;
  pages: Array<{ href: string; title: string }>;
}

interface MenuGroupProps {
  item: MenuItemProps;
}

interface PagesProps {
  services?: {
    title: string;
    id: string;
    children: {
      subpages: MenuItemProps;
    }
  };
  productInfo?: {
    title: string;
    id: string;
    children: {
      subpages: MenuItemProps;
    }
  };
  company?: {
    title: string;
    id: string;
    children: {
      subpages: MenuItemProps;
    }
  };
  appPages?: {
    title: string;
    id: string;
    children: {
      subpages: MenuItemProps;
    }
  };
}