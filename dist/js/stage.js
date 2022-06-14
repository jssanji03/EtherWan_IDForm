const mailTemplate = document.querySelector(".js-mailNotice")
const mailArea = document.querySelector(".js-showMail")
// mailTemplate.addEventListener("change", () => {
//     const selectedMail = mailTemplate.options[mailTemplate.selectedIndex].text;
//     console.log(selectedMail);
//     if (selectedMail == "感謝函") {
//         str = `
//         <div class="row">
//                                 <div class="mb-2 col-12">
//                                     <label class="form-label">主旨:</label>
//                                     <input class="form-control form-control-sm js-job" type="text"
//                                         value="益網 [職缺]-[應徵姓名] 面試通知"></input>
//                                 </div>
//                                 <div class="mb-2 col-12">
//                                     <label class="form-label">內容:</label>
//                                     <textarea class="summernote">
//                                         <p>[應徵姓名]</p>
//                                         <p>感謝</p>
//                                     </textarea>
//                                 </div>
//                             </div>
//         `
//         mailArea.innerHTML = str
//     } else {
//         str = `
//         <div class="row">
//             <div class="mb-2 col-12">
//                 <label class="form-label">主旨:</label>
//                 <input class="form-control form-control-sm js-job" type="text"
//                                         value="益網 [職缺]-[應徵姓名] 面試通知"></input>
//             </div>
//             <div class="mb-2 col-12">
//                 <label class="form-label">內容:</label>
//                 <textarea class="summernote">
//                     <p>[應徵姓名]</p>
//                     <p>XXXX</p>
//                 </textarea>
//             </div>
//         </div>
//         `
//         mailArea.innerHTML = str
//     }
// })

const formArea = document.querySelector('.js-stageForm')
const addStage = document.querySelector('.js-addStage')
const stageMode = document.querySelector('.js-stageMode')
const stageName = document.querySelector('.js-stageName')
const stageDate = document.querySelector('.js-stageDate')
const stageContent = document.querySelector('.js-stageContent')

let data = []
addStage.addEventListener('click', addNewStage)

let i = 0
function addNewStage(e) {
  const obj = {}
  obj.id = ++i
  obj.stageMode = stageMode.value
  obj.stageName = stageName.value
  obj.stageDate = stageDate.value
  obj.stageContent = stageContent.value

  data.push(obj)
    init()
    formArea.reset()
}

function init() {
  let str = ''
  data.forEach(items => {
    const stageArea = document.querySelector('.stageArea')
    str += `
                 <tr>
                    <td data-th="面試方式">
                        ${items.stageMode}
                    </td>
                    <td data-th="訪談代表">
                         ${items.stageName}
                    </td>
                    <td data-th="面談日">
                        ${items.stageDate}
                    </td>
                    <td data-th="備註">
                        ${items.stageContent}
                    </td>
                    <td class="status text-center">
                        <a class="btn btn-sm btn-danger" href="">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                </tr>
        `
    stageArea.innerHTML = str
  })
}