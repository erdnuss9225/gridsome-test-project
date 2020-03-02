<template>
  
  <Layout>   
    
    <div class="article">
      <h2 class=".article__headline">{{articleArray[0].headline}}</h2>
      <p class="article__abstract">{{articleArray[0].abstract}}</p>
      <img class="article__headerImage" :src="articleArray[0].header_image" alt="Header Image">
      <p class="article__text">{{articleArray[0].text}}</p>
      <a class="link" href="/">{{currentLocaleHelp[currentLocale][1]}}</a>
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
          header_image
          abstract
          slug
          text
        }
        en {
          headline
          header_image
          abstract
          slug
          text
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
      articleArray: [],
      currentLocale:"",
      currentLocaleHelp: {
        de: ["Mehr lesen", "Weitere Artikel"],
        en: ["Read More", "Check out further Articles"]
      },
      locales: [ {id: 'en', name: 'English', more: 'Read more'}, {id: 'de', name: 'Deutsch', more: 'Mehr lesen'}]
    }
  },
  mounted() {
    this.currentLocale = this.$root.language
    
    const slug = this.$route.params.slug;
    const lang = this.$root.language;

      if (this.currentLocale == "de") {
        this.articleArray = this.$page.allSingleData.edges[0].node.de.filter( item => item.slug === slug);
      } else {
        this.articleArray = this.$page.allSingleData.edges[0].node.en.filter( item => item.slug === slug);
      }
  },

  methods: {
    

    }
}
</script>