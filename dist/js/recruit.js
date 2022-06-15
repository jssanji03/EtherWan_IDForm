const addRecruitList = document.querySelector('.js-addResult')
const recruitFormArea = document.querySelector('.js-recruitForm')
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
  recruitFormArea.reset()
}

function init() {
  let str = ''
  data.forEach(items => {
    const recruitArea = document.querySelector('.recruitArea')
    str += `
                <tr>
                  <td class="status text-center">
                      <a class="btn btn-sm btn-warning" href="./recruit_next.html"><i class="fas fa-pen"></i></a>
                  </td>
                  <td data-th="狀態"><span>Open</span></td>
                  <td data-th="部門">${items.dept}</td>
                  <td data-th="職缺">${items.job}</td>
                  <td data-th="BPM單號">${items.num}</td>
                  <td data-th="刊登日">${items.date}</td>
                  <td data-th="需求">${items.content}</td>
                  </td>
              </tr>
        `
    recruitArea.innerHTML = str
  })
}

