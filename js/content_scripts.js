$('[id^=changesetList] tr').each(function () {
    var sid = $(this).attr('sid');
    $(this).find('td span.changesetDescription').append('<span class="csetHash">' + sid + '</span>').css('color','#777');
});