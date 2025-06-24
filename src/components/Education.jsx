import React, { useState } from "react";
import expandMore from "../assets/icons/expand-more.png";
import expandLess from "../assets/icons/expand-less.png";
import education from "../assets/icons/education.png";

function Education({ Education, setEducation }) {
  const [visible, setVisible] = useState(false);

  const toggleForm = () => setVisible(!visible);

  const formHandler = (e) => {
    const { name, value } = e.target;

    const updateNested = (section, key) => {
      setEducation((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: value,
        },
      }));
    };

    switch (name) {
      case "collegeName":
        updateNested("undergraduate", "instituteName");
        break;
      case "cgpa":
        updateNested("undergraduate", "CGPA");
        break;
      case "degree":
        updateNested("undergraduate", "degree");
        break;
      case "collegeCity":
        updateNested("undergraduate", "collegeCity");
        break;
      case "startDate":
        updateNested("undergraduate", "startDate");
        break;
      case "endDate":
        updateNested("undergraduate", "endDate");
        break;
      case "highSchoolName":
        updateNested("higherSecondary", "hSchoolName");
        break;
      case "stream":
        updateNested("higherSecondary", "stream");
        break;
      case "percentage_12":
        updateNested("higherSecondary", "percentage_12");
        break;
      case "hSchoolCity":
        updateNested("higherSecondary", "hSchoolCity");
        break;
      case "hSchoolStartDate":
        updateNested("higherSecondary", "hSchoolStartDate");
        break;
      case "hSchoolEndDate":
        updateNested("higherSecondary", "hSchoolEndDate");
        break;
      case "schoolName":
        updateNested("Secondary", "schoolName");
        break;
      case "percentage_10":
        updateNested("Secondary", "percentage_10");
        break;
      case "schoolCity":
        updateNested("Secondary", "schoolCity");
        break;
      case "SchoolStartDate":
        updateNested("Secondary", "SchoolStartDate");
        break;
      case "SchoolEndDate":
        updateNested("Secondary", "SchoolEndDate");
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full max-w-[480px] sm:w-[90%] md:w-[480px] mx-auto shadow-lg shadow-gray-400 bg-white rounded-lg flex flex-col transition-all duration-500 ease-in-out">
      {/* Header */}
      <div
        className="flex items-center justify-around mt-6 cursor-pointer px-4"
        onClick={toggleForm}
      >
        <img className="w-[50px]" src={education} alt="icon" />
        <p className="text-lg font-bold text-center flex-1">Educational Qualification</p>
        <img
          src={visible ? expandLess : expandMore}
          className="w-[20px] transition-transform duration-300 ease-in-out"
          alt="toggle"
        />
      </div>

      {/* Form Section */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
          visible ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <form className="pb-6 pt-4 space-y-6">
          {/* UNDERGRADUATE */}
          <div>
            <h2 className="font-bold text-base mb-2">
              Under Graduate Details <span className="text-red-600">*</span>
            </h2>
            <div className="space-y-2">
              <Input label="Institution" name="collegeName" onChange={formHandler} />
              <Input label="CGPA" name="cgpa" type="number" onChange={formHandler} />
              <Input label="Degree" name="degree" onChange={formHandler} />
              <Input label="City" name="collegeCity" onChange={formHandler} />
              <DateInputs startName="startDate" endName="endDate" onChange={formHandler} />
            </div>
          </div>

          {/* HIGHER SECONDARY */}
          <div>
            <h2 className="font-bold text-base mb-2">
              Higher Secondary Details <span className="text-red-600">*</span>
            </h2>
            <div className="space-y-2">
              <Input label="Institution" name="highSchoolName" onChange={formHandler} />
              <Input label="Stream" name="stream" onChange={formHandler} />
              <Input label="Percentage (%)" name="percentage_12" type="number" onChange={formHandler} />
              <Input label="City" name="hSchoolCity" onChange={formHandler} />
              <DateInputs
                startName="hSchoolStartDate"
                endName="hSchoolEndDate"
                onChange={formHandler}
              />
            </div>
          </div>

          {/* SECONDARY */}
          <div>
            <h2 className="font-bold text-base mb-2">
              Secondary Schooling Details <span className="text-red-600">*</span>
            </h2>
            <div className="space-y-2">
              <Input label="School" name="schoolName" onChange={formHandler} />
              <Input label="Percentage (%)" name="percentage_10" type="number" onChange={formHandler} />
              <Input label="City" name="schoolCity" onChange={formHandler} />
              <DateInputs
                startName="SchoolStartDate"
                endName="SchoolEndDate"
                onChange={formHandler}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Reusable Input Component
const Input = ({ label, name, type = "text", onChange }) => (
  <div className="flex flex-col">
    <label className="font-semibold opacity-80">{label}</label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      className="bg-[#eef0f4] px-3 py-2 rounded-md outline-none"
      placeholder={`Enter ${label}`}
    />
  </div>
);

// Reusable Date Inputs
const DateInputs = ({ startName, endName, onChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block font-semibold opacity-70">Start Date</label>
      <input
        type="date"
        name={startName}
        onChange={onChange}
        className="bg-white px-3 py-2 rounded-md outline-none w-full"
      />
    </div>
    <div>
      <label className="block font-semibold opacity-70">End Date</label>
      <input
        type="date"
        name={endName}
        onChange={onChange}
        className="bg-white px-3 py-2 rounded-md outline-none w-full"
      />
    </div>
  </div>
);

export default Education;
