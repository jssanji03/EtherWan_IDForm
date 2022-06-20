//## Datatable Responsive 套件 - Start ##//

$(function () {

  $('.select2').select2({
      // theme: 'bootstrap4'
  })
  $('.searchResult').DataTable({
    "responsive": false,
    "lengthChange": false,
    "autoWidth": false,
    "buttons": [ "excel", "pdf", "colvis"],
    "searching": true,
        // "scrollX": true,
    "language": {
        "info": "顯示 _PAGE_ 至 _PAGES_",
        "search": "搜尋 :",
        "paginate": {
            "previous": "上一頁",
            "next":"下一頁"
        },
        buttons: {
          colvis: '顯示欄位'
        }
      },
    dom: "<'row'<'col-xl-12'Bfr>>" +
        "<'row'<'col-sm-12'tlp>>",
        "initComplete": function (settings, json) {
            $(".searchResult").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
    }
  )
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
    $('.list-table').DataTable({
     "responsive": false,
      "lengthChange": false,
      "autoWidth": false,
      "searching": false,
      "paging": false,
      "info":false,
    "buttons": [ "excel"],
    "language": {
        "info": "顯示 _PAGE_ 至 _PAGES_",
        "search": "搜尋 :",
        "paginate": {
            "previous": "上一頁",
            "next":"下一頁"
        },
      },
    dom: "<'row'<'col-xl-12'Bfr>>" +
        "<'row'<'col-sm-12'tlp>>",
        "initComplete": function (settings, json) {
            $(".list-table").wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");
        },
    }
  )
});
  