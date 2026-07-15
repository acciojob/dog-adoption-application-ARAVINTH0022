//your code here
// Clear body
document.body.innerHTML = '';

// Create Form
const form = document.createElement('form');
form.style.maxWidth = '500px';
form.style.margin = '20px auto';
form.style.padding = '20px';
form.style.border = '1px solid #ccc';
form.style.borderRadius = '8px';
form.style.fontFamily = 'Arial, sans-serif';

// Helper to create labels and inputs
const createField = (labelText, id, type, placeholder, value = null) => {
    const div = document.createElement('div');
    div.style.marginBottom = '15px';

    const label = document.createElement('label');
    label.innerText = labelText;
    label.style.display = 'block';
    label.style.marginBottom = '5px';
    label.style.fontWeight = 'bold';
    
    let input;
    if (type === 'select') {
        input = document.createElement('select');
        input.multiple = true; // Make it a multi-select
        input.style.width = '100%';
        input.style.height = '100px';
        
        // Add 3 options
        const options = ['Golden Retriever', 'Poodle', 'Basset Hound'];
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.innerText = opt;
            input.appendChild(option);
        });
    } else if (type === 'checkbox') {
        input = document.createElement('input');
        input.type = 'checkbox';
        input.value = value;
        input.style.marginRight = '10px';
        
        // For checkbox, the label text is the value description
        label.innerText = value; 
    } else {
        input = document.createElement('input');
        input.type = type;
        input.id = id;
        input.name = id;
        input.placeholder = placeholder;
        input.style.width = '100%';
        input.style.padding = '8px';
        input.style.boxSizing = 'border-box';
    }

    if (type !== 'checkbox') {
        div.appendChild(label);
        div.appendChild(input);
    } else {
        // Checkbox layout: input then label text
        div.appendChild(input);
        const span = document.createElement('span');
        span.innerText = value;
        div.appendChild(span);
    }

    return div;
};

// 1. Name
form.appendChild(createField('Name', 'name', 'text', 'Name'));

// 2. Phone Number
form.appendChild(createField('Phone Number', 'phone', 'text', 'Phone Number'));

// 3. Address
form.appendChild(createField('Address', 'address', 'text', 'Address'));

// 4. Checkbox (Have you ever lived with a Dog before?)
const checkboxDiv = document.createElement('div');
checkboxDiv.style.marginBottom = '15px';
const checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
checkboxInput.id = 'checkbox';
checkboxInput.name = 'checkbox';
checkboxInput.value = 'Have you ever lived with a Dog before?';
const checkboxLabel = document.createElement('span');
checkboxLabel.innerText = 'Have you ever lived with a Dog before?';
checkboxDiv.appendChild(checkboxInput);
checkboxDiv.appendChild(checkboxLabel);
form.appendChild(checkboxDiv);

// 5. Multi-Select (Preferred breeds)
const selectDiv = document.createElement('div');
selectDiv.style.marginBottom = '15px';
const selectLabel = document.createElement('label');
selectLabel.innerText = 'Please select your preferred breeds';
selectLabel.style.display = 'block';
selectLabel.style.marginBottom = '5px';
selectLabel.style.fontWeight = 'bold';

const multiSelect = document.createElement('select');
multiSelect.id = 'multiSelect';
multiSelect.name = 'multiSelect';
multiSelect.multiple = true; // Essential for multi-select
multiSelect.style.width = '100%';
multiSelect.style.height = '100px';
multiSelect.style.padding = '5px';

const breeds = ['Golden Retriever', 'Poodle', 'Basset Hound', 'Labrador'];
breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed;
    option.innerText = breed;
    multiSelect.appendChild(option);
});

selectDiv.appendChild(selectLabel);
selectDiv.appendChild(multiSelect);
form.appendChild(selectDiv);

// 6. Submit Button
const submitBtn = document.createElement('input');
submitBtn.type = 'submit';
submitBtn.value = 'Submit';
submitBtn.style.padding = '10px 20px';
submitBtn.style.backgroundColor = '#007BFF';
submitBtn.style.color = 'white';
submitBtn.style.border = 'none';
submitBtn.style.borderRadius = '4px';
submitBtn.style.cursor = 'pointer';
submitBtn.style.width = '100%';
form.appendChild(submitBtn);

document.body.appendChild(form);   