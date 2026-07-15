//your code here
// Clear body
document.body.innerHTML = '';

const form = document.createElement('form');

// Helper for standard inputs
const createInput = (id, type, placeholder, value = null) => {
    const div = document.createElement('div');
    div.style.marginBottom = '15px';
    
    const label = document.createElement('label');
    label.innerText = id.charAt(0).toUpperCase() + id.slice(1); // Simple capitalization
    label.style.display = 'block';
    label.style.marginBottom = '5px';
    
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = id;
    if (placeholder) input.placeholder = placeholder;
    if (value) input.value = value;
    
    div.appendChild(label);
    div.appendChild(input);
    return div;
};

// 1. Name (Input 0)
form.appendChild(createInput('name', 'text', 'Name'));

// 2. Phone (Input 1)
form.appendChild(createInput('phone', 'text', 'Phone Number'));

// 3. Address (Input 2)
form.appendChild(createInput('address', 'text', 'Address'));

// 4. Checkbox (Input 3) - "Have you ever lived with a Dog before?"
const checkboxDiv = document.createElement('div');
checkboxDiv.style.marginBottom = '15px';
const checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
checkboxInput.id = 'checkbox';
checkboxInput.name = 'checkbox';
checkboxInput.value = 'Have you ever lived with a Dog before?';
const checkboxLabel = document.createElement('span');
checkboxLabel.innerText = ' Have you ever lived with a Dog before?';
checkboxDiv.appendChild(checkboxInput);
checkboxDiv.appendChild(checkboxLabel);
form.appendChild(checkboxDiv);

// 5. Multi-Select (NOT an input, so it doesn't affect input index)
const selectDiv = document.createElement('div');
selectDiv.style.marginBottom = '15px';
const selectLabel = document.createElement('label');
selectLabel.innerText = 'Please select your preferred breeds';
selectLabel.style.display = 'block';
selectLabel.style.marginBottom = '5px';
const multiSelect = document.createElement('select');
multiSelect.id = 'multiSelect';
multiSelect.name = 'multiSelect';
multiSelect.multiple = true;
['Golden Retriever', 'Poodle', 'Basset Hound'].forEach(breed => {
    const opt = document.createElement('option');
    opt.value = breed;
    opt.innerText = breed;
    multiSelect.appendChild(opt);
});
selectDiv.appendChild(selectLabel);
selectDiv.appendChild(multiSelect);
form.appendChild(selectDiv);

// 6. Submit Button (Input 4 - MUST have id="submit")
const submitDiv = document.createElement('div');
const submitBtn = document.createElement('input');
submitBtn.type = 'submit';
submitBtn.id = 'submit'; // CRITICAL FIX
submitBtn.name = 'submit';
submitBtn.value = 'Submit';
submitBtn.style.padding = '10px 20px';
submitBtn.style.backgroundColor = '#007BFF';
submitBtn.style.color = 'white';
submitBtn.style.border = 'none';
submitBtn.style.cursor = 'pointer';
submitDiv.appendChild(submitBtn);
form.appendChild(submitDiv);

document.body.appendChild(form);   