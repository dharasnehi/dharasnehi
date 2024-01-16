function updateSliderValue(sliderId, outputId) {
    const slider = document.getElementById(sliderId);
    const output = document.getElementById(outputId);
    output.textContent = slider.value;
  }

  function calculateFootprint() {
    const bottles = parseInt(document.getElementById('bottles').value) || 0;
    const bags = parseInt(document.getElementById('bags').value) || 0;
    const utensils = parseInt(document.getElementById('utensils').value) || 0;
    const straws = parseInt(document.getElementById('straws').value) || 0;
    const containers = parseInt(document.getElementById('containers').value) || 0;
    const cups = parseInt(document.getElementById('cups').value) || 0;
    const plates = parseInt(document.getElementById('plates').value) || 0;
    const cutlery = parseInt(document.getElementById('cutlery').value) || 0;
    const packaging = parseInt(document.getElementById('packaging').value) || 0;
    const other = parseInt(document.getElementById('other').value) || 0;

    const totalFootprint = bottles * 0.5 + bags * 0.2 + utensils * 0.1 + straws * 0.05 +
                          containers * 0.3 + cups * 0.15 + plates * 0.25 + cutlery * 0.2 +
                          packaging * 0.3 + other * 0.2;

    const colorBar = document.getElementById('colorBar');
    const resultText = document.getElementById('result');

    resultText.innerHTML = `Your plastic footprint is ${totalFootprint.toFixed(2)} kg per week.`;

    // Change color based on the plastic footprint
    if (totalFootprint > 5) {
      colorBar.style.backgroundColor = '#ff4d4d'; // Red
      resultText.innerHTML += "<br>Very high plastic footprint. Consider taking steps to reduce your plastic usage.";
    } else if (totalFootprint > 2) {
      colorBar.style.backgroundColor = '#ffd700'; // Yellow
      resultText.innerHTML += "<br>Moderate plastic footprint. Be mindful of your plastic usage and look for ways to reduce.";
    } else {
      colorBar.style.backgroundColor = '#4CAF50'; // Green
      resultText.innerHTML += "<br>Good job! Your plastic footprint is low. Keep up the eco-friendly habits!";
    }
  }

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