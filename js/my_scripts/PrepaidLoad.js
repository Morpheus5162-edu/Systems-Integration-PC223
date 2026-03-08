// RegularLoadOffer class to eliminate repetition of default expiry value (365 days)
class RegularLoadOffer {
    constructor(amount, expiry = 365) {
        this.amount = amount;
        this.expiry = expiry;
    }
}

const loadAmounts = {
    smart: [
        new RegularLoadOffer(50),
        new RegularLoadOffer(100),
        new RegularLoadOffer(200),
        new RegularLoadOffer(300),
        new RegularLoadOffer(500),
        new RegularLoadOffer(1000)
    ],
    globe: [
        new RegularLoadOffer(20),
        new RegularLoadOffer(30),
        new RegularLoadOffer(50),
        new RegularLoadOffer(100),
        new RegularLoadOffer(200),
        new RegularLoadOffer(500),
        new RegularLoadOffer(600),
        new RegularLoadOffer(900)
    ],
    dito: [
        new RegularLoadOffer(50),
        new RegularLoadOffer(100),
        new RegularLoadOffer(150),
        new RegularLoadOffer(200),
        new RegularLoadOffer(300),
        new RegularLoadOffer(500),
        new RegularLoadOffer(750),
        new RegularLoadOffer(850),
        new RegularLoadOffer(1000)
    ],
    tnt: [
        new RegularLoadOffer(50),
        new RegularLoadOffer(100),
        new RegularLoadOffer(200),
        new RegularLoadOffer(300),
        new RegularLoadOffer(500),
        new RegularLoadOffer(1000)
    ],
    tm: [
        new RegularLoadOffer(20),
        new RegularLoadOffer(30),
        new RegularLoadOffer(50),
        new RegularLoadOffer(100),
        new RegularLoadOffer(200),
        new RegularLoadOffer(500),
        new RegularLoadOffer(600),
        new RegularLoadOffer(900)
    ]
};

const dataAmounts = {
    smart: [
        { amount: 99, expiry: 1 },
        { amount: 199, expiry: 3 },
        { amount: 299, expiry: 7 },
        { amount: 499, expiry: 15 },
        { amount: 999, expiry: 30 }
    ],
    globe: [
        { amount: 99, expiry: 1 },
        { amount: 149, expiry: 3 },
        { amount: 199, expiry: 7 },
        { amount: 299, expiry: 7 },
        { amount: 499, expiry: 15 },
        { amount: 799, expiry: 30 }
    ],
    dito: [
        { amount: 99, expiry: 1 },
        { amount: 199, expiry: 3 },
        { amount: 299, expiry: 7 },
        { amount: 499, expiry: 15 },
        { amount: 599, expiry: 20 },
        { amount: 999, expiry: 30 }
    ],
    tnt: [
        { amount: 99, expiry: 1 },
        { amount: 199, expiry: 3 },
        { amount: 299, expiry: 7 },
        { amount: 499, expiry: 15 },
        { amount: 999, expiry: 30 }
    ],
    tm: [
        { amount: 99, expiry: 1 },
        { amount: 149, expiry: 3 },
        { amount: 199, expiry: 7 },
        { amount: 299, expiry: 7 },
        { amount: 499, expiry: 15 },
        { amount: 799, expiry: 30 }
    ]
};

const dataUnliAmounts = {
    smart: [
        { amount: 149, expiry: 3 },
        { amount: 249, expiry: 7 },
        { amount: 349, expiry: 15 },
        { amount: 549, expiry: 20 },
        { amount: 1099, expiry: 30 }
    ],
    globe: [
        { amount: 149, expiry: 3 },
        { amount: 199, expiry: 5 },
        { amount: 249, expiry: 7 },
        { amount: 349, expiry: 15 },
        { amount: 549, expiry: 20 },
        { amount: 899, expiry: 30 }
    ],
    dito: [
        { amount: 149, expiry: 3 },
        { amount: 249, expiry: 7 },
        { amount: 349, expiry: 15 },
        { amount: 549, expiry: 20 },
        { amount: 699, expiry: 25 },
        { amount: 1099, expiry: 30 }
    ],
    tnt: [
        { amount: 149, expiry: 3 },
        { amount: 249, expiry: 7 },
        { amount: 349, expiry: 15 },
        { amount: 549, expiry: 20 },
        { amount: 1099, expiry: 30 }
    ],
    tm: [
        { amount: 149, expiry: 3 },
        { amount: 199, expiry: 5 },
        { amount: 249, expiry: 7 },
        { amount: 349, expiry: 15 },
        { amount: 549, expiry: 20 },
        { amount: 899, expiry: 30 }
    ]
};

const unliDataUnliAmounts = {
    smart: [
        { amount: 199, expiry: 7 },
        { amount: 299, expiry: 15 },
        { amount: 399, expiry: 20 },
        { amount: 699, expiry: 25 },
        { amount: 1299, expiry: 30 }
    ],
    globe: [
        { amount: 199, expiry: 7 },
        { amount: 249, expiry: 10 },
        { amount: 299, expiry: 15 },
        { amount: 399, expiry: 20 },
        { amount: 699, expiry: 25 },
        { amount: 999, expiry: 30 }
    ],
    dito: [
        { amount: 199, expiry: 7 },
        { amount: 299, expiry: 15 },
        { amount: 399, expiry: 20 },
        { amount: 699, expiry: 25 },
        { amount: 799, expiry: 28 },
        { amount: 1299, expiry: 30 }
    ],
    tnt: [
        { amount: 199, expiry: 7 },
        { amount: 299, expiry: 15 },
        { amount: 399, expiry: 20 },
        { amount: 699, expiry: 25 },
        { amount: 1299, expiry: 30 }
    ],
    tm: [
        { amount: 199, expiry: 7 },
        { amount: 249, expiry: 10 },
        { amount: 299, expiry: 15 },
        { amount: 399, expiry: 20 },
        { amount: 699, expiry: 25 },
        { amount: 999, expiry: 30 }
    ]
};

const CONVENIENCE_CHARGE = 2.50;

// Helper function to generate promo description
function getPromoDescription(promo, promoType) {
    const { amount, expiry } = promo;
    let typeLabel = "";
    
    if (promoType === "data") {
        typeLabel = "Data";
    } else if (promoType === "dataUnli") {
        typeLabel = "Data + Unli Call & Text";
    } else if (promoType === "unliDataUnli") {
        typeLabel = "Unli Data + Unli Call & Text";
    } else if (promoType === "regular") {
        // For regular load, just show the amount
        return `₱${amount}`;
    }
    
    return `${typeLabel} ₱${amount} - Valid for ${expiry} days`;
}

// Function to render load options for a specific type
function renderLoadOptions(provider, loadType) {
    const optionsContainerId = loadType === "loadAmount" ? "loadOptions" : 
                               loadType === "data" ? "dataOptions" :
                               loadType === "dataUnli" ? "dataUnliOptions" : "unliDataUnliOptions";
    
    const optionsContainer = $(`#${optionsContainerId}`);
    
    optionsContainer.empty();
    $('#totalAmount').val('');
    
    // Show/hide otherAmount based on loadType
    if (loadType === "loadAmount") {
        if (provider) {
            $('#otherAmount').show();
        } else {
            $('#otherAmount').hide();
        }
    }
    
    if (!provider) return;
    
    let dataSet, typeLabel;
    
    if (loadType === "loadAmount") {
        dataSet = loadAmounts[provider];
        typeLabel = "regular";
    } else if (loadType === "data") {
        dataSet = dataAmounts[provider];
        typeLabel = "data";
    } else if (loadType === "dataUnli") {
        dataSet = dataUnliAmounts[provider];
        typeLabel = "dataUnli";
    } else if (loadType === "unliDataUnli") {
        dataSet = unliDataUnliAmounts[provider];
        typeLabel = "unliDataUnli";
    }
    
    dataSet.forEach(promo => {
        const { amount } = promo;
        const description = getPromoDescription(promo, typeLabel);
        optionsContainer.append(`
            <div class="form-check">
                <input class="form-check-input load-radio" type="radio" name="loadAmount" value="${amount}" id="${loadType}_${amount}" data-type="${loadType}">
                <label class="form-check-label" for="${loadType}_${amount}">${description}</label>
            </div>
        `);
    });
    
    // Only show "Others" option for Load Amount
    if (loadType === "loadAmount") {
        optionsContainer.append(`
            <div class="form-check">
                <input class="form-check-input load-radio" type="radio" name="loadAmount" value="other" id="${loadType}_other" data-type="${loadType}">
                <label class="form-check-label" for="${loadType}_other">Others</label>
            </div>
        `);
    }
}

$(document).ready(function() {
    $('#telcoProvider').change(function() {
        const provider = $(this).val();
        
        if (provider) {
            // Render all load types
            renderLoadOptions(provider, "loadAmount");
            renderLoadOptions(provider, "data");
            renderLoadOptions(provider, "dataUnli");
            renderLoadOptions(provider, "unliDataUnli");
        } else {
            // Hide all options when no provider is selected
            $('#loadOptions').empty();
            $('#dataOptions').empty();
            $('#dataUnliOptions').empty();
            $('#unliDataUnliOptions').empty();
            $('#otherAmount').hide().val('').prop('disabled', true);
            $('#totalAmount').val('');
        }
    });

    $(document).on('change', '.load-radio', function() {
        const value = $(this).val();
        const loadType = $(this).data('type');
        
        if (loadType === "loadAmount") {
            // Only handle custom amount for Load Amount tab
            if (value === 'other') {
                $('#otherAmount').prop('disabled', false).focus();
                $('#totalAmount').val('');
            } else {
                $('#otherAmount').val('').prop('disabled', true);
                const total = parseFloat(value) + CONVENIENCE_CHARGE;
                $('#totalAmount').val('₱' + total.toFixed(2));
            }
        } else {
            // For other tabs, just calculate total
            $('#otherAmount').val('').prop('disabled', true);
            const total = parseFloat(value) + CONVENIENCE_CHARGE;
            $('#totalAmount').val('₱' + total.toFixed(2));
        }
    });

    // Handler for custom amount in Load Amount tab
    $(document).on('input', '#otherAmount', function() {
        const amount = parseFloat($(this).val());
        const provider = $('#telcoProvider').val();
        const dataSet = loadAmounts[provider];
        
        // Check if the entered amount matches any available option
        const matchedOption = dataSet.find(p => p.amount === amount);
        
        if (matchedOption) {
            $('#loadAmount_' + amount).prop('checked', true);
            const total = matchedOption.amount + CONVENIENCE_CHARGE;
            $('#totalAmount').val('₱' + total.toFixed(2));
            // Clear and disable the textbox after matching
            $(this).val('').prop('disabled', true);
        } else if (!isNaN(amount) && amount > 0) {
            $('#totalAmount').val('');
        } else {
            $('#totalAmount').val('');
        }
    });
});
