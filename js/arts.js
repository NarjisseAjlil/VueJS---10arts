// js - arts.js

import Arts from "./dixArts.js";

export default {
  components: {
    Arts,
  },
  props: {
    url: String,
  },
  data() {
    return {
      art: [],
    };
  },

  async created() {
    const resp = await fetch(this.url);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    this.art = data.records;
  },

  template: `
    
 

    <main class="arts-grid">

       <article class="arts-card" v-for="art in art" >
             <Arts :art="art.art" :complement="art.complement" :image="art.picto" />
             <a :href=" 'detail.html?id=' + art.id ">
               <p class="details">Détails</p>
             </a>
    </article>

    
  </main> 


 
        
 




`,
};
