const addRecruitList = document.querySelector('.js-addRecruitList')
// const editAreaSave = document.querySelector('.js-editSave')
const formDept = document.querySelector('.js-dept')
const formDate = document.querySelector('.js-date')
const formJob = document.querySelector('.js-job')
const formNum = document.querySelector('.js-num')
const formContent = document.querySelector('.js-content')
let data = []
addRecruitList.addEventListener('click', addNewList)

let i = 0
function addNewList(e) {
  const obj = {}
  obj.id = ++i
  obj.dept = formDept.value
  obj.date = formDate.value
  obj.job = formJob.value
  obj.num = formNum.value
  obj.content = formContent.value

  data.push(obj)
  console.log(data);
  init()
  // formArea.reset()
  // console.log('addNewList')
}

function init() {
  let str = ''
  data.forEach(items => {
    const recruitArea = document.querySelector('.recruitArea')
    str += `
                <tr>
                  <td>
                    <a class="btn btn-sm btn-warning" href=""><i class="fas fa-pen"></i>
                    </a>
                  </td>
                  <td>Open</td>
                  <td>${items.dept}</td>
                  <td>${items.job}</td>
                  <td>${items.num}</td>
                  <td>${items.date}</td>
                  <td>${items.content}</td>
                  <td>
                      <a class="" href="./stage.html">徵選階段</a>
                  </a>
                  </td>
                </tr>
        `
    recruitArea.innerHTML = str
  })
}

