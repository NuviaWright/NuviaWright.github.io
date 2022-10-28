$(function () {
    $('#datepicker').datepicker({
        dateFormat: "dd/mm/yy"
    });
    countMe();

    $.ajax({
        url: 'https://www.mocky.io/v2/5d73bf3d3300003733081869',
        success: function (res) {
            $.each(res, function (index, element) {
                const clsAge = class_age(element.age);
                const col = $('<div></div>').addClass('col ' + clsAge);
                const main = $('<div></div>')
                    .addClass('card mb-3 h-100 p-3 ' + clsAge)
                    .css('max-width', '540px');
                const body = $('<div></div>').addClass('row g-0');
                const bodyImage = $('<div></div>')
                    .addClass('col-md-4');
                const image = $('<img>')
                    .attr({
                        src: '/assets/userphoto.png',
                        class: 'img-fluid rounded-start mx-auto d-block mt-2 pt-2',
                        alt: 'userphoto.png'
                    })

                const card = $('<div></div>').addClass('col-md-8');
                const cardBody = $('<div></div>').addClass('card-body');
                const name = $('<h5></h5>')
                    .addClass('card-body text-uppercase text-start p-0 fw-bolder')
                    .text(element.name);

                const lblEmail = $('<span></span>')
                    .addClass('text-secondary')
                    .text('Email: ');
                const email = $('<span></span>')
                    .addClass('fw-bold')
                    .text(element.email);

                const lblMobile = $('<span></span>')
                    .addClass('text-secondary')
                    .text('Mobile: ');
                const mobile = $('<span></span>')
                    .addClass('fw-bold')
                    .text(element.phone);

                const lblCompany = $('<span></span>')
                    .addClass('text-secondary')
                    .text('Company: ');
                const company = $('<span></span>')
                    .addClass('fw-bold')
                    .text(element.company);

                const lblAddress = $('<span></span>')
                    .addClass('text-secondary')
                    .text('Address: ');
                const address = $('<span></span>')
                    .addClass('fw-bold')
                    .text(element.address.street + ', ' + element.address.suite + ', ' + element.address.city + ', ' + element.address.zipcode);

                const lblWebsite = $('<span></span>')
                    .addClass('text-secondary')
                    .text('Website: ');
                const website = $('<span></span>')
                    .addClass('fw-bold')
                    .text(element.website);

                const lblAge = $('<span></span>')
                    .addClass('text-secondary')
                    .text('Age: ');
                const age = $('<span></span>')
                    .addClass('fw-bold')
                    .text(element.age);

                card.append(cardBody.append(name, lblEmail, email, '<br>', lblMobile, mobile, '<br>', lblCompany, company, '<br>', lblAddress, address, '<br>', lblWebsite, website, '<br>', lblAge, age));

                $('#manager').append(col.append(main.append(body.append(bodyImage.append(image), card))));

            })
        }
    })

    $('#filter-age').change(function () {
        const value = $(this).val();

        switch (value) {
            case 'young':
                $('.col').hide();
                $('.young').show();
                break;

            case 'old':
                $('.col').hide();
                $('.old').show();
                break;

            case 'older':
                $('.col').hide();
                $('.older').show();
                break;

            default:
                $('.col').show();
                break;
        }
    })

    $('#btn-date-convert').click(function () {
        const date = $('#datepicker').datepicker('getDate');

        if (date === null) {
            alert('Pick a date');
            return;
        }

        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;

        alert('Converted to ' + year + '-' + month + '-' + day);
    })

    function class_age(age) {
        if (age > 39) {
            return 'older';
        } else if (age > 21 && age < 40) {
            return 'old';
        } else {
            return 'young'
        }

    }

    function countMe() {
        for (i = 1; i < 101; i++) {
            if (i % 3 == 0) {
                console.log('Foo');
            } else if (i % 5 == 0) {
                console.log('Bar');
            } else {
                console.log(i);
            }
        }
    }

})