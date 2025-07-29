<template>
  <div
    class="flex-initial border-l border-l-gray-400 pl-2 min-h-screen hidden sm:block"
  >
    <div class="m-3 rounded-lg font-semibold">Notification</div>

    <Notification :cards="notifications" />
    <div class="m-3 rounded-lg font-semibold">Activities</div>
    <Notification :cards="activities" />
    <div class="m-3 rounded-lg font-semibold">Contacts</div>
    <Notification :cards="contacts" />
  </div>
</template>

<script setup>
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import Notification from "./Notification.vue";
const notifications = [
  {
    icon: "fluent-emoji-high-contrast:person",
    title:
      "  This Notification is the first Notification for you and will not send another This Notification is the first Notification for you and will not send another",
    subtitle: "Sent by system",
  },
  {
    icon: "uil:user",
    title: "New User Rigistered",
    subtitle: "1:32 pm",
  },
  {
    icon: "material-symbols:adb",
    title: "This Notification is the from ADB",
    subtitle: "2:30 am",
  },
  {
    icon: "mdi:wireless",
    title: "This Notification is the from ADB",
    subtitle: "Yesteday 2:30 am",
  },
];
const activities = [
  {
    image: person1,
    title: "Edited the details of Project X",
    subtitle: "email@gmail.com",
  },
  {
    image: person2,
    title: "Bay Ailin",
    subtitle: "1:32 Am",
  },
  {
    image: person3,
    title: "Modified A data in page X",
    subtitle: "last Thursday 2:30 Am",
  },
  {
    image: person4,
    title: "Deleted A data in page X",
    subtitle: "Aug 11",
  },
];
const contacts = [
  {
    image: new URL("../assets/contact1.png", import.meta.url).href,
    title: "Nasa Customer",
  },
  {
    image: new URL("../assets/contact2.png", import.meta.url).href,
    title: "Bay Ailin",
  },
  {
    image: new URL("../assets/contact3.png", import.meta.url).href,
    title: "Extra Salad",
  },
  {
    image: new URL("../assets/contact4.png", import.meta.url).href,
    title: "brother Being",
  },
  {
    image: new URL("../assets/contact5.png", import.meta.url).href,
    title: "Monako Ones",
  },
  {
    image: new URL("../assets/contact6.png", import.meta.url).href,
    title: "Lamin Yamal",
  },
];
</script>

<style lang="scss" scoped></style>
