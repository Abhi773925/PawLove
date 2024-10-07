const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pet, ...formData }),
      });
  
      if (response.ok) {
        setSubmissionStatus('Order placed successfully!');
        setFormData({
          name: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          phone: '',
          email: ''
        });
        navigate('/thank-you'); // Redirect to a thank you page or similar
      } else {
        const result = await response.json();
        setSubmissionStatus(result.message || 'Failed to place order. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('An error occurred. Please try again.');
      console.error('Error submitting form:', error);
    }
  };
  