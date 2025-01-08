import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SidebarLogo from './SidebarLogo.vue';

describe('SidebarLogo Component', () => {
  it('should render the first logo image correctly', () => {
    const wrapper = mount(SidebarLogo);
    const firstImage = wrapper.findAll('img')[0];

    expect(firstImage.attributes('src')).toBe('/src/assets/images/logos/logo-28x28.svg');
  });

  it('should render the second logo image correctly', () => {
    const wrapper = mount(SidebarLogo);
    const secondImage = wrapper.findAll('img')[1];

    expect(secondImage.attributes('src')).toBe('/src/assets/images/logos/we-care-logo-84x18.svg');
  });

  it('should render the text "Medical Admin Dashboard"', () => {
    const wrapper = mount(SidebarLogo);
    const text = wrapper.find('p');

    expect(text.text()).toBe('Medical Admin Dashboard');
  });
});
