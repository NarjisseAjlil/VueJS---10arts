export default {
    props: {
      image: String,
      art: String,
      complement: String,
      infos: String,
      picto: String,

    },
    template: `
      <div>
           <img class="art-image" :src="image" alt="Art Image">
           <h2 class="art-complement">{{ complement }}</h2>
           <h3 class="art">{{ art }}</h3>
      </div>     
           `,
  };