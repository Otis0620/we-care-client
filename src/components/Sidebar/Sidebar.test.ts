import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Sidebar from './Sidebar.vue';
import SidebarLogo from './SidebarLogo.vue';
import SidebarNav from './SidebarNav.vue';
import { RouteName, RoutePath } from '@/enums';
import { useRoute } from 'vue-router';

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
}));

describe('Component Sidebar', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    const mockUseRoute = vi.mocked(useRoute);

    mockUseRoute.mockReturnValue({
      path: RoutePath.Dashboard,
      query: { param: 'value' },
      params: { id: '123' },
      name: RouteName.Dashboard,
      matched: [],
      fullPath: RoutePath.Dashboard,
      hash: '',
      redirectedFrom: undefined,
      meta: {},
    });
  });

  it('should render the Sidebar component with SidebarLogo and SidebarNav', () => {
    const wrapper = mount(Sidebar, {
      global: {
        stubs: {
          'router-link': {
            template: '<a><slot /></a>',
          },
        },
      },
    });

    expect(wrapper.findComponent(SidebarLogo).exists()).toBe(true);
    expect(wrapper.findComponent(SidebarNav).exists()).toBe(true);
  });
});
