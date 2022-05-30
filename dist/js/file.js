const addFormToList = document.querySelectorAll(".js-addList-Btn")
const tableArea = document.querySelector(".js-familyArea")
const expArea = document.querySelector(".js-expArea")
const languageArea = document.querySelector(".js-language")
const officeArea = document.querySelector(".js-office")
const confirmDate = document.querySelector(".js-confirmDate")
const submitBtn = document.querySelectorAll(".js-submit")
addFormToList.forEach((item) => {
  item.addEventListener("click", addTemplate)
})
function addTemplate(e) {
  e.preventDefault()
  let addTr = e.target.getAttribute("data-area")
  console.log(addTr);
  if (addTr == "familyStatus") {
      const trAdd = tableArea.insertRow()
        let str = `
        <td>
            <select class="form-select form-select-sm" required>
              <option selected>Open this select menu</option>
              <option value="1">父</option>
              <option value="2">母</option>
              <option value="3">兄弟姊妹</option>
            </select>
        </td>
        <td>
            <input type="text" class="form-control form-control-sm">
        </td>
        <td>
            <select class="form-select form-select-sm" required>
              <option selected>Open this select menu</option>
              <option value="1">父</option>
              <option value="2">母</option>
              <option value="3">兄弟姊妹</option>
            </select>
        </td>
        <td>
            <input type="text" class="form-control form-control-sm">
        </td>
        `
      trAdd.innerHTML = str;
  }
  if (addTr == "experience") {
      const trAdd = expArea.insertRow()
        let str = `
        <td>
            <input type="text" class="form-control form-control-sm">
        </td>
        <td>
            <input type="text" class="form-control form-control-sm">
        </td>
        <td>
            <div class="input-group input-daterange">
              <input type="text" class="form-control form-control-sm" >
              <span class="input-group-text" style="height: 31px;">To</span>
              <input type="text" class="form-control form-control-sm">
            </div>
        </td>
        <td>
            <input type="text" class="form-control form-control-sm">
        </td>
        <td>
            <input type="text" class="form-control form-control-sm">
        </td>
        `
      trAdd.innerHTML = str;
  }
  if (addTr == "language") {
      const trAdd = languageArea.insertRow()
        let str = `
        <td>
          <input type="text" class="form-control form-control-sm">
        </td>
        <td>
          <select class="form-select form-select-sm" required>
            <option selected></option>
            <option value="1">流利</option>
            <option value="2">中等</option>
            <option value="3">略懂</option>
          </select>
        </td>
        <td>
          <select class="form-select form-select-sm" required>
            <option selected></option>
            <option value="1">流利</option>
            <option value="2">中等</option>
            <option value="3">略懂</option>
          </select>
        </td>
        <td>
          <select class="form-select form-select-sm" required>
            <option selected></option>
            <option value="1">流利</option>
            <option value="2">中等</option>
            <option value="3">略懂</option>
          </select>
        </td>
        <td>
          <select class="form-select form-select-sm" required>
            <option selected></option>
            <option value="1">流利</option>
            <option value="2">中等</option>
            <option value="3">略懂</option>
          </select>
        </td>
        `
      trAdd.innerHTML = str;
  }
  if (addTr == "office") {
      const trAdd = officeArea.insertRow()
        let str = `
        <td>
          <input type="text" class="form-control form-control-sm">
        </td>
        <td>
          <input type="text" class="form-control form-control-sm">
        </td>
        <td>
          <input type="text" class="form-control form-control-sm">
        </td>
        <td>
          <input type="text" class="form-control form-control-sm">
        </td>
        <td>
          <input type="text" class="form-control form-control-sm">
        </td>
        <td>
          <input type="text" class="form-control form-control-sm">
        </td>
        `
      trAdd.innerHTML = str;
  }
}

function init() {
  today()
  // completedForm()
}
init()

function today() {
  const Today = new Date();
  const year= Today.getFullYear()
  const month= Today.getMonth()+1
  const day= Today.getDate()
  confirmDate.innerHTML = `${year}年${month}月${day}日`
}
// submitBtn.forEach((item) => {
//   item.addEventListener("click", completedForm)
// })
function completedForm(e) {
  const menuStep = document.querySelectorAll(".js-check-Step")
  
  const complete = e.target.closest('[data-slide]').querySelectorAll("[required]")
  const currentMenu = e.target.closest('[data-slide]').getAttribute("data-slide")
  let current = e.target.getAttribute("class")
  if (current !== "submit-Btn js-submit") {
      return
  }
  complete.forEach((item) => {
    if (item.value !== "") {
      console.log("hi");
    }
    
  })
  menuStep.forEach((i) => { 
    if (currentMenu == i.innerText){
      // console.log(i.children[0].classList= "far fa-check-circle");
    }
  })
}

$(window).ready(() => {
	$('#myModal').modal('show');
	// setTimeout(() => $('#myModal').modal('show'), 1000);
	// setTimeout(() => $('#myModal').modal('hide'), 4000);
})