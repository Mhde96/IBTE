const BootstrapScript = document.createElement('script');


// Set the attributes
BootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js?v=' + Date.now();
BootstrapScript.crossOrigin = 'anonymous';

// Append the script to the document head or body

document.body.appendChild(BootstrapScript);

// Optional: Add an event listener to check when the script is loaded
BootstrapScript.onload = () => {
    console.log('Bootstrap JS loaded successfully!');
};




const jQueryScript = document.createElement('script');
jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js?v=' + Date.now();
jQueryScript.crossOrigin = 'anonymous';

document.body.appendChild(jQueryScript);

jQueryScript.onload = () => {

    console.log('jQuery loaded successfully!');
};
