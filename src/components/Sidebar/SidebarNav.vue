<script lang="ts">
import { ref, watch } from 'vue';
import { menuLinks } from '@/data/menuLinks';
import type { MenuLinkType } from '@/types';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const activeLink = ref<{ menu: string | null; index: number | null }>({
      menu: null,
      index: null,
    });

    const route = useRoute();

    const toggleMenuLink = (menuType: string, index: number) => {
      if (activeLink.value.menu === menuType && activeLink.value.index === index) {
        activeLink.value = { menu: null, index: null };
      } else {
        activeLink.value = { menu: menuType, index };
      }
    };

    watch(
      () => route.name,
      (newRouteName) => {
        Object.keys(menuLinks).forEach((group) => {
          const menuGroup = group as keyof MenuLinkType;

          const matchingMenuLink = menuLinks[menuGroup].menu.find(
            (menuItem) => menuItem.routeName === newRouteName,
          );

          if (matchingMenuLink) {
            activeLink.value = {
              menu: menuGroup,
              index: menuLinks[menuGroup].menu.indexOf(matchingMenuLink),
            };
          }
        });
      },
      { immediate: true },
    );

    return {
      menuLinks,
      activeLink,
      toggleMenuLink,
    };
  },
};
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col pt-4 w-full">
      <div v-for="(menuGroup, key) in menuLinks" :key="key" class="flex flex-col pt-8">
        <div data-testid="menu-group-wrapper" class="flex items-center pb-4 pl-10">
          <p class="text-[#a7a7a7] text-xs font-medium">{{ menuGroup.header }}</p>
        </div>
        <div
          v-for="(menuLink, index) in menuGroup.menu"
          :key="index"
          class="flex items-center py-3 cursor-pointer pl-10"
          :class="{ active: activeLink.menu === key && activeLink.index === index }"
          data-testid="menu-item-wrapper"
        >
          <router-link
            :to="menuLink.routeName"
            class="flex items-center"
            data-testid="router-link"
            @click="toggleMenuLink(key, index)"
          >
            <img
              :src="
                activeLink.menu === key && activeLink.index === index
                  ? menuLink.icon.active
                  : menuLink.icon.inActive
              "
              class="pr-2"
            />
            <p
              class="text-sm"
              :class="
                activeLink.menu === key && activeLink.index === index
                  ? 'text-primary-500'
                  : 'text-secondary-400'
              "
            >
              {{ menuLink.text }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  border-right-width: 4px;
  border-color: theme('colors.primary-500');
  background-color: #f1f6ee;
}
</style>
