import React, { Component, useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Setting from "./Setting";

const TabForm = () => {
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "Chaitanya",
    age: 19,
    email: "chaitanya@gmial.com",
    interest: ["coding", "study", "music"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validation: ()=>{
        const err = {}
        if(!data.name || data.name < 2){
            err.name = "Name is not valid"
        }
        if(!data.age || data.age < 18){
            err.age = "Age is not valid"
        }
        if(!data.email || data.email.length < 2){
            err.email = "Email is not valid"
        }
        setError(err);
        return err.name || err.age || err.email ? false : true;
      }
    },
    {
      name: "Interests",
      component: Interests,
      validation: ()=>{
        const err = {}
        if(data.interest.length < 1){
            err.interest = "Select atleast one interests"
        }
       
        setError(err);
        return err.interest ? false : true;
      }
    },
    {
      name: "Setting",
      component: Setting,
      validation: ()=>{
        return true; 
      }
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  const handleNextClick = () => {
    if(tabs[activeTab].validation()){
        setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
     if(tabs[activeTab].validation()){
        setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmitClick = () => {
     if(tabs[activeTab].validation()){
       console.log(data);
       
    }
  };
  return (
<div className="form-container">
  <div className="tabs-header">
    {tabs.map((t, index) => (
      <div
        key={index}
        onClick={() => tabs[activeTab].validation() && setActiveTab(index)}
        className={`tab-item ${activeTab === index ? "active" : ""}`}
      >
        <span className="tab-number">{index + 1}</span>
        {t.name}
      </div>
    ))}
  </div>

  <div className="tab-body">
    <ActiveTabComponent data={data} setData={setData} errors={error} />
  </div>

  <div className="tab-footer">
    {activeTab > 0 && (
      <button className="btn-secondary" onClick={handlePrevClick}>
        Back
      </button>
    )}
    
    <div className="footer-right">
      {activeTab < tabs.length - 1 ? (
        <button className="btn-primary" onClick={handleNextClick}>
          Next Step
        </button>
      ) : (
        <button className="btn-submit" onClick={handleSubmitClick}>
          Complete Registration
        </button>
      )}
    </div>
  </div>
</div>
  );
};

export default TabForm;
