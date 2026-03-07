const loadAmounts = {
    smart: [50, 100, 200, 300, 500, 1000],
    globe: [20, 30, 50, 100, 200, 500, 600, 900],
    dito: [50, 100, 150, 200, 300, 500, 750, 850, 1000],
    tnt: [50, 100, 200, 300, 500, 1000],
    tm: [20, 30, 50, 100, 200, 500, 600, 900]
};

const CONVENIENCE_CHARGE = 2.50;

$(document).ready(function() {
    $('#telcoProvider').change(function() {
        const provider = $(this).val();
        const loadOptions = $('#loadOptions');
        loadOptions.empty();
        $('#otherAmount').val('').prop('disabled', true);
        $('#totalAmount').val('');

        if (provider) {
            $('#loadAmountSection').show();
            $('#totalAmountSection').show();
            loadAmounts[provider].forEach(amount => {
                loadOptions.append(`
                    <div class="form-check">
                        <input class="form-check-input load-radio" type="radio" name="loadAmount" value="${amount}" id="load_${amount}">
                        <label class="form-check-label" for="load_${amount}">₱${amount}</label>
                    </div>
                `);
            });
            loadOptions.append(`
                <div class="form-check">
                    <input class="form-check-input load-radio" type="radio" name="loadAmount" value="other" id="load_other">
                    <label class="form-check-label" for="load_other">Others</label>
                </div>
            `);
        } else {
            $('#loadAmountSection').hide();
            $('#totalAmountSection').hide();
        }
    });

    $(document).on('change', '.load-radio', function() {
        const value = $(this).val();
        if (value === 'other') {
            $('#otherAmount').prop('disabled', false).focus();
            $('#totalAmount').val('');
        } else {
            $('#otherAmount').val('').prop('disabled', true);
            const total = parseFloat(value) + CONVENIENCE_CHARGE;
            $('#totalAmount').val('₱' + total.toFixed(2));
        }
    });

    $(document).on('input', '#otherAmount', function() {
        const amount = parseFloat($(this).val());
        const provider = $('#telcoProvider').val();
        const maxAmount = Math.max(...loadAmounts[provider]);

        if (!isNaN(amount) && amount > 0 && amount < maxAmount) {
            const nearest = loadAmounts[provider].reduce((prev, curr) => 
                Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
            );
            $(`#load_${nearest}`).prop('checked', true);
            const total = nearest + CONVENIENCE_CHARGE;
            $('#totalAmount').val('₱' + total.toFixed(2));
        } else if (!isNaN(amount) && amount >= maxAmount) {
            const total = amount + CONVENIENCE_CHARGE;
            $('#totalAmount').val('₱' + total.toFixed(2));
        } else {
            $('#totalAmount').val('');
        }
    });
});
