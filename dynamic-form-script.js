document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("dynamic-form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Perform form validation here if needed
  
      // Example: Retrieve form data
      const formData = new FormData(form);
      const formDataObject = Object.fromEntries(formData.entries());
  
      console.log(formDataObject);
      alert("Form submitted successfully!");
    });
  });