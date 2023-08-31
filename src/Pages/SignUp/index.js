import { useState, useEffect } from "react";
import './style.css';

function SignUp() {
  const initialValues = { email: '', password: '', username: '', confirmPassword: '', agreeTerms: false };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) =>
      type === 'checkbox' ? { ...prevValues, [name]: checked } : { ...prevValues, [name]: value }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 5) {
      errors.password = 'Password must be more than 5 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }

    if (!values.username) {
      errors.username = 'Username is required!';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed up successfully</div>
      ) : (
        <pre>{JSON.stringify(formErrors, null, 2)}</pre>
      )}
      <form onSubmit={handleSubmit} className="form">
        <div className="ee">
          {/* <img src={image} className="img" alt="Image" /> */}
          <h1>Sign up</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <input
              
                type="text"
                name="username"
                placeholder="Username..."
                value={formValues.username}
                onChange={handleChange}
                className="ii"
              />

            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <input
                type="text"
                name="email"
                placeholder="Email..."
                value={formValues.email}
                onChange={handleChange}
                className="ii"
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Password..."
                value={formValues.password}
                onChange={handleChange}
                className="ii"
              />
            </div>
            <p>{formErrors.password}</p>
            <div className="field">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password..."
                value={formValues.confirmPassword}
                onChange={handleChange}
                className="ii"
              />
            </div>
            <p>{formErrors.confirmPassword}</p>
            <div className="field">
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formValues.agreeTerms}
                  onChange={handleChange}
                />
                I agree to the terms and conditions
              </label>
            </div>
            <button className="fluid ui button blue">SignUp</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;