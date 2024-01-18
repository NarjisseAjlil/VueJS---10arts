const URL_ARTS = "https://api.atontour.org/v3/sujets/arts/?key=VH5VA";

window.addEventListener("load", () => {
  const parseURL = new URL(window.location.href);
  console.table(parseURL);
  const id = parseURL.searchParams.get("id");
  if (id) {
    loadDataDetail(id);
  } else {
    console.error("ID non trouvé dans l'URL.");
  }
});

async function loadDataDetail(id) {
  let resp = await fetch(URL_ARTS);
  let data = await resp.json();
  data = data.records;
  let art = data.find((art) => art.id === id);

  if (art) {
 
    document.getElementById("infos").innerHTML = art.infos;
    document.getElementById("image").src = art.picto;
    document.getElementById("art").innerHTML = art.art;
    document.getElementById("complement").innerHTML = art.complement;
    

    art.story.forEach(element => {
      console.log(element);
      document.getElementById("story").innerHTML += `<p>${element}</p>`;
    });
  } 
};
