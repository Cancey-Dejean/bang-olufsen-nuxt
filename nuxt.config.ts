export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon", "@nuxt/image"],
  css: ["@/assets/css/globals.css"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  image: {
    dir: "assets/images",
  },
});
