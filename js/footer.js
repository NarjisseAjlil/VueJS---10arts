// js - footer.js

export default {
  props: {
    url: String,
  },
  data() {
    return {
      footer: {
        sources: [],
      },
    };
  },

  async created() {
    const resp = await fetch(this.url);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    this.footer = data.informations.meta;
  },

  template: `
    <div class="container footer-infos">
      <p> 
         Mise à jour : 
      {{ footer.update }}
      </p>

      <ul> 
      <p> Sources </p> 
        <li v-for="source in footer.sources"  >
      
          <a :href="source">{{ source }}</a>
        </li>
      </ul>
    </div>
  `,
};
