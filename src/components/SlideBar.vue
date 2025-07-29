<script setup>
import CircleMenue from "@/components/CircleMenue.vue";
import MenueAndItems from "@/components/MenueAndItems.vue";
import { Icon } from "@iconify/vue";
import { useWindowSize } from "@vueuse/core";
import { ref } from "vue";
const props = defineProps({
  slidOpen: Boolean,
  // selectedLabels: Object,
});
const currentOpenIndex = ref(null);
function handleMenuToggle(index) {
  currentOpenIndex.value = currentOpenIndex.value === index ? null : index;
}
const currentOpendChild = ref(null);
function handleOpendChild(index) {
  currentOpendChild.value = currentOpendChild.value === index ? null : index;
}

function handleSelection(payload) {
  emit("update:selectedLabels", payload);
}

const emit = defineEmits(["update:slidOpen", "update:selectedLabels"]);

const { width } = useWindowSize();
const dashboardOptions = [
  {
    label: "OverView",
    icon: `material-symbols:overview-key-outline-sharp`,
    children: [
      { label: "OverView", icon: "", to: "/overview" },
      { label: "Archived", icon: "", to: "/ecommerce" },
    ],
  },
  {
    label: "eCommerce",
    icon: `bi:shop-window`,
    children: [
      { label: "eCommerce", icon: "", to: "/ecommerce" },
      { label: "None", icon: "", to: "/ecommerce" },
    ],
  },
  {
    label: "Projects",
    icon: `grommet-icons:projects`,
    children: [
      { label: "Projects", icon: "", to: "/projects" },
      { label: "Archived", icon: "", to: "/projects" },
    ],
  },
  {
    label: "Cources",
    icon: `mage:book`,
    children: [{ label: "My Cources", icon: "", to: "/projects" }],
  },
];
const ProfileOptions = [
  {
    label: "User Profile",
    icon: `ix:user-profile`,
    children: [
      { label: "Overview", icon: "", to: "/projects" },
      { label: "Projects", icon: ``, to: "/projects" },
      { label: "Campaigns", icon: "", to: "/projects" },
      { label: "Documents", icon: "", to: "/projects" },
      { label: "Followers", icon: "", to: "/projects" },
    ],
  },
  {
    label: "Account",
    icon: `carbon:account`,
    children: [
      { label: "Edit Profile", icon: "", to: "/projects" },
      { label: "Passwords", icon: ``, to: "/projects" },
      { label: "Logout", icon: "", to: "/projects" },
    ],
  },
  {
    label: "Corporate",
    icon: `carbon:account`,
    children: [
      { label: "MyCorporates", icon: "", to: "/projects" },
      { label: "add new", icon: ``, to: "/projects" },
    ],
  },
  {
    label: "Blog",
    icon: `carbon:account`,
    children: [
      { label: "Add Blog", icon: "", to: "/projects" },
      { label: "Manage Blogs", icon: ``, to: "/projects" },
    ],
  },
  {
    label: "Social",
    icon: `carbon:account`,
    children: [
      { label: "Edit Socials", icon: "", to: "/eCommerce" },
      { label: "Settings", icon: ``, to: "/eCommerce" },
    ],
  },
];
</script>

<template>
  <div
    v-if="width < 640 && slidOpen"
    class="fixed inset-0 z-40 bg-black/40"
    @click.self="emit('update:slidOpen', false)"
  ></div>
  <div
    v-show="width >= 640 || slidOpen"
    class="transform transition-transform duration-300 z-50 fixed sm:static top-0 left-0 min-h-screen w-[240px] sm:w-[192px] p-4 bg-white dark:bg-[#2A2A2A] dark:text-slate-200 text-slate-900 border-r border-r-gray-400"
    :class="{
      'translate-x-0': width >= 640 || slidOpen,
      '-translate-x-full': width < 640 && !slidOpen,
    }"
  >
    <div class="flex my-2">
      <div class="md:ring-1 md:ring-slate-400 md:rounded-4xl items-center mr-1">
        <Icon icon="fluent-emoji-high-contrast:person" width="22" height="22" />
      </div>
      <span class="text-[16px]">Abubaker Sallam</span>
    </div>

    <div class="group inline-flex">
      <div
        class="flex group-hover:flex-col transition gap-2 delay-500 duration-1000 text-gray-400"
      >
        <span
          class="hover:rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-500"
          >Favorites</span
        >
        <span
          class="hover:rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 dark:text-slate-600 text-slate-300 transition-colors duration-500"
          >Recently</span
        >
      </div>
    </div>
    <CircleMenue />
    <CircleMenue>Projects.</CircleMenue>
    <MenueAndItems
      label="Dashboards"
      :options="dashboardOptions"
      :index="'dash'"
      :currentOpenIndex="currentOpenIndex"
      :selectedChild="currentOpendChild"
      @select="handleSelection"
      @toggle-open="handleMenuToggle"
      @update:slidOpen="emit('update:slidOpen', false)"
      @toggle-child="handleOpendChild"
    >
      Dashboards
    </MenueAndItems>

    <MenueAndItems
      label="Profile"
      :options="ProfileOptions"
      :index="'profile'"
      :currentOpenIndex="currentOpenIndex"
      :selectedChild="currentOpendChild"
      @select="handleSelection"
      @toggle-open="handleMenuToggle"
      @update:slidOpen="emit('update:slidOpen', false)"
      @toggle-child="handleOpendChild"
    >
      Profile
    </MenueAndItems>
  </div>
</template>
