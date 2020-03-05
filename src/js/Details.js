$(function () {
    // top
    $('.yc').hover(function () {
        $('.top-right-div').show()
    }, function () {
        $('.top-right-div').hide()
    })
// top


// nav
    $('.list-1').hover(function () {
        $('.nav-content-list').empty()
        $.ajax({
            url: '../lib/json/nav.json',
            dataType: 'json',
            success: (res) => {
                let html = '';
                res.data.navs[0].subs.forEach((item) => {
                    html += ` 
                    <li><a href="javascript:;">
                 <span class="aspan1">
                <img src="${item.img}" alt="">
                </span>
             <span class="aspan2">${item.name}</span>
            <span class="aspan3">${item.price}</span>

    </a><span class="aspan4"></span></li>
                    `
                })

                $('.nav-content-list').html(html);
                $('.nav-content').show();
            }
        })
    }, function () {
        $('.nav-content').hide()
    })


    $('.list-2').hover(function () {
        $('.nav-content-list').empty()
        $.ajax({
            url: '../lib/json/nav.json',
            dataType: 'json',
            success: (res) => {
                let html = '';
                res.data.navs[1].subs.forEach((item) => {
                    html += ` 
                    <li><a href="javascript:;">
                 <span class="aspan1">
                <img src="${item.img}" alt="">
                </span>
             <span class="aspan2">${item.name}</span>
            <span class="aspan3">${item.price}</span>

    </a><span class="aspan4"></span></li>
                    `
                })

                $('.nav-content-list').html(html);
                $('.nav-content').show();
            }
        })
    }, function () {
        $('.nav-content').hide()
    })

    $('.list-3').hover(function () {
        $('.nav-content-list').empty()
        $.ajax({
            url: '../lib/json/nav.json',
            dataType: 'json',
            success: (res) => {
                let html = '';
                res.data.navs[2].subs.forEach((item) => {
                    html += ` 
                    <li><a href="javascript:;">
                 <span class="aspan1">
                <img src="${item.img}" alt="">
                </span>
             <span class="aspan2">${item.name}</span>
            <span class="aspan3">${item.price}</span>

    </a><span class="aspan4"></span></li>
                    `
                })

                $('.nav-content-list').html(html);
                $('.nav-content').show();
            }
        })
    }, function () {
        $('.nav-content').hide()
    })

    $('.nav-content').hover(function () {
        $(this).show()
    }, function () {
        $(this).hide()

    })


    tz('.list-1')
    tz('.list-2')
    tz('.list-3')

    function tz(el) {
        $(el).click(function () {
            location.href = '../pages/Details.html'
            console.log(111);
        })
    }

// nav


    // content
        $.ajax({
            dataType:'json',
            url: '../lib/json/list1.json',
            success: function (res) {
                let h = '';
                res.data.pageList.forEach((item) => {
                    h += `
                    <a href="javascript:;">
                <img src="${item.image}" alt="">
                <span class="content-span1">${item.name}</span>
                <span class="content-span2">${item.desc}</span>
                <span class="content-span3">${item.linePrice / 100}</span>
            </a>
                    `
                })

            $('.content-c').html(h)
            }
        })



    qq('.li1','../lib/json/list5.json')
    qq('.li2','../lib/json/list1.json')
    qq('.li3','../lib/json/list2.json')
    qq('.li4','../lib/json/list3.json')
    qq('.li5','../lib/json/list4.json')
    function qq(el ,url) {
        $(el).click(function () {
            $('.content-c').empty()

            $.ajax({
                dataType:'json',
                url: url,
                success: function (res) {
                    let h = '';
                    res.data.pageList.forEach((item) => {
                        h += `
                    <a href="javascript:;">
                <img src="${item.image}" alt="">
                <span class="content-span1">${item.name}</span>
                <span class="content-span2">${item.desc}</span>
                <span class="content-span3">${item.linePrice / 100}</span>
            </a>
                    `
                    })
                    $('.content-c').html(h)
                }
            })
        })
    }
    

    $('.pagination li').click(function () {
        if ($(this).hasClass('li5')) {
            $('.page-box1-wrap').show()
            $('.p1').addClass('act').siblings().removeClass('act')
        } else {
            $('.page-box1-wrap').hide()
        }
    })


    qq('.p1','../lib/json/list4.json')
    qq('.p2','../lib/json/list6.json')

    // content
    
    $('.pagination li a').click(function () {
        $(this).addClass('act').parent().siblings().find('a').removeClass('act')
    })
    $('.page-box1 p').click(function () {
        $(this).addClass('act').siblings().removeClass('act')

    })
})