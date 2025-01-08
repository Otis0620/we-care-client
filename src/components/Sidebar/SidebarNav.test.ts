import type { Mock } from 'vitest';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SidebarNav from './SidebarNav.vue';
import { menuLinks } from '@/data';
import { useRoute } from 'vue-router';
import { RouteName, RoutePath } from '@/enums';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}));

describe('Component SidebarNav', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render all menu group headers correctly', () => {
    (useRoute as Mock).mockReturnValue({
      path: RoutePath.Dashboard,
      name: RouteName.Dashboard,
    });

    const wrapper = mount(SidebarNav, {
      global: {
        stubs: {
          'router-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    const headers = wrapper.findAll('[data-testid="menu-group-wrapper"]');
    const expectedHeaders = Object.values(menuLinks).map((group) => group.header);

    expect(headers.length).toBe(expectedHeaders.length);

    headers.forEach((headerWrapper, index) => {
      expect(headerWrapper.text()).toBe(expectedHeaders[index]);
    });
  });

  it('should render all menu items correctly with the first item (dashboard) active on page load', () => {
    (useRoute as Mock).mockReturnValue({
      path: RoutePath.Dashboard,
      name: RouteName.Dashboard,
    });

    const wrapper = mount(SidebarNav, {
      global: {
        stubs: {
          'router-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    const menuItems = wrapper.findAll('[data-testid="menu-item-wrapper"]');
    const expectedMenuItems = Object.values(menuLinks).flatMap((group) => group.menu);

    menuItems.forEach((menuItemWrapper, index) => {
      const menuItem = expectedMenuItems[index];
      const isActive = menuItem.routeName === RouteName.Dashboard;
      const expectedIcon = isActive ? menuItem.icon.active : menuItem.icon.inActive;
      const expectedColor = isActive ? 'text-primary-500' : 'text-secondary-400';

      expect(menuItemWrapper.find('img').attributes('src')).toBe(expectedIcon);
      expect(menuItemWrapper.find('p').classes()).toContain(expectedColor);
      expect(menuItemWrapper.text()).toContain(menuItem.text);
    });
  });

  it('should update the icon src when a menu item is clicked', async () => {
    (useRoute as Mock).mockReturnValue({
      path: RoutePath.Dashboard,
      name: RouteName.Dashboard,
    });

    const wrapper = mount(SidebarNav, {
      global: {
        stubs: {
          'router-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    const routerLink = wrapper.findAll('[data-testid="router-link"]')[1];

    const expectedMenuItem = menuLinks['mainMenu'].menu[1];

    expect(routerLink.find('img').attributes('src')).toBe(expectedMenuItem.icon.inActive);

    await routerLink.trigger('click');

    expect(routerLink.find('img').attributes('src')).toBe(expectedMenuItem.icon.active);
  });

  it('should update the menu item styling on click', async () => {
    (useRoute as Mock).mockReturnValue({
      path: RoutePath.Dashboard,
      name: RouteName.Dashboard,
    });

    const wrapper = mount(SidebarNav, {
      global: {
        stubs: {
          'router-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    const menuItems = wrapper.findAll('[data-testid="router-link"]');
    const secondMenuItem = menuItems[1];

    expect(secondMenuItem.find('p').classes()).toContain('text-secondary-400');

    await secondMenuItem.trigger('click');

    expect(secondMenuItem.find('p').classes()).toContain('text-primary-500');
  });
});
