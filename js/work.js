const fatchCategories = () =>{
  fetch('https://openapi.programming-hero.com/api/ai/tools')
  .then(res => res.json())
  .then(data => displayTools(data.data.tools));
};

const toolsContainer = document.getElementById('tools-container');
const displayTools = tools =>{
  console.log(tools);
  tools.forEach(tool =>{
    console.log(tool)
    const toolDiv = document.createElement('div');
    toolDiv.classList.add('col');
    toolDiv.innerHTML=`
    <div class="card>
      </div>
            <div class="card h-100">
             <img src="${tool.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">features</h5>
            <p class="card-text">1.Natural language processing</p>
             <p class="card-text">2.Contextual understanding</p>
            <p class="card-text">3.Text generation</p>
            <div>
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text">${tool.published_in}</p>
            <div class="d-flex align-items-center">
          <i class="fa-solid btn2 fa-arrow-right" onclick="showDetails()" data-bs-toggle="modal" data-bs-target="#detailsModal">
          </i>
          

            </div>
            
            </div>
            
        </div>
        </div>
    `;
    toolsContainer.appendChild(toolDiv);
  })

}

fatchCategories();



const showDetails = id =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  fetch(url).then(res => res.json()).then(data => allDetails(data))
}
 


  const allDetails = details =>{

  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML =`
            <div class="card mb-3>

             <div class="card h-100">
             <img src="('${tool.image}')" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${tool.name}</h5>
            <p class="card-text"></p>
            
            <div>
            


            </div>            
             </div>

  `;
  document.getElementById('modal-body').innerHTML = '';


}
















