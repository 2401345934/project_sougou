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

    // nav

    $('.btn').click(function () {
        $.ajax({
            url: '../php/login.php',
            type: 'post',
            data: `username=${$('#username').val()}&password=${$('#password').val()}`,
            dataType: 'json',
            success: function (res) {
                if (res === 1) {
                    location.href = './index.html';
                } else {
                    alert('您还没有注册,请先注册');
                }
            }
        })
    })
    $('.btn').mousedown(function () {
        $(this).css({
            opacity: .3
        })
    })
    $('.btn').mouseup(function () {
        $(this).css({
            opacity: 1
        })
    })
})