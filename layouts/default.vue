<template>
  <v-app dark>
    <v-app-bar tile dark color="pink darken-4" elevation="2" >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h3 class="ml-4">News App</h3>
      <v-spacer></v-spacer>
      
      
    </v-app-bar>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
      <v-list-item class="my-2">
          <v-list-item-title>
            <h1>Category</h1>
          </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item> 
            <v-list-item-title @click="setCategory('bitcoin')">Bitcoin</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="setCategory('food')">Food</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title @click="setCategory('furniture')">Furniture</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data: () => ({
      drawer: false,
      group: null,
  }),
  watch: {
      group () {
        this.drawer = false
      },
  },
  mounted() {
    this.$store.dispatch("fetchNews")
  },
  methods: {
    setCategory(keyword) {
      this.$store.dispatch("fetchNews", keyword)
    }
  }
}
</script>