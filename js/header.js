// js - header.js

export default {
  props: {
    url: String,
  },
  data() {
    return {
      header: [],
    };
  },

  async created() {
    const resp = await fetch(this.url);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    this.header = data.informations.meta;
  },

  template: `
  
    <div class="container header-infos">

      <img class="img icone" :src="header.icone" alt="Logo"> 

      <h1>{{ header.theme }}</h1>
    
    </div>

`,
};
