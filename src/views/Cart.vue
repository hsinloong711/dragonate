<template>
  <h2>{{ email }} {{ uid }}HEYTEST</h2>
</template>

<script>
import getUser from "../composables/getUser";

export default {
  setup() {
    const { email, uid } = getUser();

    return { email, uid };
  },
};
</script>

<style></style>
