<template>
  <Layout>
   <div v-if="$root.language == 'de' " class="teaser" v-for="articleItem in $page.allSingleData.edges[0].node.de">
      <img :src="articleItem.teaser_image" alt="teaser Image">
      <div class="teaser__text">
        <h3>{{articleItem.headline}}</h3>
        <p>{{articleItem.abstract}}</p>
        <button class="button__link" v-on:click="$router.push({ path: articleItem.slug })">Mehr lesen</button>
      </div>
    </div>

  <div v-if="$root.language == 'en' " class="teaser" v-for="articleItem in $page.allSingleData.edges[0].node.en">
    <img :src="articleItem.teaser_image" alt="teaser Image">
    <div class="teaser__text">
      <h3>{{articleItem.headline}}</h3>
      <p>{{articleItem.abstract}}</p>
      <button class="button__link" v-on:click="$router.push({ path: articleItem.slug })">Read more</button>
    </div>
  </div>


  </Layout>
</template>

<page-query>
query { 
	allSingleData {
    edges {	
      node {
        de {
          headline
          teaser_image
          abstract
          slug
        }
        en {
          headline
          teaser_image
          abstract
          slug
        }
      }
    }
  }
}
</page-query>



<script>
export default {

  data() {
        return {
            currentLocale: "",
            currentLocaleHelp: {
              de: ["Mehr lesen", "Weitere Artikel"],
              en: ["Read More", "Check out further Articles"]
            },
            locales: [ {id: 'en', name: 'English', more: 'Read more'}, {id: 'de', name: 'Deutsch', more: 'Mehr lesen'}]
        }
    },
 

}
</script>
