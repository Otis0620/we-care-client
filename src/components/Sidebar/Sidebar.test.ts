import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Sidebar from './Sidebar.vue';
import SidebarLogo from './SidebarLogo.vue';
import SidebarNav from './SidebarNav.vue';

describe('Component Sidebar', () => {
  it('should render the Sidebar component with SidebarLogo and SidebarNav', () => {
    const wrapper = mount(Sidebar);

    expect(wrapper.findComponent(SidebarLogo).exists()).toBe(true);
    expect(wrapper.findComponent(SidebarNav).exists()).toBe(true);
  });
});
