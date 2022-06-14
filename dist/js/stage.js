const mailTemplate = document.querySelector(".js-mailNotice")
const mailArea = document.querySelector(".js-showMail")
mailTemplate.addEventListener("change", () => {
    const selectedMail = mailTemplate.options[mailTemplate.selectedIndex].text;
    console.log(selectedMail);
    if (selectedMail == "感謝函") {
        str = `
        <div class="row">
                                <div class="mb-2 col-12">
                                    <label class="form-label">主旨:</label>
                                    <input class="form-control form-control-sm js-job" type="text"
                                        value="益網 [職缺]-[應徵姓名] 面試通知"></input>
                                </div>
                                <div class="mb-2 col-12">
                                    <label class="form-label">內容:</label>
                                    <textarea class="summernote">
                                        <p>[應徵姓名]</p>
                                        <p>感謝</p>
                                    </textarea>
                                </div>
                            </div>
        `
        mailArea.innerHTML = str
    } else {
        str = `
        <div class="row">
            <div class="mb-2 col-12">
                <label class="form-label">主旨:</label>
                <input class="form-control form-control-sm js-job" type="text"
                                        value="益網 [職缺]-[應徵姓名] 面試通知"></input>
            </div>
            <div class="mb-2 col-12">
                <label class="form-label">內容:</label>
                <textarea class="summernote">
                    <p>[應徵姓名]</p>
                    <p>XXXX</p>
                </textarea>
            </div>
        </div>
        `
        mailArea.innerHTML = str
    }
})