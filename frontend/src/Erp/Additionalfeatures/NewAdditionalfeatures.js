
import React from "react";
import "./NewAdditionalfeatures.css";

function NewAdditionalfeatures() {
  const features = [
    "Mobile Friendly",
    "Multi-Currency",
    "Document Management",
    "Role Based Access",
    "Field Level Customization",
    "Mobile App",
    "Email & SMS Integration",
    "Report Builder",
    "Shared Calendar",
    "Customer, Vendor Portal",
    "Website and Web Forms",
    "Payment Integration",
    "Approval Workflows",
    "Customizable Reports",
  ];

  // Duplicate features for smooth infinite loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <div className="additional-features-container py-5">
      <h1 className="section-title1">Additional Features</h1>

      <div className="marquee">
        <div className="marquee-inner">
          {duplicatedFeatures.map((text, index) => (
            <div
              key={index}
              className={`feature-card ${
                index % 2 === 0 ? "dark-card" : "light-card"
              }`}
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewAdditionalfeatures;
