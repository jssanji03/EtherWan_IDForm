const addRecruitList = document.querySelector('.js-addRecruitList')
const formArea = document.querySelector('.js-Form')
const recruitResult = document.querySelector('.js-recruitResult')
const recruitName = document.querySelector('.js-recruitName')
const recruitMail = document.querySelector('.js-recruitMail')
const recruitTel = document.querySelector('.js-recruitTel')

let data = []
addRecruitList.addEventListener('click', addNewRecruit)

let i = 0
function addNewRecruit(e) {
  const obj = {}
  obj.id = ++i
  obj.result = recruitResult.value
  obj.name = recruitName.value
  obj.mail = recruitMail.value
  obj.tel = recruitTel.value

  data.push(obj)
  console.log(data);
  init()
  formArea.reset()
  // console.log('addNewList')
}

function init() {
  let str = ''
  data.forEach(items => {
    const recruitArea = document.querySelector('.recruitListArea')
    str += `
                 <tr>
                    <td data-th="面試結果">
                        ${items.result}
                    </td>
                    <td data-th="應徵姓名">
                         ${items.name}
                    </td>
                    <td data-th="E-Mail">
                        ${items.mail}
                    </td>
                    <td data-th="電話">
                        ${items.tel}
                    </td>
                    <td class="status text-center">
                        <button type="button" class="btn btn-sm btn-outline-secondary"
                                                        data-bs-toggle="modal" data-bs-target="#interview">
                                                        面試通知
                        </button>
                    </td>
                    <td class="status text-center">
                        <a class="" href="./stage.html">甄選階段
                        </a>
                    </td>
                </tr>
        `
    recruitArea.innerHTML = str
  })
}

