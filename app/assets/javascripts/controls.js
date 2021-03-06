$(".controls.index").ready(function() {
  if ($(".controls.index, .controls.search").length > 0) {
    //addSearchParam();
    $('.search-blank-submit').click(function() {
      controlSearch();
    })
  }

});

function addSearchParam() {
  $(".search-blank-text").val(gon.search);
  $(":radio[value='" + gon.ware + "']").prop("checked", true);
} 

function controlSearch() {
  //var table = controlSearchTable()
  //$("#search-result-ctn").html(table);
  var $table = $('#item-table')
  var data = [];
  var search = $(".search-blank-text").val();
  var ware_search = $(":radio[name='ware_search']:checked").val();

  var url = "/controls/search";
  $.get(url, {search: search, ware_search: ware_search}).done(function (objs) {
    $.each(objs, function(index, item) {
      data.push({
        'id' : index + 1,
        'name' : item.name,
        'mdno' : item.mdno,
        'count' : item.count,
        'fct' : item.fct,
        'fctname' : item.fctname
      });
    });
    $table.bootstrapTable('load', data);
  })
}

function controlSearchTable() {
  //动态插入的 bootstraptable不管用
  var html = "<table id='item-table' class='text-center' data-toggle = 'table' data-id-table='advancedTable' data-pagination='true' data-page-size = '15' data-search = 'true' data-advanced-search='true' data-virtual-scroll = false> <thead><tr><th scope = 'col' data-field = 'id'> #</th><th scope = 'col' data-field = 'name'>名称</th><th scope = 'col' data-field = 'mdno'>型号</th><th scope = 'col' data-field = 'count'>剩余</th><th scope = 'col' data-field = 'fct'>厂家</th><th scope = 'col' data-field = 'fctname'>公司</th></tr></thead></table>"
  return html;
}



/*$(".chart-statistic-ctn").each(function(index, e) {
  radarChartSet(e);
});

$(".chart-gauge-ctn").each(function(index, that_chart) {
  var qcode = that_chart.dataset['code'];
  var factory_id = that_chart.dataset['fct'];
  var chart = echarts.init(that_chart);
  chart.showLoading();

  var obj = {factory_id: factory_id, qcode: qcode }
  var url = "/day_pdt_rpts/new_quota_chart";
  $.get(url, obj).done(function (data) {
    chart.hideLoading();
    
    var new_Option = gaugeOption(data.name, data.value, data.min, data.max, data.color)
    chart.setOption(new_Option, true);
  });
});*/
