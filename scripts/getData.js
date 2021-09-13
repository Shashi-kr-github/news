async function getData(url) {
  let res = await fetch(url);
  let data = await res.json();
  // console.log("data:", data);
  return data;

  // for (var key in data) {
  //document.write(key + ":" + data[key] + "<br>");
  // let {catogery,price,rating} = data;
  // document.write(`${price}`)
  //  }
}

function append(data, place) {
  data.articles.forEach((el) => {
    let div = document.createElement("div");

    let p_name = document.createElement("h3");

    let p_price = document.createElement("p");
    let p_url = document.createElement("p");

    let img = document.createElement("img");

    img.src = el.urlToImage;

    p_name.innerText = el.content;

    p_price.innerText = el.title;
    p_url.innerText = el.url;

    div.append(img, p_name, p_price, p_url);

    place.append(div);
  });
}

export { getData, append };