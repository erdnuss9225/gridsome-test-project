<template>
  <div class="layout">
    <header class="header">
        
        <g-link class ="headline_page" to="/"><h1>{{ $static.metadata.siteName }}</h1></g-link>
        
        <div class="languagepicker">
          <form>
            <label for="language-picker-select">Language:</label>
            <select  v-model="currentLocale" v-on:change="changeLocale">
              <option v-for="locale in locales" v-bind:value="locale.id">{{locale.name}}</option>
            </select>
          </form>
        </div>
        <p>{{this.$root.language}}</p>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
            currentLocale: this.$root.language,
            currentLocaleHelp: {
              de: ["Mehr lesen", "Weitere Artikel"],
              en: ["Read More", "Check out further Articles"]
            },
            locales: [ {id: 'en', name: 'English', more: 'Read more'}, {id: 'de', name: 'Deutsch', more: 'Mehr lesen'}]
    }
  },
  methods: {

    changeLocale () {

      this.$root.language = this.currentLocale

    }
  }
}
</script>