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

    const headers = wrapper.findAll('[data-testid="menu-group-header"]');
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

    const menuItems = wrapper.findAll('[data-testid="menu-link"]');
    const expectedMenuItems = Object.values(menuLinks).flatMap((group) => group.menu);

    menuItems.forEach((menuItemWrapper, index) => {
      const menuItem = expectedMenuItems[index];
      let icon = '';

      if (menuItem.routeName === RouteName.Dashboard) {
        icon = menuItem.icon.active;
      } else {
        icon = menuItem.icon.inActive;
      }

      const text = menuItem.text;

      expect(menuItemWrapper.find('img').attributes('src')).toBe(icon);
      expect(menuItemWrapper.text()).toContain(text);
    });
  });
});
