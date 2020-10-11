let first_arguement = 0;
let second_arguement = 0;
let arguement_order_index = 0;
let prev_calc_sign = 0;

jQuery(".main_button").click(function () {
    var calculate_display = $('#calculate_display').val(); 
    var final_display = $('#final_display').val(); 
    var n = $(this).attr('id'); 

    if (calculate_display == '0') {
        calculate_display = $('#calculate_display').val(n);
    }
    else {
        calculate_display = $('#calculate_display').val(calculate_display + n);
    }
    if (arguement_order_index == '0') {
        if (first_arguement == '0') {
            first_arguement = n;
        }
        else {
            first_arguement += n;
        }
        $('#final_display').val(first_arguement);
    }
    else {
        arguement_order_index = '2';

        if (second_arguement == '0') {
            second_arguement = n;
        }
        else {
            second_arguement = second_arguement + n;
        }
        $('#final_display').val(second_arguement);
    }
    console.log(calculate_display)
});

jQuery(".reset_btn").click(function () {
    var calculate_display = $('#calculate_display').val(); 
    var final_display = $('#final_display').val(); 
    var n = $(this).attr('id'); 

    if (n == 'C' || n == 'CE') {
        arguement_order_index = 0;
        prev_calc_sign = 0;
        $('#final_display').val(0);
        $('#calculate_display').val(0);
        first_arguement = 0;
        second_arguement = 0;
    }
});

jQuery("#point_btn").click(function () {
    var calculate_display = $('#calculate_display').val(); 
    var final_display = $('#final_display').val(); 

    if (arguement_order_index == 0) {
        if (first_arguement.indexOf('.') == -1) {
            first_arguement = first_arguement + '.';
        }
        else {
            return;
        }
    }
    else {
        if (second_arguement.indexOf('.') == -1) {
            second_arguement = second_arguement + '.';
        }
        else {
            return;
        }
    }
    $('#calculate_display').val(calculate_display + '.');
});

jQuery("#change_pm").click(function () {
    var calculate_display = $('#calculate_display').val(); 
    var final_display = $('#final_display').val(); 

    var temp;
    if (arguement_order_index == 0) {
        temp = first_arguement;
    }
    else {
        temp = second_arguement
    }
    if (temp.indexOf('+') == -1 && temp.indexOf('-') == -1) {
        temp = '-' + temp;
    }
    else if (temp.indexOf('-') != -1) {
        temp = temp.replace('-', '+');
    }
    else if (temp.indexOf('+') != -1) {
        temp = temp.replace('+', '-');
    }
    if (arguement_order_index == 0) {
        first_arguement += temp;
    }
    else {
        second_arguement += temp;
    }
    if (arguement_order_index.val != 0) {
        $('#calculate_display').val(first_arguement + prev_calc_sign + second_arguement);
    }
    else {
        $('#calculate_display').val(first_arguement);
    }

});

jQuery("#remove_btn").click(function () {
    var calculate_display = $('#calculate_display').val(); 
    var final_display = $('#final_display').val(); 
    console.log("remove value" + calculate_display.slice(0, 1));

    if (parseInt(calculate_display.charAt(calculate_display.length - 1)) >= 0 && parseInt(calculate_display.charAt(calculate_display.length - 1)) <= 9) {
        if (arguement_order_index == 0) {
            first_arguement = first_arguement.slice(0, -1);
        }
        else {
            second_arguement = second_arguement.slice(0, -1);
        }
    }
    else {
        arguement_order_index = '0';
        prev_calc_sign = 0;
    }
    $('#calculate_display').val(calculate_display.slice(0, -1));

});

jQuery(".calc_btn").click(function () {
    var calculate_display = $('#calculate_display').val(); 
    var final_display = $('#final_display').val(); 
    var n = $(this).attr('id'); 

    if (calculate_display.indexOf('=') != -1) {
        $('#calculate_display').val(first_arguement);
    }
    $('#calculate_display').val(calculate_display + n);

    if (prev_calc_sign == '0') {
        arguement_order_index = '1';
        prev_calc_sign = n;
    }
    else {
        if (arguement_order_index == 1) {
            prev_calc_sign = n;
            $('#calculate_display').val(calculate_display.slice(0, -2) + n);
            return;
        }
        console.log("prev_calc_sign" + prev_calc_sign);
        if (prev_calc_sign == '+') {
            first_arguement = parseFloat(first_arguement) + parseFloat(second_arguement);
        }
        else if (prev_calc_sign == '-') {
            first_arguement = parseFloat(first_arguement) - parseFloat(second_arguement);
        }
        else if (prev_calc_sign == '*') {
            first_arguement = parseFloat(first_arguement) * parseFloat(second_arguement);
        }
        else if (prev_calc_sign == '/') {
            first_arguement = parseFloat(first_arguement) / parseFloat(second_arguement);
        }
        second_arguement = 0;
        if (n == '=') {
            prev_calc_sign = 0;
            $('#calculate_display').val(first_arguement);
            $('#final_display').val(first_arguement);
        }
        else {
            prev_calc_sign = n;
            $('#final_display').val(first_arguement);
        }
    }
});