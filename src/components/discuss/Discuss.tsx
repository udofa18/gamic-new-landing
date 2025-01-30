"use client";
import { Checkbox, Input } from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Alert } from 'antd';

const Discuss = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilephone: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  };
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, mobilephone: value }));
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };

  const [alert, setAlert] = useState<{ message: string; type: 'warning' | 'error' | 'success' } | null>(null);

  const validateForm = () => {
    const { firstname, lastname, email, mobilephone, message } = formData;

    if (!firstname || !lastname || !email || !mobilephone || !message) {
      setAlert({ message: 'Please fill in all the details.', type: 'warning' });
      return false;
    }

    if (!isChecked) {
      setAlert({ message: 'Please agree to the privacy policy.', type: 'warning' });
      return false;
    }

    // Clear any existing alert if validation passes
    setAlert(null);
    return true;
  };
  return (
    <div className="flex lg:p-36 py-20 p-4 lg:px-40  bg-white">
      <div className="lg:w-1/2  flex flex-col justify-between   text-black pb-5">
        <h1 className="font-[Avenir-Heavy] lg:text-[40px] text-[30px]">
          Have feedback, ideas, or partnership opportunities?
        </h1>
        <p className="lg:text-[20px] text-[18px] text-[#666666]">
          Our friendly team would love to hear from you.{" "}
        </p>
        <div className="text-[#344054] py-4">
          <form
            className="flex flex-col gap-8"
            action="https://getform.io/f/bollpvra"
            method="POST"
            onSubmit={(e) => {
              if (!validateForm()) {
                e.preventDefault(); // Prevent form submission if validation fails
              }
            }}
          >
            <div className="flex gap-10 w-full">
              <span className="flex flex-col gap-2 w-full ">
                <label className="text-[14px]">First name</label>
                <Input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  placeholder="First name"
                  required
                />
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label className="text-[14px]">Last name</label>
                <Input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  required
                />
              </span>
            </div>
            <span className="flex flex-col gap-2">
              <label className="text-[14px]">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="you@company.com"
                required
              />
            </span>
            <span className="flex flex-col gap-2">
              <label className="text-[14px]">Phone number</label>
              <PhoneInput
                placeholder="+1 (555) 000-0000"
                country="US"
                className="border p-2"
                value={formData.mobilephone}
                onChange={handlePhoneChange}
                required
              />
            </span>
            <span className="flex flex-col gap-2">
              <label className="text-[14px]">Message</label>
              <TextArea
                style={{ height: "110px" }}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Leave us a message..."
                required
              />
            </span>
            <span className="flex item-center gap-2">
              <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
              <p onClick={handleCheckboxChange} style={{ cursor: "pointer" }}>
                You agree to our friendly <a href="/policy" className="underline" target="_blank">privacy policy.</a>
              </p>
            </span>
            <span className="flex flex-col item-center gap-2">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#FB6320] shadow-inner text-white p-4 border-none hover:bg-[#FB6320]/50 w-full rounded-md items-center flex gap-4 text-center justify-center ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          closable
          onClose={() => setAlert(null)} // Dismiss the alert
        />
      )}
            </span>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 hidden lg:block ">
        <div className="m-auto flex items-right">
          <img src="/ui/feedback.svg" className="m-auto h-[840px]" />
        </div>
      </div>
    </div>
  );
};

export default Discuss;
