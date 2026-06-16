document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // 1. Prevent the page from reloading traditionally
    event.preventDefault();

    // 2. Extract values from input fields
    const recipient = "renniehair@gmail.com";
    const clientName = document.getElementById("name").value;
    const clientPhone =
      document.getElementById("phone").value || "Not Provided";
    const clientEmail = document.getElementById("email").value;
    const clientSubject = document.getElementById("Subject").value;
    const clientMessage = document.getElementById("textarea").value;

    // 3. Construct a professional email body layout
    // \n creates clean line breaks inside text-only email clients
    const emailBody =
      `New Booking Inquiry via Website:\n\n` +
      `Name: ${clientName}\n` +
      `Email: ${clientEmail}\n` +
      `Phone: ${clientPhone}\n\n` +
      `Message:\n${clientMessage}`;

    // 4. Safely encode data to handle spaces, punctuation, and line breaks safely
    const encodedSubject = encodeURIComponent(
      `[Renniehair Inquiry] ${clientSubject}`,
    );
    const encodedBody = encodeURIComponent(emailBody);

    // 5. Build full mailto string and execute redirect launch
    window.location.href = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
  });
