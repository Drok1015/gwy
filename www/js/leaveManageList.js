
//$$(document).on('pageAfterAnimation','.page[data-page="attenceList"]', function (e) {

//    //var page = e.detail.page;

//    alert(123)

//    getJson("外出办公");

//    $$("select").change(function (str) {
//        getJson($$(this).val());
//    });
//})

function getJson(typeName) {
    $$.ajax({
        url: 'http://php.weather.sina.com.cn/xml.php?city=%B1%B1%BE%A9&password=DJOYnieT8234jlsK&day=0',
        success: function (data, status, xhr) {
            var listTemplate = $$('script#listTemplate').html();

            var compiledListTemplate = Template7.compile(listTemplate);
            var html = compiledListTemplate({
                people: [{ name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01 09:00 至 2015-04-08 09:00", status: "审核已通过" },
                        { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01 09:00 至 2015-04-08 09:00", status: "审核已通过" },
                        { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01 09:00 至 2015-04-08 09:00", status: "审核已通过" },
                        { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01 09:00 至 2015-04-08 09:00", status: "审核已通过" },
                        { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01 09:00 至 2015-04-08 09:00", status: "审核已通过" }]
            });
            $$("#leaveList .list-block").html(html);
        }
    })
}




