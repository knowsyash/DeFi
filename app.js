document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the "Connect Wallet" button
    document.getElementById('connectWalletBtn').addEventListener('click', connectWallet);
  
    // Event listener for the contact form submission
    document.getElementById('contactForm').addEventListener('submit', submitContactForm);
  });
  
  // Function to handle the "Connect Wallet" button click
  async function connectWallet() {
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
  
        // Use the injected Web3 provider
        const web3 = new Web3(window.ethereum);
  
        // Get the selected account
        const accounts = await web3.eth.getAccounts();
        const selectedAccount = accounts[0];
  
        // Log the connected account
        console.log('Connected to wallet. Selected account:', selectedAccount);
      } else {
        // MetaMask is not installed, prompt user to install it
        alert('Do you want to see our presentation.');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error.message);
    }
  }
  
  // Function to handle contact form submission
  function submitContactForm(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Validate form data (you can add more validation as needed)
  
    // For now, log the form data
    console.log('Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  }
  