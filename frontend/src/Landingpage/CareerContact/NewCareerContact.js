import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewCareerContact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const NewCareerContact = () => {
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

  const handleFileChange = (e) => {
  setFormData({ ...formData, resume: e.target.files[0] });
};


  return (
    <div className="contact-wrapper">
      <ToastContainer />
      <div className="contact-left">
        <h1 className="contact-title">Join the Genius Team  </h1>
        <p className="contact-subtitle">
          At KG Genius Labs, we believe in building technology that empowers people 
and transforms businesses. 
            If you’re passionate about innovation, problem-solving, and continuous learning, you’ll fit 
right in! 
        </p>
        {/* <button className="contact-btn-outline">Contact Us</button> */}
      </div>

      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
  <h4 className="form-title">Apply for a Job</h4>

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
      {errors.username && <small className="text-danger">{errors.username}</small>}
    </div>

    <div className="form-group">
      <label>Phone</label>
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
      {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
    </div>
  </div>

  <div className="form-row">
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
      {errors.email && <small className="text-danger">{errors.email}</small>}
    </div>

    <div className="form-group">
      <label>Experience (in years)</label>
      <input
        type="number"
        className="form-control"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Ex: 2"
        required
        min="0"
      />
      {errors.experience && <small className="text-danger">{errors.experience}</small>}
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Current Company Name</label>
      <input
        type="text"
        className="form-control"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Ex: Harris Pumps"
        required
      />
      {errors.companyName && <small className="text-danger">{errors.companyName}</small>}
    </div>

    <div className="form-group">
      <label>Designation</label>
      <input
        type="text"
        className="form-control"
        name="designation"
        value={formData.designation}
        onChange={handleChange}
        placeholder="Ex: Software Engineer"
        required
      />
      {errors.designation && <small className="text-danger">{errors.designation}</small>}
    </div>
  </div>

  <div className="form-row">
    <div className="form-group form-group-full">
      <label>Skills</label>
      <textarea
        className="form-control"
        name="skills"
        rows="3"
        value={formData.skills}
        onChange={handleChange}
        placeholder="Ex: Java, ERP, Odoo"
        required
      ></textarea>
      {errors.skills && <small className="text-danger">{errors.skills}</small>}
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Do you have knowledge in ERP?</label>
      <select
        className="form-control"
        name="erpKnowledge"
        value={formData.erpKnowledge}
        onChange={handleChange}
        required
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      {errors.erpKnowledge && <small className="text-danger">{errors.erpKnowledge}</small>}
    </div>

    <div className="form-group">
      <label>Notice Period</label>
      <input
        type="text"
        className="form-control"
        name="noticePeriod"
        value={formData.noticePeriod}
        onChange={handleChange}
        placeholder="Ex: 1 month"
        required
      />
      {errors.noticePeriod && <small className="text-danger">{errors.noticePeriod}</small>}
    </div>
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Current CTC</label>
      <input
        type="text"
        className="form-control"
        name="currentCTC"
        value={formData.currentCTC}
        onChange={handleChange}
        placeholder="Ex: 5 LPA"
        required
      />
      {errors.currentCTC && <small className="text-danger">{errors.currentCTC}</small>}
    </div>

    <div className="form-group">
      <label>Expected CTC</label>
      <input
        type="text"
        className="form-control"
        name="expectedCTC"
        value={formData.expectedCTC}
        onChange={handleChange}
        placeholder="Ex: 7 LPA"
        required
      />
      {errors.expectedCTC && <small className="text-danger">{errors.expectedCTC}</small>}
    </div>
  </div>

  <div className="form-row">
    <div className="form-group form-group-full">
      <label>Upload Your Resume</label>
      <input
        type="file"
        className="form-control"
        name="resume"
        onChange={handleFileChange}
        accept=".pdf,.doc,.docx"
        required
      />
      {errors.resume && <small className="text-danger">{errors.resume}</small>}
    </div>
  </div>

  <button type="submit" className="btn-gradient" disabled={loading}>
    {loading ? "Submitting..." : "Submit"}
  </button>

  <p className="privacy-text">
    The information you provide in this form will be used to process your request
    and keep you informed about our services, in line with KG Genius Lab's Privacy Policy
    <a href="#">Privacy Policy</a>
  </p>
</form>

      </div>
    </div>
  );
}

export default NewCareerContact

