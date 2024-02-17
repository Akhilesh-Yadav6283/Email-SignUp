import "./app.css"
import { useState } from 'react';


export const SignupForm = () => {
  // State variables for input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for input validations
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Handle input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.value.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(e.target.value === password);
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form. Please check your inputs.');
    } 
  };

  return (
    <div className="form-container">
      <div>Email:</div>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: emailValid ? 'green' : 'red' }}
      />
      {!emailValid && <p className="error">Invalid email format</p>}

      <div>Password:</div>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: passwordValid ? 'green' : 'red' }}
      />
      {!passwordValid && <p className="error">Password must be at least 8 characters</p>}

      <div>Confirm Password:</div>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{ borderColor: confirmPasswordValid ? 'green' : 'red' }}
      />
      {!confirmPasswordValid && <p className="error">Passwords do not match</p>}
      <p></p>
      <button id="btn" onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

// export default App;

