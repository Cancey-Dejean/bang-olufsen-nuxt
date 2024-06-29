export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon", "@nuxt/image"],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  image: {
    dir: "public/images",
  },
  css: ["~/assets/css/globals.css"],
});
