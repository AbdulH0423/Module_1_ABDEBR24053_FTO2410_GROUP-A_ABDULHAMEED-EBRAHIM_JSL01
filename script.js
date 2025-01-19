function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    const regex = /^pet_[0-9a-zA-Z]+$/;

    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


