const addFormToList = document.querySelectorAll(".js-addList-Btn")
const tableArea = document.querySelector(".js-familyArea")
const expArea = document.querySelector(".js-expArea")
const languageArea = document.querySelector(".js-language")
const officeArea = document.querySelector(".js-office")
const recruitArea = document.querySelector(".js-recruitTable")
const stageArea = document.querySelector(".js-stageArea")
const confirmDate = document.querySelectorAll(".js-confirmDate")
const mDate = document.querySelector(".js-Date")
const submitBtn = document.querySelectorAll(".js-submit")
const data = [
  {
    "id": 1,
    "appellation": "父",
    "Profession":"工程師"
  },
  {
    "id": 2,
    "appellation": "母",
    "Profession":"家管"
  },
  {
    "id": 3,
    "appellation": "兄弟姊妹",
    "Profession":"空姐"
  }
]

data.forEach((item) => {
  console.log(item);
})
const template = () => {
  return `
  <td data-th="稱謂">
            <select class="form-select form-select-sm" required>
              <option selected>Open this select menu</option>
              <option value="1">父</option>
              <option value="2">母</option>
              <option value="3">兄弟姊妹</option>
            </select>
        </td>
        <td data-th="職業">
            <input type="text" class="form-control form-control-sm">
        </td>
        <td data-th="稱謂">
            <select class="form-select form-select-sm" required>
              <option selected>Open this select menu</option>
              <option value="1">父</option>
              <option value="2">母</option>
              <option value="3">兄弟姊妹</option>
            </select>
        </td>
        <td data-th="職業">
            <input type="text" class="form-control form-control-sm">
        </td>
  `
}

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
        <td data-th="稱謂">
            <select class="form-select form-select-sm" required>
              <option selected>Open this select menu</option>
              <option value="1">父</option>
              <option value="2">母</option>
              <option value="3">兄弟姊妹</option>
            </select>
        </td>
        <td data-th="職業">
            <input type="text" class="form-control form-control-sm">
        </td>
        <td data-th="稱謂">
            <select class="form-select form-select-sm" required>
              <option selected>Open this select menu</option>
              <option value="1">父</option>
              <option value="2">母</option>
              <option value="3">兄弟姊妹</option>
            </select>
        </td>
        <td data-th="職業">
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
  if (addTr == "recruit") {
      const trAdd = recruitArea.insertRow()
        let str = `
        <td data-th="面試結果">
          <select class="form-select form-select-sm" disabled>
            <option value="錄取">錄取</option>
            <option value="備取">備取</option>
            <option value="未錄取">未錄取</option>
          </select>
        </td>
        <td data-th="應徵姓名">
          <input type="text" class="form-control form-control-sm">
        </td>
        <td data-th="E-Mail">
          <input type="email" class="form-control form-control-sm">
        </td>
        <td data-th="電話">
            <input type="text" class="form-control form-control-sm">
        </td>
        <td class="status text-center">
            <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        面試通知
             </button>
        </td>
        <td class="status text-center">
            <a class="" href="./stage.html">徵選階段</a>
        </td>
        `
      trAdd.innerHTML = str;
  }
  if (addTr == "stage") {
      const trAdd = stageArea.insertRow()
        let str = `
        <td data-th="面試方式">
            <select class="form-select form-select-sm" >
                <option value="電話面談">電話面談</option>
                <option value="視訊面談">視訊面談</option>
                <option value="到場面談">到場面談</option>
            </select>
        </td>
        <td data-th="訪談代表">
          <input type="text" class="form-control form-control-sm">
        </td>
        <td data-th="面談日">
          <input type="date" class="form-control form-control-sm">
        </td>
        <td data-th="備註">
          <input type="text" class="form-control form-control-sm">
        </td>
        <td class="status text-center">
            <a class="btn btn-sm btn-danger" href="">
                <i class="fas fa-trash-alt"></i>
            </a>
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
  const day = Today.getDate()
  confirmDate.forEach((item) => {
    item.innerHTML = `${year}年${month}月${day}日`
  })
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
})