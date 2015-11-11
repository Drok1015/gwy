$$(document).on('pageAfterAnimation', '.page[data-page="dayList"]', function (e) {

    // 加载flag
    var loading = false;

    // 上次加载的序号
    var lastIndex = 0;

    // 最多可加载的条目
    var maxItems = 60;

    // 每次加载添加多少条目
    var itemsPerLoad = 20;

    getJson("外出办公", true);

    $(".jump_item").each(function () {
        $(this).attr("href", "dayDetail.html?id=" + $(this).find(".item_id").val())
    });

    function getJson(typeName, refreshType) {
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

        //                $$(".list-block").html(html);
        //        }, 
        //        error:function(XMLHttpRequest, textStatus, errorThrown){ 
        //            
        //        } 
        //    });



        var html = Template7.templates.daylistTemplate({
            people: [{ name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" }, 
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" },
                    { name: '张三', place: '电政办办公室', type: typeName, date: "2015-04-01", status: "审核已通过" }]
        });

        lastIndex = $$('.list-block li').length;

        if (refreshType) {
            $$(".list-block ul").append(html);
        } else {
            $$(".list-block ul").html(html);
        }
    }

    // 注册'infinite'事件处理函数
    $$('.infinite-scroll').on('infinite', function () {

        // 如果正在加载，则退出
        if (loading) return;

        // 设置flag
        loading = true;

        // 模拟1s的加载过程
        setTimeout(function () {
            // 重置加载flag
            loading = false;

            if (lastIndex >= maxItems) {
                // 加载完毕，则注销无限加载事件，以防不必要的加载
                myApp.detachInfiniteScroll($$('.infinite-scroll'));
                // 删除加载提示符
                $$('.infinite-scroll-preloader').remove();
                return;
            }

            getJson("abc" + lastIndex, true)
        }, 1000);

    });

    // 添加'refresh'监听器
    $$('.pull-to-refresh-content').on('refresh', function (e) {
        // 模拟2s的加载过程
        setTimeout(function () {
            getJson("刷新", false);
            lastIndex = 0;
            // 加载完毕需要重置
            myApp.pullToRefreshDone();
        }, 2000);
    });
})


$$(document).on('pageAfterAnimation', '.page[data-page="dayDetail"]', function (e) {

    var page = e.detail.page;

    //alert(page.query.id)
})

$$(document).on('pageAfterAnimation', '.page[data-page="dayCreate"]', function (e) {

    var page = e.detail.page;

    //page.query.id

    $$("#back_index").on("click", function (e) {
        mainView.router.load({ url: "index.html" })
    })
})