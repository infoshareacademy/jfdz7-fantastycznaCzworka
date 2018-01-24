$(function () {
    const codeAntybot = $('.code_antybot');
    const inputAntybot = $('.input_antybot');
    const a = Math.round(Math.random()*10);
    const b = Math.round(Math.random()*10);
    $(codeAntybot).text(`${a} + ${b}`);
    const sum = a + b;

    function isInputInvalid() {
        let input = $(inputAntybot).val();
        return parseInt(input) !== sum;
    }
    function submitDisability() {
        $('.antybot_btn').prop('disabled', isInputInvalid)
    }
    $(inputAntybot).on('keyup', submitDisability);
});












// const a = Math.round(Math.random()*10);
// const b = Math.round(Math.random()*10);
// $('.code_antybot').text(`${a} + ${b}`);
// const sum = a + b;
//
// function isInputInvalid() {
//     let x = $('.input_antybot').val();
//     return sum !== parseInt(x);
// }
//
// function submitDisability() {
//     $('.antybot_btn').prop('disabled', isInputInvalid)
// }
//
// $('.input_antybot').on('keyup', function(){
//     submitDisability();
// });