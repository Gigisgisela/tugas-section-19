<template>
  <div class="home">
    <v-card
    v-for="(message, index) in messages" :key="index"
    class="mx-auto my-10"
    max-width="80%"
    >
    
      <v-img
        height="500"
        :src="message.urlToImage"
      ></v-img>

      <v-card-title>{{ message.title }}</v-card-title>

      <v-card-text>
        <div class="mb-6 text-subtitle-1">
          {{ message.content }}
        </div>

        <div
        v-if="messages[index].author === null"
        class="my-1 text-subtitle-2">
          Author  : Anonymous
        </div>

        <div
        v-else
        class="my-1 text-subtitle-2">
          Author  : {{ message.author }}
        </div>

        <div>{{ message.publishedAt }}</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>
      <v-card-actions>
        <v-btn
          class="px-5"
          color="pink darken-4"
          dark large
          :href="message.url"
        >
          Baca Selengkapnya
          
        </v-btn>
      </v-card-actions>
    </v-card>


  </div>
</template>

<script>
export default {
  name: 'HomeView',
  
  computed: {
    messages() {
      return this.$store.state.newsList
    }
  }
}
</script>