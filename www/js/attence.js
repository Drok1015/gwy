
$$(document).on('pageAfterAnimation', '.page[data-page="attenceDetail"]', function (e) {

    var page = e.detail.page;

    //page.query.id

    $$("#back_index").on("click", function (e) {
        mainView.router.load({ url: "index.html" })
    })
})


$$(document).on('pageAfterAnimation', '.page[data-page="attenceList"]', function (e) {

    getJson("外出办公");

    $$("select").change(function (str) {
        getJson($$(this).val());
    });
    
    function getJson(typeName) {
        //    $.ajax({ 
        //        async: false, 
        //        url: 'http://192.168.137.239/sjcs1/WebService/pskhWebService.asmx/rjsList',
        //        type: "POST", 
        //        dataType: 'jsonp', 
        //        jsonp: 'callbackc', 
        //        data:{'file' : ' name,gzzj ','userGuid':'','whereSql':'','pagesize':'12','pageNum':'1','orderBy':' snum desc '}, 
        //        timeout: 5000, 
        //        success: function (result) {
        //                var html = Template7.templates.listTemplate(result);
        //var html = Template7.templates.listTemplate(result);

        //                $$(".list-block").html(html);
        //        }, 
        //        error:function(XMLHttpRequest, textStatus, errorThrown){ 
        //            
        //        } 
        //    });



        var html = Template7.templates.listTemplate("{" +
            "[{ name: '张三', place: '电政办办公室', type: '外出公务', date: '2015-04-01 09:00 至 2015-04-08 09:00', status: '审核已通过' }," +
              "{ name: '张三', place: '电政办办公室', type: '外出公务', date: '2015-04-01 09:00 至 2015-04-08 09:00', status: '审核已通过' }," +
             " { name: '张三', place: '电政办办公室', type: '外出公务', date: '2015-04-01 09:00 至 2015-04-08 09:00', status: '审核已通过' }," +
             " { name: '张三', place: '电政办办公室', type: '外出公务', date: '2015-04-01 09:00 至 2015-04-08 09:00', status: '审核已通过' }," +
              "{ name: '张三', place: '电政办办公室', type: '外出公务', date: '2015-04-01 09:00 至 2015-04-08 09:00', status: '审核已通过' }]" +
            " }");

        $$(".list-block").html(html);
    }
})