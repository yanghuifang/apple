$(function () {


    //顶部
    let liss=$("header a:first");
    liss.click(function () {
        $(".lis").slideToggle("fast");
        $("header .close").toggle("fast");
        $("header .adc i").toggle("fast");
        $(document.body).toggleClass("hidden");
        $("header .icon-gouwudai101").slideToggle("fast");
        // $("header .close").click(function () {
        //     $(document.body).css("overflow","auto");
        // })
    })

    //底部
    // let jia=$("footer .container .coluumn h3 span");
    // let h3=$("footer .container .coluumn h3");
    // console.log(jia, h3);
    // console.log(jia);
    // jia.click(function () {
    //     let i=$(this).parent().parent().index();
    //     $(".bott").eq(i).toggle();
    //     $(this).toggleClass("tran");
    //     h3.eq(i).toggleClass("active");
    //     $("footer .container .bottom").css()
    // })
    $(".icon-liebia").click(function () {
        $(document.body).toggleClass("hidden");
        $(".tanchu").slideToggle();
        $(".icon-gouwudai101").toggleClass("display");
        $(".gang11").toggleClass("gang1");
        $(".gang22").toggleClass("gang2");
        $(".gang22").toggleClass("gang222");

    })
    $(".icon-gouwudai101").click(function () {
        $(".xiaochu").toggleClass("display2");
    })
    $(".coluumn h3").click(function () {
        $(this).next().children().toggleClass("display2");
        $(this).children().toggleClass("icon-cuowu")
        $(this).children().toggleClass("icon-jia")
        $(this).children().toggleClass("spa");
    })
    $("header .icon-gouwudai101").click(function () {
        $(".fang").toggle();
        $(".shop").toggle();
    })
    console.log($("header .icon-gouwudai101"));
    console.log($(".fang"));
})