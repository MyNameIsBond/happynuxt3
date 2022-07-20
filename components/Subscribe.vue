<template>
  <form
    class="bg-slate-50 my-10 p-6 rounded-2xl"
    v-on:submit.prevent="onSubmit()"
    method="POST"
  >
    <h5 class="font-medium">Subscribe</h5>
    <p class="text- text-slate-900 text-opacity-60 py-4">
      subscribe to the happy programmer newsletter win free courses and get to
      know what is coming next
    </p>
    <div class="flex flex-col">
      <div class="flex flex-row space-x-2">
        <input
          type="email"
          name="email"
          class="px-3 py-1 rounded-md"
          placeholder="subscribe"
          v-model="email"
        />
        <button
          type="submit"
          class="hover:shadow-md text-slate-50 py-1 font-medium px-4 rounded-md bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"
        >
          subscribe
        </button>
      </div>
      <p
        v-if="displayMessage"
        class="pt-4 text-sm"
        :class="success ? 'text-emerald-700' : 'text-pink-700'"
      >
        {{ alert }}
      </p>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      alert: '',
      success: Boolean,
      displayMessage: false,
    };
  },
  methods: {
    onSubmit() {
      const e = $fetch('/api/subscribe', {
        method: 'post',
        body: { email: this.email },
      }).then((res) => {
        if (res.error) {
          console.log('RES.ERROR', res.error);
          this.alert = res.message;
          this.success = false;
        } else {
          console.log('RES.MESSAGE', res.error);
          this.alert = res.message;
          this.success = true;
        }
      });
      this.displayMessage = true;
      this.email = '';
    },
  },
};
</script>

<style></style>
