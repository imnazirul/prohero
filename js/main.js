const MilestoneData = JSON.parse(data).data;


function loadMilestone() {
    const milestone = document.querySelector(".milestones")

    milestone.innerHTML = `${MilestoneData.map(function(milestone) {
        return `<div class="milestone border-b" id =${milestone._id}>
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMilestone(this, ${milestone._id})"/></div>
          <div onclick="openMilestone(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone.modules.map(function(module) {
            return `<div class="module border-b">
            <p>${module.name}</p>
          </div>`
          }).join("")}
        </div>
      </div>`
    }).join("")}`

    
}

function openMilestone(mileElement, id) {
  const currentPanel = mileElement.parentNode.nextElementSibling;
  const activePanel = mileElement ;
  const shownPanel = document.querySelector(".show");
  const shownActive = document.querySelector(".active")

  if(shownActive && !activePanel.classList.contains("active")){
    shownActive.classList.remove("active")
  }
  activePanel.classList.toggle("active")

  if(!mileElement.classList.contains("show") && shownPanel){
    shownPanel.classList.remove("show")
  }
  currentPanel.classList.toggle("show")

  loadMilestoneText(id);
  
}

function loadMilestoneText(id) {
   const title = document.querySelector('.title');
   const details = document.querySelector('.details');
   const milestoneImage = document.querySelector('.milestoneImage')

   milestoneImage.style.opacity = "0"

   milestoneImage.src = MilestoneData[id].image;
   title.innerText = MilestoneData[id].name ;
   details.innerText = MilestoneData[id].description ;
}

const milestoneImage = document.querySelector('.milestoneImage')

milestoneImage.onload = function() {
  this.style.opacity = "1" ;
}

function markMilestone(checkbox, id) {
  const MilstoneList = document.querySelector(".milestones");
  const doneList = document.querySelector(".doneList");
  const item = document.getElementById(id);

  if(checkbox.checked) {
    MilstoneList.removeChild(item);
    doneList.appendChild(item)
  }else{
    MilstoneList.appendChild(item);
    doneList.removeChild(item);
  }
  

} 



loadMilestone();