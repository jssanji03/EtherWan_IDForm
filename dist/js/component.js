//## Datatable Responsive 套件 - Start ##//

$(function () {
    $('.datatable-RWD').DataTable({
        searching: false,
        "paging": false,
        "ordering": false,
        "info": false,
        "autoWidth": false,
        scroller: true,
        responsive: true,
        "lengthChange": false,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
        },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
    );

    $('.select2').select2({
        theme: 'bootstrap4'
    })
    $('.datatable-card').DataTable({
        searching: false,
        pageLength: 3,
        // stateSave: true,
        "paging": false,
        "ordering": false,
        "scrollX": true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
          },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
  );
    $('.datatable-card-onlyWord').DataTable({
        searching: false,
        pageLength: 3,
        "paging": false,
        "ordering": false,
        "scrollX": true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
          },
        dom: "<'row'<'col-xl-12'fr>>" +
            "<'row'<'col-sm-12'tlp>>",
    }
  );



});
  
 $('.summernote').summernote({
   height: 150,
   focus: true,
   toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'underline', 'clear']],
    ['fontname', ['fontname']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['table', ['table']],
    ['insert', ['link']],
    ['view', ['fullscreen', 'codeview', 'help']],
  ],
     callbacks: {
    onBlur: function(e) {
        let sHTML = $('.summernote').summernote('code');
        const submitButton = document.querySelector("#mail-submit")
        // submitButton.addEventListener("click", (e) => {
        // e.preventDefault()
        // console.log(sHTML);
        // })
    }
   }
 })