const btn = document.querySelector("#btn");
const hero1 = document.querySelector('.hero-1');
const hero2 = document.querySelector('.hero-2');
const hero3 = document.querySelector('.hero-3');
const hero4 = document.querySelector('.hero-4');
const clips = document.querySelector('.clips');
const input = document.querySelector("#input");
const form = document.querySelector("#form");

function getFacts(URL){
  return new Promise((resolve, reject)=>{
      const xhr = new XMLHttpRequest();
      xhr.onload=(res)=>{
          let data = JSON.parse(res.target.response);
          resolve(data);
      }
      

      xhr.onerror=(err)=>{
          reject(err);
      }
      
      xhr.open('GET', URL);
          xhr.send();
  })
}

// let btn = document.querySelector('#btn');
btn.addEventListener('click', (ev)=>{
  getFacts(`https://api.giphy.com/v1/gifs/search?&q=${input.value}&limit=100&api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0`)
  .then((res)=>{
      let factList = document.querySelector('.results');
      console.log(res.data);
     if(res.data){
      console.log(res.data);
      res.data.forEach((element) => {
        const img = document.createElement("img");
        img.src = element.images.original.url;
        factList.appendChild(img).classList.add('img-style');
        img.parentElement.classList.add('img-background');
        hero1.style.display = 'none';
        hero2.style.display = 'none';
        hero3.style.display = 'none';
        hero4.style.display = 'none';
      });
     }
  })
  .catch(err =>{
      console.log(err);
  })
})
getFacts('https://api.giphy.com/v1/gifs/search?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0');


// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(input.value);
//   axios
//     .get(
//       `https://api.giphy.com/v1/gifs/search?&q=${input.value}&limit=100&api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0`
//     )
//     .then((res) => {
      // console.log(res.data.data);
      // res.data.data.forEach((element) => {
      //   const img = document.createElement("img");
      //   img.src = element.images.original.url;
      //   document.body.appendChild(img).classList.add('img-style');
      //   img.parentElement.classList.add('img-background');
      //   hero1.style.display = 'none';
      //   hero2.style.display = 'none';
      //   hero3.style.display = 'none';
      //   hero4.style.display = 'none';
      // });
//     });
// });

function load() {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0&limit=${27}&offset=${27}`
    )
    .then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((element) => {
        const img = document.createElement("img");
        img.src = element.images.original.url;
        clips.appendChild(img).classList.add('img-style');
        img.parentElement.classList.add('img-background');
      });
    });
}
load();

function fun() {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0&limit=${6}`
    )
    .then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((element, i) => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <div class="card-body">
            <img id="img-crousel1" src="${element.images.original.url}" alt="...">
          </div>
        `
        document.querySelector('.card-wrapper1').appendChild(div);
      });
    });
}
fun();

function fun1() {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0&limit=${6}&offset=${6}`
    )
    .then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((element, i) => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <div class="card-body">
            <img id="img-crousel1" src="${element.images.original.url}" alt="...">
          </div>
        `
        document.querySelector('.cardWrapper1').appendChild(div);
      });
    });
}
fun1();

function fun2() {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0&limit=${6}&offset=${12}`
    )
    .then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((element, i) => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <div class="card-body">
            <img id="img-crousel1" src="${element.images.original.url}" alt="...">
          </div>
        `
        document.querySelector('.cardWrapper2').appendChild(div);
      });
    });
}
fun2();

function fun3() {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0&limit=${3}&offset${18}`
    )
    .then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((element, i) => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <div class="card-body">
            <img id="img-crousel1" src="${element.images.original.url}" alt="...">
          </div>
        `
        document.querySelector('.card-wrap1').appendChild(div);
      });
    });
}
fun3();


function fun4() {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0&limit=${3}&offset=${21}`
    )
    .then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((element, i) => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <div class="card-body">
            <img id="img-crousel1" src="${element.images.original.url}" alt="...">
          </div>
        `
        document.querySelector('.card-wrap2').appendChild(div);
      });
    });
}
fun4();


function fun5() {
  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=wa2datuJNpYe2lcPObYFTc3S9kgeZ0v0&limit=${3}&offset=${24}`
    )
    .then((res) => {
      console.log(res.data.data);
      res.data.data.forEach((element, i) => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
          <div class="card-body">
            <img id="img-crousel1" src="${element.images.original.url}" alt="...">
          </div>
        `
        document.querySelector('.card-wrap3').appendChild(div);
      });
    });
}
fun5();




