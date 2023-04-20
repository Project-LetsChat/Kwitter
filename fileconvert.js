// File input element
const fileInput = document.getElementById('fileInput');

// Format select element
const formatSelect = document.getElementById('formatSelect');

// Form submit event
document.getElementById('fileConverterForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Check if a file is selected
  if (!fileInput.files || fileInput.files.length === 0) {
    alert('Please select a file.');
    return;
  }

  // Get selected format
  const selectedFormat = formatSelect.value;

  // Get file data
  const file = fileInput.files[0];
  const fileData = new FormData();
  fileData.append('file', file);

  try {
    // Send file data to server for conversion
    const response = await fetch(`/convert?format=${selectedFormat}`, {
      method: 'POST',
      body: fileData
    });

    // Check response status
    if (response.status === 200) {
      const downloadUrl = await response.text();
      // Display download link
      document.getElementById('resultMessage').innerHTML = `<a href="${downloadUrl}" download>Download Converted File</a>`;
    } else {
      alert('File conversion failed. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('File conversion failed. Please try again.');
  }
});
