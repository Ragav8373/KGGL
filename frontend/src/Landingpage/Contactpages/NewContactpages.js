import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewContactpages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewContactpages() {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyWebsite: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [requestType, setRequestType] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const data = response.data;
        const codes = data.map((country) => ({
          name: country.name.common,
          code: country.idd?.root
            ? `${country.idd.root}${
                country.idd.suffixes ? country.idd.suffixes[0] : ""
              }`
            : "+1",
        }));
        setCountryCodes(codes);
      })
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateName = (username) => {
    const nameRegex = /^[A-Za-z\s.]{2,}$/;
    return nameRegex.test(username);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{7,15}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateWebsite = (url) => {
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return urlRegex.test(url);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!requestType) {
      newErrors.requestType = "Please select a request type.";
    }
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.username || !validateName(formData.username)) {
      newErrors.username = "Invalid username.";
    }
    if (!formData.phoneNumber || !validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter Valid Phone Number";
    }
    if (!formData.companyWebsite || !validateWebsite(formData.companyWebsite)) {
      newErrors.companyWebsite = "Please enter a valid website URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "username") {
      if (!validateName(value)) {
        setErrors((prev) => ({ ...prev, username: "Invalid name" }));
      } else {
        setErrors((prev) => ({ ...prev, username: undefined }));
      }
    }
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: "Invalid email address" }));
      } else {
        setErrors((prev) => ({ ...prev, email: undefined }));
      }
    }
    if (name === "phoneNumber") {
      if (!validatePhoneNumber(value)) {
        setErrors((prev) => ({
          ...prev,
          phoneNumber: "Enter Valid Phone Number",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
      }
    }
    if (name === "companyWebsite") {
      if (!validateWebsite(value)) {
        setErrors((prev) => ({ ...prev, companyWebsite: "Enter valid URL" }));
      } else {
        setErrors((prev) => ({ ...prev, companyWebsite: undefined }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const fullPhoneNumber = `${selectedCountryCode}${formData.phoneNumber}`;
    const formValues = {
      username: formData.username,
      email: formData.email,
      phno: fullPhoneNumber,
      company_name: formData.companyName,
      company_site: formData.companyWebsite,
      message: formData.description,
      request_type_id: requestType,
    };

    console.log(formValues);

    setLoading(true);
    axios
      .post("https://www.kggeniuslabs.com:5000/submit-form", formValues)
      .then((response) => {
        if (response.data.message === "Form submitted successfully") {
          toast.success("Form submitted successfully");
          resetForm();
        } else if (response.data.message === "Database error") {
          toast.error("Value not inserted, try again");
        } else if (response.data.message === "Email already exists") {
          toast.error("Email already exists");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        toast.error("An error occurred. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companyWebsite: "",
      description: "",
    });
    setSelectedCountryCode("+91");
    setRequestType("");
    setErrors({});
  };

  return (
    <div className="contact-wrapper">
      <ToastContainer />
      <div className="contact-left">
        <h1 className="contact-title">Let's Connect</h1>
        <p className="contact-subtitle">
          Explore how our customized IT solutions can elevate your business. Get in touch with our experts today!
        </p>
        <button className="contact-btn-outline">Contact Us</button>
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <h4 className="form-title">Request a meeting with our experts</h4>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Ex: Harris James"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && (
                <small className="text-danger">{errors.username}</small>
              )}
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <div className="input-row">
                <select
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                  required
                >
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  pattern="[0-9]*"
                  maxLength="15"
                />
              </div>
              {errors.phoneNumber && (
                <small className="text-danger">{errors.phoneNumber}</small>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Request Type</label>
              <select
                className="form-control"
                value={requestType}
                onChange={(e) => {
                  setRequestType(e.target.value);
                  if (e.target.value) {
                    setErrors((prev) => ({ ...prev, requestType: undefined }));
                  }
                }}
                required
              >
                {/* <option value="">Ex: Contact Sales</option> */}
                <option value="1">Contact Sales</option>
                <option value="2">General Inquiry</option>
                <option value="3">Partner Inquiry</option>
              </select>
              {errors.requestType && (
                <small className="text-danger">{errors.requestType}</small>
              )}
            </div>

            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Ex: harrispumps@gmail.com"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                className="form-control"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Ex: Harris Pumps"
                required
              />
            </div>

            <div className="form-group">
              <label>Company Website</label>
              <input
                type="url"
                className="form-control"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                placeholder="Ex: www.harrispumps.com"
                required
              />
              {errors.companyWebsite && (
                <small className="text-danger">{errors.companyWebsite}</small>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group form-group-full">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn-gradient" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>

          <p className="privacy-text">
            The information you provide in this form will be used to process your request and keep you inform about our services, in line with KG Genius Lab's Privacy Policy <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default NewContactpages;