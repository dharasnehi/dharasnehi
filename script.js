document.getElementById('calculate-button').addEventListener('click', calculatePlasticFootprint);

function calculatePlasticFootprint() {
    document.getElementById('calculate-button').addEventListener('click', calculatePlasticFootprint);

    function calculatePlasticFootprint() {

        const sodaUsage = parseInt(document.getElementById('soda-usage').value) || 0;
        const groceryBagsUsage = parseInt(document.getElementById('grocery-bags-usage').value) || 0;
        const foodWrappersUsage = parseInt(document.getElementById('food-wrappers-usage').value) || 0;
        const yogurtContainersUsage = parseInt(document.getElementById('yogurt-containers-usage').value) || 0;
        const cottonSwabsUsage = parseInt(document.getElementById('cotton-swabs-usage').value) || 0;
        const cleaningProductsUsage = parseInt(document.getElementById('cleaning-products-usage').value) || 0;
        const takeoutBoxesUsage = parseInt(document.getElementById('takeout-boxes-usage').value) || 0;
        const takeoutCupsUsage = parseInt(document.getElementById('takeout-cups-usage').value) || 0;
        const strawsUsage = parseInt(document.getElementById('straws-usage').value) || 0;
        const cutleryUsage = parseInt(document.getElementById('cutlery-usage').value) || 0;
        const platesUsage = parseInt(document.getElementById('plates-usage').value) || 0;
        const babyBottlesUsage = parseInt(document.getElementById('baby-bottles-usage').value) || 0;
        const cdDvdUsage = parseInt(document.getElementById('cd-dvd-usage').value) || 0;
        const cosmeticBottlesUsage = parseInt(document.getElementById('cosmetic-bottles-usage').value) || 0;
        const toothbrushesUsage = parseInt(document.getElementById('toothbrushes-usage').value) || 0;
        const toothpasteUsage = parseInt(document.getElementById('toothpaste-usage').value) || 0;
        const bulkItemsUsage = parseInt(document.getElementById('bulk-items-usage').value) || 0;
        const eyeglassesUsage = parseInt(document.getElementById('eyeglasses-usage').value) || 0;


        const conversionFactors = {
            soda: 500,  // 500 grams per soda bottle
            groceryBags: 15,  // 15 grams per plastic grocery bag
            foodWrappers: 5,  // 5 grams per food wrapper
            yogurtContainers: 20,  // 20 grams per yogurt container
            cottonSwabs: 1,  // 1 gram per cotton swab
            cleaningProducts: 100,  // 100 grams per detergent or cleaning products bottle
            takeoutBoxes: 50,  // 50 grams per takeout box
            takeoutCups: 30,  // 30 grams per takeout cup
            straws: 2,  // 2 grams per straw
            cutlery: 10,  // 10 grams per set of disposable cutlery
            plates: 25,  // 25 grams per plastic plate
            babyBottles: 150,  // 150 grams per baby bottle or sippy cup
            cdDvd: 50,  // 50 grams per CD or DVD
            cosmeticBottles: 60,  // 60 grams per shampoo or cosmetic bottle
            toothbrushes: 20,  // 20 grams per toothbrush
            toothpaste: 50,  // 50 grams per toothpaste
            bulkItems: 1000,  // 1000 grams per bulk plastic item
            eyeglasses: 30  // 30 grams per pair of eyeglasses
        };


        const totalUsage = (sodaUsage * conversionFactors.soda) +
            (groceryBagsUsage * conversionFactors.groceryBags) +
            (foodWrappersUsage * conversionFactors.foodWrappers) +
            (yogurtContainersUsage * conversionFactors.yogurtContainers) +
            (cottonSwabsUsage * conversionFactors.cottonSwabs) +
            (cleaningProductsUsage * conversionFactors.cleaningProducts) +
            (takeoutBoxesUsage * conversionFactors.takeoutBoxes) +
            (takeoutCupsUsage * conversionFactors.takeoutCups) +
            (strawsUsage * conversionFactors.straws) +
            (cutleryUsage * conversionFactors.cutlery) +
            (platesUsage * conversionFactors.plates) +
            (babyBottlesUsage * conversionFactors.babyBottles) +
            (cdDvdUsage * conversionFactors.cdDvd) +
            (cosmeticBottlesUsage * conversionFactors.cosmeticBottles) +
            (toothbrushesUsage * conversionFactors.toothbrushes) +
            (toothpasteUsage * conversionFactors.toothpaste) +
            (bulkItemsUsage * conversionFactors.bulkItems) +
            (eyeglassesUsage * conversionFactors.eyeglasses);


        const totalKg = totalUsage / 1000;
        const footprint = totalKg.toFixed(2);
        document.getElementById('footprint-result').textContent = `${footprint} kg`;
        document.getElementById('results').style.display = 'block';


        updateProgressBar(totalKg);
    }

    function updateProgressBar(footprintKg) {
        const progressBar = document.getElementById('progress-fill');
        const maxFootprint = 100;
        const percentage = (footprintKg / maxFootprint) * 100;
        progressBar.style.width = Math.min(percentage, 100) + '%';


        if (percentage <= 25) {
            // Low footprint, green level
            progressBar.style.backgroundColor = '#4CAF50';
        } else if (percentage <= 50) {
            // Moderate footprint, yellow level
            progressBar.style.backgroundColor = '#FFC107';
        } else if (percentage <= 75) {
            // High footprint, orange level
            progressBar.style.backgroundColor = '#FF9800';
        } else {
            // Very high footprint, red level
            progressBar.style.backgroundColor = '#F44336';
        }
    }

    const footprint = totalKg.toFixed(2);
    document.getElementById('footprint-result').textContent = `${footprint} kg`;
    document.getElementById('results').style.display = 'block';

    // Update the progress bar
    updateProgressBar(totalKg);
}

function updateProgressBar(footprintKg) {
    const progressBar = document.getElementById('progress-fill');
    const maxFootprint = 100; // Set your maximum acceptable footprint here (in kg)
    const percentage = (footprintKg / maxFootprint) * 100;
    progressBar.style.width = Math.min(percentage, 100) + '%';

    // You can also add different levels based on the percentage and provide feedback to the user
    if (percentage <= 25) {
        // Low footprint, green level
        progressBar.style.backgroundColor = '#4CAF50';
    } else if (percentage <= 50) {
        // Moderate footprint, yellow level
        progressBar.style.backgroundColor = '#FFC107';
    } else if (percentage <= 75) {
        // High footprint, orange level
        progressBar.style.backgroundColor = '#FF9800';
    } else {
        // Very high footprint, red level
        progressBar.style.backgroundColor = '#F44336';
    }
}

document.getElementById("myButton").onclick = function () {
    location.href = "https://www.instagram.com/dharasnehi/?hl=en";
};

function submitForm() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var emailSubject = "New Form Submission from " + name;
    var emailBody = "Name: " + name + "\nAge: " + age;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "dharasnehiyp@gmail.com",
        Password: "AE0DB32583040786A77543EA8E482827802A",
        To: "dharasnehiyp@gmail.com", // Replace with your recipient email
        From: "aviraltyagi198@gmail.com", // Replace with your sender email
        Subject: emailSubject,
        Body: emailBody
    }).then(
        message => alert(message)
    );
}