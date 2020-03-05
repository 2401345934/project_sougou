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
    function tz(el){
        $(el).click(function () {
            location.href='../pages/Details.html'
            console.log(111);
        })
    }

    // nav



    // banner
    $.ajax({
        url: '../lib/json/banner.json',
        dataType: 'json',
        data:'get',
        success: function (res) {
            let h = '';
            res.forEach((i) => {
                h += `
                <div class="item banner-item">
                <img src="${i} " alt="" >
                 </div>
                `
            })
            $('.banner-img').html(h)
            $('.banner-img .item').first().addClass('active')


            let q = '';
            res.forEach((item,index) => {
                q += `
                    <li data-target="#carousel-example-generic" data-slide-to="${index}" ></li>
                `


                $('.banner-line').html(q)
                $('.banner-line').children().first().addClass('active')
            })

        }
    })
    // banner

    // pagtion
    $.ajax({
        url: '../lib/json/pagtion.json',
        dataType: 'json',
        data:'get',
        success: function (res) {
            let h = '';
            res.forEach((i) => {
                h += `
                  <a href="javascript:;">
                <img src="${i.img}" alt="">
                <span class="pagtion-span1">${i.title}</span>
                <span class="pagtion-span2">${i.name}</span>
                <span class="pagtion-span3">${i.price}</span>
            </a>
                `
            })
            $('.pagtion-b-img').html(h)

            $('.pagtion-b-img a').eq(3).css({
                marginRight:0
            })
        }
    })


    $.ajax({
        url: '../lib/json/xbanner.json',
        type: 'get',
        dataType: 'json',
        success: function (res) {
            res.forEach((item) => {
                let box = document.createElement('div');
                let img = document.createElement('img');
                img.src = item;
                box.appendChild(img);
                box.classList.add('swiper-slide');
                $('.swiper-wrapper').append($(box))
            })


            var mySwiper = new Swiper('.swiper-container', {
                initialSlide: 0,
                direction: 'horizontal',
                loop: true,
                autoplay: {
                    delay: 5000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                // 分页器 也就是一个个的小点
                pagination: {
                    el: '.swiper-pagination',
                },
                centeredSlides: true,
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            })
        }
    })


    $.ajax({
        url: '../lib/json/pagtion2.json',
        dataType: 'json',
        data:'get',
        success: function (res) {
            let h = '';
            res.forEach((i) => {
                h += `
                  <a href="javascript:;">
                <img src="${i.img}" alt="">
                <span class="pagtion-span1">${i.title}"</span>
                <span class="pagtion-span2">${i.name}"</span>
                <span class="pagtion-span3">${i.price}"</span>
            </a>
                `
            })
            $('.pagtion-bb-img').html(h)

            $('.pagtion-bb-img a').eq(3).css({
                marginRight:0
            })
        }
    })

    // pagtion

    $.ajax({
        url: '../lib/json/pagtion3.json',
        dataType: 'json',
        data:'get',
        success: function (res) {
            let h = '';
            res.forEach((i) => {
                h += `
                  <a href="javascript:;">
                <img src="${i.img}" alt="">
                <span class="pagtion-span1">${i.title}</span>
                <span class="pagtion-span2">${i.name} </span>
                <span class="pagtion-bb-c"></span>
            </a>
                `
            })
            $('.pagtion-bb').html(h)

            $('.pagtion-bb a').eq(3).css({
                marginRight:0
            })
        }
    })
    
    //回到顶部
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 888){
            $('.db').show();
            $('.db').click(function () {
                $(window).scrollTop(0)
            });
        }else {
            $('.db').hide();
        }
    })
    
    //回到顶部
    

})
