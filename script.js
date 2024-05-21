// every asyncronus function returns a Promise.
// promise is an object which explains event completion  



function fectchapi(){
  fetch("https://narutodb.xyz/api/tailed-beast?page=1&limit=11").then(function(respose){
    console.log(respose)
    return respose.json();
    
  }).then(function(data){
    console.log(data);
    return data.tailedBeasts;
  })
  .then(function(data1){
    console.log(data1);
    displayData(data1)
    return data1;})
   
    .catch(function(err){
    console.log(err);
  })
}

fectchapi();



function displayData(data){

  data.forEach(function(p){
    const product=document.createElement('div');
    product.classList.add('product')
    const title =document.createElement('h2');
    title.textContent=p.name

    const image = document.createElement('img')
    image.src=p.images[0]
    

    


    product.append(title,image)
    container.appendChild(product)
  });
}










