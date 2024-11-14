import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

function Contact() {
  const [loading, setLoading] = useState(true);

  // Simulating an API call or async operation with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);
  }, []);

  const [formData] = useState({
    name: "Ian De los Reyes",
    email: "idelosreyes158@gmail.com",
    message: "09525810593",
  });

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="secondary" size="lg" />
        </div>
      ) : (
        <div>
          <h2>Contact Me</h2>
          <p>
            If you'd like to get in touch, please feel free to send me a message via my email
            or the contact info below. I’d be happy to hear from you.
          </p>
          <p>
            <strong>Name:</strong> {formData.name}
            <br />
            <strong>Email:</strong> {formData.email}
            <br />
            <strong>Contact:</strong> {formData.message}
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
