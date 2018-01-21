const a = Math.round(Math.random()*10);
const b = Math.round(Math.random()*10);
$('.code_antybot').text(`${a} + ${b}`);
const sum = a+b;

function isInputInvalid() {
    let x = $('.input_antybot').val();
    return sum !== parseInt(x);
}

function submitDisability() {
    $('.antybot_btn').prop('disabled', isInputInvalid)
}

$('.input_antybot').on('keyup', function(){
    // console.log('a');
    submitDisability();
});