//## Datatable Responsive 套件 - Start ##//

$(function () {

  $('.select2').select2({
      theme: 'bootstrap4'
  })
  $('.searchResult').DataTable({
      "responsive": false,
      "lengthChange": false,
      "autoWidth": false,
    "searching": true,
        // "scrollX": true,
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
        "initComplete": function (settings, json) {
            $(".searchResult").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
    }
  );
  $('.datatable-RWDcard').DataTable({
      "responsive": false,
      "lengthChange": false,
      "autoWidth": false,
      "searching": false,
      "paging": false,
      "info":false,
        // "scrollX": true,
        "language": {
            "info": "顯示 _PAGE_ 至 _PAGES_",
            "search": "搜尋 :",
            "paginate": {
                "previous": "上一頁",
                "next":"下一頁"
            },
            "lengthMenu": "顯示 _MENU_ 筆資料"
          },
        
        "initComplete": function (settings, json) {
            $(".datatable-RWDcard").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
    }
  );

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
});
  