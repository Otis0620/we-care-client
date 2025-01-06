import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import SidebarNav from './SidebarNav.vue';
import { menuLinks } from '@/data/menuLinks';

describe('Component SidebarNav', () => {
  it('should render all menu group headers correctly', () => {
    const wrapper = mount(SidebarNav);

    const headers = wrapper.findAll('[data-testid="menu-group-header"]');

    const expectedHeaders = Object.values(menuLinks).map((group) => group.header);

    expect(headers.length).toBe(expectedHeaders.length);

    headers.forEach((headerWrapper, index) => {
      expect(headerWrapper.text()).toBe(expectedHeaders[index]);
    });
  });

  it('should render all menu items correctly', () => {
    const wrapper = mount(SidebarNav);

    const menuItems = wrapper.findAll('[data-testid="menu-link"]');

    const expectedMenuItems = Object.values(menuLinks).flatMap((group) => group.menu);

    expect(menuItems.length).toBe(expectedMenuItems.length);

    menuItems.forEach((menuItemWrapper, index) => {
      const menuItem = expectedMenuItems[index];
      const icon = menuItem.icon.inActive;
      const text = menuItem.text;

      expect(menuItemWrapper.find('img').attributes('src')).toBe(icon);
      expect(menuItemWrapper.text()).toBe(text);
    });
  });

  it('should change the image icon onclick of the menu link', async () => {
    const wrapper = mount(SidebarNav);
    const menuItems = wrapper.findAll('[data-testid="menu-link"]');

    const expectedMenuKey = Object.keys(menuLinks)[0];
    const expectedMenuItem = menuLinks['mainMenu'].menu[0];
    const firstMenuItem = menuItems[0];

    const imgElement = firstMenuItem.find('img');

    expect(imgElement.attributes('src')).toBe(expectedMenuItem.icon.inActive);

    await firstMenuItem.trigger('click');

    const activeLink = wrapper.vm.activeLink;

    expect(activeLink.menu).toBe(expectedMenuKey);
    expect(activeLink.index).toBe(0);

    expect(imgElement.attributes('src')).toBe(expectedMenuItem.icon.active);

    await firstMenuItem.trigger('click');

    expect(imgElement.attributes('src')).toBe(expectedMenuItem.icon.inActive);
  });

  it('should change the background color onclick of the menu link', async () => {
    const wrapper = mount(SidebarNav);
    const menuItems = wrapper.findAll('[data-testid="menu-link"]');

    const firstMenuItem = menuItems[0];

    const pTag = firstMenuItem.find('p');

    expect(pTag.classes()).toContain('text-secondary-400');

    await firstMenuItem.trigger('click');

    expect(pTag.classes()).toContain('text-primary-500');

    await firstMenuItem.trigger('click');

    expect(pTag.classes()).toContain('text-secondary-400');
  });
});
