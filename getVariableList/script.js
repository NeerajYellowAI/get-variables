const textarea = document.getElementById('data');
const textareaResult = document.getElementById('result');
const generateLinkButton = document.getElementById('generateLink');

// Get the value from the textarea
const textareaValue = textarea.value;

// Log the value to the console (you can use it as needed)
console.log(textareaValue);

// Example: Attach an event listener to a button to get the value when the button is clicked
const getValueButton = document.getElementById('getValueButton');
getValueButton.addEventListener('click', () => {
    const textareaValue = textarea.value;
    let data =
        typeof textareaValue === 'string'
            ? JSON.parse(textareaValue).data
            : textareaValue.data;
    textareaResult.value = Object.keys(data).join('\n');
    console.log('Textarea value:', Object.keys(data));
});

generateLinkButton.addEventListener('click', () => {
    // Get the values from the input fields
    const region = document.getElementById('region').value;
    const botId = document.getElementById('botId').value;

    // Validate the values (you can add more validation logic if needed)
    if (!region || !botId) {
        alert('Please enter values for Region and BotId');
        return;
    }

    // Construct the URL based on the values
    const url = `https://${encodeURIComponent(
        region
    )}.cloud.yellow.ai/api/ai/variables?bot=${encodeURIComponent(botId)}`;
    // Open the URL in a new tab
    window.open(url, '_blank');
});
