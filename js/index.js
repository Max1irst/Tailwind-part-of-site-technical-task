
$(document).ready(function () {
    $('#getStarted').click(function () {
        $('#youGet').removeClass('hidden');
    });
    $('#sendForm').click(function () {
        $('#beforeSent').addClass('hidden');
        $('#sent').removeClass('hidden');
    });
});
