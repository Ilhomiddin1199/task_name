let tasks = [
    {
        title: "EuroPrint",
        desc:"ksslslsllsslls ssks",
        staff: "G'ani",
        startDate: '2023-16-01',
        finishDate: '2023-16-01',
        statusTask: "Pending",
        price: 22
      },
      {
        title: "Kun.uz",
        desc:"ksslslsllsslls ssks",
        staff: "Ali",
        startDate: '2023-16-01',
        finishDate: '2023-16-01',
        statusTask: "Doing",
        price: 22
      },
      {
        title: "Muloqot.uz",
        desc:"ksslslsllsslls ssks",
        staff: "Vali",
        startDate: '2023-16-01',
        finishDate: '2023-16-01',
        statusTask: "Done",
        price: 22
      },
      {
        title: "EuroPrint",
        desc:"ksslslsllsslls ssks",
        staff: "G'ani",
        startDate: '2023-16-01',
        finishDate: '2023-16-01',
        statusTask: "Pending",
        price: 22
      },

];
let title = document.forms["myForm"]["title"];
let myForm = document.forms["myForm"];
console.log(myForm);

let desc = document.forms["myForm"]["desc"];
let staff = document.forms["myForm"]["staff"];
let startDate = document.forms["myForm"]["startDate"];
let finishDate = document.forms["myForm"]["finishDate"];
let statusTask = document.forms["myForm"]["status"];
let price = document.forms["myForm"]["price"];

let addTaskBtn = document.querySelector(".addTask");
addTaskBtn.addEventListener("click", () => {
  let task = {
    title: title.value,
    desc: desc.value,
    staff: staff.value,
    startDate: startDate.value,
    finishDate: finishDate.value,
    statusTask: statusTask.value,
    price: price.value,
  };
  tasks.push(task);
  getTask();

});
getTask();
function getTask() {
let pending=document.querySelector('.pending')
let doing=document.querySelector('.doing')
let done=document.querySelector('.done')
let closed=document.querySelector('.closed')
let rejected=document.querySelector('.rejected')
pending.innerHTML=''
doing.innerHTML=''
done.innerHTML=''
closed.innerHTML=''
rejected.innerHTML=''
tasks.map((item,index)=>{
  if(item.statusTask==="Pending"){
    pending.innerHTML+=`
    <h3>${item.staff}</h3>
    <h4>${item.title}le</h4>
    <h4>Price ${item.price}$</h4>
    <p>${item.desc}</p>
    <p><b>Start Date: </b>${item.startDate}</p>
    <p><b>Finish Date: </b>${item.finishDate}</p>
        <select
      class="form-select mb-2 form-select-sm"
      name="status"
      aria-label=".form-select-sm example"
      id='mySelected${index}'
    >
      <option value=' ' >Select status</option>
      <option value="Doing">Doing</option>
      <option value="Done">Done</option>
    </select>
       <div class="d-flexflex-wrap justify-content-between align-items-center">
        <button class="btn btn-warning" onclick='editTask(${index})'>Edit status</button>
        <button class="btn btn-danger" onclick='deleteTask(${index})'>Delete</button>
       </div>
       <hr>
       `
  }
  else if(item.statusTask==="Doing"){
    console.log(item.statusTask)
    doing.innerHTML+=`
    <h3>${item.staff}</h3>
    <h4>${item.title}</h4>
    <h4>Price ${item.price}$</h4>
    <p>${item.desc}</p>
    <p><b>Start Date: </b>${item.startDate}</p>
    <p><b>Finish Date: </b>${item.finishDate}</p>
        <select
      class="form-select mb-2 form-select-sm"
      name="status"
      aria-label=".form-select-sm example"
      id='mySelected${index}'
    >
      <option selected>Select status</option>
      <option value="Pending">Pending</option>
      <option value="Done">Done</option>
    </select>
       <div class="d-flexflex-wrap justify-content-between align-items-center">
        <button class="btn btn-warning" onclick='editTask(${index})'>Edit status</button>
        <button class="btn btn-danger" onclick='deleteTask(${index})'>Delete</button>
       </div>
       <hr>
       `
  }
  
  else if(item.statusTask==='Done'){
    console.log(item.statusTask)
    done.innerHTML+=`
    <h3>${item.staff}</h3>
    <h4>${item.title}</h4>
    <h4>Price ${item.price}$</h4>
    <p>${item.desc}</p>
    <p><b>Start Date: </b>${item.startDate}</p>
    <p><b>Finish Date: </b>${item.finishDate}</p>
        <select
      class="form-select mb-2 form-select-sm"
      name="statusTask"
      aria-label=".form-select-sm example"
      id='mySelected${index}'
    >
      <option value=''>Select status</option>
      <option value="Closed">Closed</option>
      <option value="Doing">Doing</option>
    </select>
       <div class="d-flex flex-wrap justify-content-between align-items-center">
        <button class="btn btn-warning" onclick='editTask(${index})'>Edit status</button>
        <button class="btn btn-danger" onclick='deleteTask(${index})'>Delete</button>
        <button class="btn btn-secondary mt-sm-2" onclick='rejectTask(${index})'>Rejected</button>

       </div>
       <hr>
       `
  }
  else if(item.statusTask==='Closed'){
    console.log(item.statusTask)
    closed.innerHTML+=`
    <h3>${item.staff}</h3>
    <h4>${item.title}</h4>
    <h4>Price ${item.price}$</h4>
    <p>${item.desc}</p>
    <p><b>Start Date: </b>${item.startDate}</p>
    <p><b>Finish Date: </b>${item.finishDate}</p>
       
       <hr>
       `
  }
  else if(item.statusTask==='Rejected'){
    console.log(item.statusTask)
    rejected.innerHTML+=`
    <h3>${item.staff}</h3>
    <h4>${item.title}</h4>
    <h4>Price ${item.price}$</h4>
    <p>${item.desc}</p>
    <p><b>Start Date: </b>${item.startDate}</p>
    <p><b>Finish Date: </b>${item.finishDate}</p>
       
       <hr>
       `
  }
})
}
function deleteTask(index){
  console.log(index)
  tasks.splice(index,1)
  getTask()
}
function rejectTask(index){
tasks[index].statusTask="Rejected"
getTask()
}
function editTask(index){
  let mySelected=document.getElementById(`mySelected${index}`)
  console.log(mySelected.value)
  tasks[index].statusTask=mySelected.value
  getTask()
}
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

