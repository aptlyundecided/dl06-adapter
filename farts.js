
function I_do_nothing () {
    console.log('nothin')
}


function do_a_fart () {
    console.log('fart')
}

function do_a_parameter_fart (farts) {
    console.log(farts[0] + farts[1] + ' farts')
}


module.exports = {
    do_a_fart,
    do_a_parameter_fart
}
