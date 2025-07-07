"use client";
import { updateUser } from "@/server/api";
import { getUserDetails } from "@/server/api";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProfileUpdation = () => {

  let id = localStorage.getItem("tba-token");
  // Dummy data as initial state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: {
      firstname: "",
      middlename: "",
      lastname: "",
    },
    profession: "",
    profilePhoto: null,
    email: {
      primary: "",
      alternate: "",
    },
    phone: {
      primary: "",
      alternate: "",
    },
    bloodGroup: "",
    maritalInfo: {
      status: "",
      spouseName: "",
      date: "",
    },
    gender: "",
    DOB: "",
    address: {
      residential: {
        addressLine: "",
        pincode: "",
        city: "",
        state: "",
        phone: "",
      },
      office: {
        addressLine: "",
        pincode: "",
        city: "",
        state: "",
        phone: "",
      },
    },
  });

  useEffect(() => {
    id = localStorage.getItem("tba-token");
    console.log("🚀 ~ useEffect ~ id:", id);
    if (id) {
      getUserDetails(id)
        .then((data) => {
          const user = data.user;
          console.log(user);

          setFormData(user);
          // console.log("user details", user)
          setFormData(user);
          setProfilePhotoPreview(user.image);
        })
        .catch((e) => console.log(e));
    }
  }, []);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  // Handle basic field changes
  const handleChange = (e, target) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [target]: value,
    }));
  };

  // Handle name changes
  const handleNameChange = (e, target) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      name: {
        ...prevData.name,
        [target]: value,
      },
    }));
  };

  // Handle email, phone, and marital info changes
  const handleNestedChange = (e, object, target) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [object]: {
        ...prevData[object],
        [target]: value,
      },
    }));
  };

  // Handle address changes
  const handleAddressChange = (e, addressOf, target) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      address: {
        ...prevData.address,
        [addressOf]: {
          ...prevData.address[addressOf],
          [target]: value,
        },
      },
    }));
  };

  // Handle photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhotoPreview(reader.result);
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: file,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    // Here you can add logic to save the updated profile
    const user  = {...formData}
    console.log("Profile :", user);
    try {
      const res = await updateUser(id, user);
      if (res) {
        toast.success("Profile updated successfully!");
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // You can add logic to reset to original data if needed
  };

  return (
    <>
      <div className="profile-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="profile-card">
                <div className="profile-header mt-4">
                  <h1 className="profile-title">Profile Information</h1>
                  <p className="profile-subtitle">
                    Manage your personal information
                  </p>

                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn btn-edit mt-3"
                    >
                      <i className="fas fa-edit me-2"></i>
                      Edit Profile
                    </button>
                  ) : (
                    <div className="mt-3">
                      <button
                        onClick={handleSave}
                        className="btn btn-save me-2"
                      >
                        <i className="fas fa-save me-2"></i>
                        Save
                      </button>
                      <button onClick={handleCancel} className="btn btn-cancel">
                        <i className="fas fa-times me-2"></i>
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <form>
                    {/* Basic Information */}
                    <div className="section-card">
                      <h2 className="section-title">Basic Information</h2>

                      {/* Profile Photo Section */}
                      <div className="profile-photo-container">
                        {profilePhotoPreview ? (
                          <img
                            src={profilePhotoPreview}
                            alt="Profile Preview"
                            className="profile-photo-preview"
                          />
                        ) : (
                          <div className="photo-placeholder">👤</div>
                        )}
                        {isEditing && (
                          <>
                            <input
                              type="file"
                              id="profilePhoto"
                              className="photo-upload-input"
                              accept="image/*"
                              onChange={handlePhotoUpload}
                            />
                            <label
                              htmlFor="profilePhoto"
                              className="photo-upload-btn"
                            >
                              📷{" "}
                              {profilePhotoPreview
                                ? "Change Photo"
                                : "Upload Photo"}
                            </label>
                          </>
                        )}
                      </div>

                      {/* Username - Full Width Row */}
                      <div className="row">
                        <div className="col-12 mb-3">
                          <label className="form-label">Username</label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            value={formData.username}
                            onChange={(e) => handleChange(e, "username")}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>

                      {/* Profession - Full Width Row */}
                      <div className="row">
                        <div className="col-12 mb-3">
                          <label className="form-label">Profession</label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            value={formData.profession}
                            onChange={(e) => handleChange(e, "profession")}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Name Information */}
                    <div className="section-card">
                      <h2 className="section-title">Name Details</h2>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            value={formData.name.firstname}
                            onChange={(e) => handleNameChange(e, "firstname")}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Middle Name</label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            value={formData.name.middlename}
                            onChange={(e) => handleNameChange(e, "middlename")}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control custom-input"
                            value={formData.name.lastname}
                            onChange={(e) => handleNameChange(e, "lastname")}
                            disabled={!isEditing}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="section-card">
                      <h2 className="section-title">Contact Information</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <h3 className="subsection-title">📧 Email</h3>
                          <div className="mb-3">
                            <label className="form-label">Primary Email</label>
                            <input
                              type="email"
                              className="form-control custom-input"
                              value={formData.email.primary}
                              onChange={(e) =>
                                handleNestedChange(e, "email", "primary")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Alternate Email
                            </label>
                            <input
                              type="email"
                              className="form-control custom-input"
                              value={formData.email.alternate}
                              onChange={(e) =>
                                handleNestedChange(e, "email", "alternate")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <h3 className="subsection-title">📱 Phone</h3>
                          <div className="mb-3">
                            <label className="form-label">Primary Phone</label>
                            <input
                              type="tel"
                              className="form-control custom-input"
                              value={formData.phone.primary}
                              onChange={(e) =>
                                handleNestedChange(e, "phone", "primary")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Alternate Phone
                            </label>
                            <input
                              type="tel"
                              className="form-control custom-input"
                              value={formData.phone.alternate}
                              onChange={(e) =>
                                handleNestedChange(e, "phone", "alternate")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="section-card">
                      <h2 className="section-title">Personal Information</h2>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Gender</label>
                          <select
                            className="form-select custom-input"
                            value={formData.gender}
                            onChange={(e) => handleChange(e, "gender")}
                            disabled={!isEditing}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Date of Birth</label>
                          <input
                            type="date"
                            className="form-control custom-input"
                            value={formData.DOB}
                            onChange={(e) => handleChange(e, "DOB")}
                            disabled={!isEditing}
                          />
                        </div>
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Blood Group</label>
                          <select
                            className="form-select custom-input"
                            value={formData.bloodGroup}
                            onChange={(e) => handleChange(e, "bloodGroup")}
                            disabled={!isEditing}
                          >
                            <option value="">Select Blood Group</option>
                            <option value="a+">A+</option>
                            <option value="a-">A-</option>
                            <option value="b+">B+</option>
                            <option value="b-">B-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                            <option value="o+">O+</option>
                            <option value="o-">O-</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Marital Information */}
                    <div className="section-card">
                      <h2 className="section-title">Marital Information</h2>
                      <div className="row">
                        <div className="col-md-4 mb-3">
                          <label className="form-label">Marital Status</label>
                          <select
                            className="form-select custom-input"
                            value={formData.maritalInfo.status}
                            onChange={(e) =>
                              handleNestedChange(e, "maritalInfo", "status")
                            }
                            disabled={!isEditing}
                          >
                            <option value="">Select Status</option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                          </select>
                        </div>
                        {formData.maritalInfo.status === "married" && (
                          <>
                            <div className="col-md-4 mb-3">
                              <label className="form-label">Spouse Name</label>
                              <input
                                type="text"
                                className="form-control custom-input"
                                value={formData.maritalInfo.spouseName}
                                onChange={(e) =>
                                  handleNestedChange(
                                    e,
                                    "maritalInfo",
                                    "spouseName"
                                  )
                                }
                                disabled={!isEditing}
                              />
                            </div>
                            <div className="col-md-4 mb-3">
                              <label className="form-label">
                                Marriage Date
                              </label>
                              <input
                                type="date"
                                className="form-control custom-input"
                                value={formData.maritalInfo.date}
                                onChange={(e) =>
                                  handleNestedChange(e, "maritalInfo", "date")
                                }
                                disabled={!isEditing}
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="section-card">
                      <h2 className="section-title">Address Information</h2>

                      {/* Residential Address */}
                      <div className="mb-4">
                        <h3 className="subsection-title">
                          🏠 Residential Address
                        </h3>
                        <div className="row">
                          <div className="col-12 mb-3">
                            <label className="form-label">Address Line</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.residential.addressLine}
                              onChange={(e) =>
                                handleAddressChange(
                                  e,
                                  "residential",
                                  "addressLine"
                                )
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">City</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.residential.city}
                              onChange={(e) =>
                                handleAddressChange(e, "residential", "city")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">State</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.residential.state}
                              onChange={(e) =>
                                handleAddressChange(e, "residential", "state")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">Pincode</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.residential.pincode}
                              onChange={(e) =>
                                handleAddressChange(e, "residential", "pincode")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Phone</label>
                            <input
                              type="tel"
                              className="form-control custom-input"
                              value={formData.address.residential.phone}
                              onChange={(e) =>
                                handleAddressChange(e, "residential", "phone")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Office Address */}
                      <div>
                        <h3 className="subsection-title">🏢 Office Address</h3>
                        <div className="row">
                          <div className="col-12 mb-3">
                            <label className="form-label">Address Line</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.office.addressLine}
                              onChange={(e) =>
                                handleAddressChange(e, "office", "addressLine")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">City</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.office.city}
                              onChange={(e) =>
                                handleAddressChange(e, "office", "city")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">State</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.office.state}
                              onChange={(e) =>
                                handleAddressChange(e, "office", "state")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-4 mb-3">
                            <label className="form-label">Pincode</label>
                            <input
                              type="text"
                              className="form-control custom-input"
                              value={formData.address.office.pincode}
                              onChange={(e) =>
                                handleAddressChange(e, "office", "pincode")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Phone</label>
                            <input
                              type="tel"
                              className="form-control custom-input"
                              value={formData.address.office.phone}
                              onChange={(e) =>
                                handleAddressChange(e, "office", "phone")
                              }
                              disabled={!isEditing}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  {/* Profile Summary Card */}
                  {!isEditing && (
                    <div className="summary-card">
                      <h2 className="summary-title">📊 Profile Summary</h2>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="summary-item">
                            <strong>Full Name:</strong>{" "}
                            {`${formData.name.firstname} ${formData.name.middlename} ${formData.name.lastname}`.trim()}
                          </div>
                          <div className="summary-item">
                            <strong>Username:</strong> {formData.username}
                          </div>
                          <div className="summary-item">
                            <strong>Profession:</strong> {formData.profession}
                          </div>
                          <div className="summary-item">
                            <strong>Primary Email:</strong>{" "}
                            {formData.email.primary}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="summary-item">
                            <strong>Primary Phone:</strong>{" "}
                            {formData.phone.primary}
                          </div>
                          <div className="summary-item">
                            <strong>Blood Group:</strong>{" "}
                            {formData.bloodGroup?.toUpperCase()}
                          </div>
                          <div className="summary-item">
                            <strong>Gender:</strong> {formData.gender}
                          </div>
                          <div className="summary-item">
                            <strong>DOB:</strong> {formData.DOB}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-container {
          background: #E0E0E0,
          min-height: 100vh;
          padding: 40px 0;
        }
        
        .profile-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        
        .profile-header {
          background: #FFD3C9;
          color: white;
          padding: 40px;
          text-align: center;
        }
        
        .profile-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        
        }
        
        .profile-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
        }
        
        .section-card {
          background: #f8f9fa;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 25px;
          border-left: 5px solid #ff8547;
          transition: all 0.3s ease;
        }
        
        // .section-card:hover {
        //   transform: translateY(-2px);
        //   box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        // }
        
        .section-title {
          color: #2c3e50;
          font-size: 1.4rem;
          font-weight: 600;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
        }
        
        .section-title::before {
          content: "📋";
          margin-right: 10px;
          font-size: 1.2rem;
        }
        
        .custom-input {
          border: 2px solid #e1e5e9;
          border-radius: 10px;
          padding: 12px 15px;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        
        .custom-input:focus {
          border-color: #4CAF50;
          box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25);
          outline: none;
        }
        
        .custom-input:disabled {
          background-color: #f8f9fa;
          border-color: #dee2e6;
          color: #6c757d;
        }
        
        .btn-edit {
          background:  #FF6B49;
          border: none;
          border-radius: 25px;
          padding: 12px 30px;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
          
        }
        
        .btn-edit:hover {
          transform: translateY(-2px);
        //   box-shadow: 0 6px 20px ;
          
        }
        
        .btn-save {
          background:  #FF6B49;
          border: none;
          border-radius: 25px;
          padding: 10px 25px;
          font-weight: 600;
          color: white;
          transition: all 0.3s ease;
        //   box-shadow: 0 4px 15px ;
        }
        
        .btn-save:hover {
          transform: translateY(-2px);
        //   box-shadow: 0 6px 20px rgba(40,167,69,0.4);
          
        }
        
        .btn-cancel {
          background: #f3f4f6;
          border: none;
          border-radius: 25px;
          padding: 10px 25px;
          font-weight: 600;
          color: black;
          transition: all 0.3s ease;
          
        }
        
        .btn-cancel:hover {
          transform: translateY(-2px);
          
          
        }
        
        .summary-card {
          background: #ffd3c9;
          border-radius: 15px;
          padding: 25px;
          border-left: 5px solid #2196F3;
        }
        
        .summary-title {
          color: #1565c0;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .summary-item {
          padding: 8px 0;
          border-bottom: 1px solid rgba(33,150,243,0.1);
        }
        
        .summary-item:last-child {
          border-bottom: none;
        }
        
        .form-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 8px;
        }
        
        .subsection-title {
          color: #495057;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e9ecef;
        }
        
        .profile-photo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .profile-photo-preview {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #ff8547;
          margin-bottom: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .photo-placeholder {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: #ffd3c9;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px dashed #ff8547;
          margin-bottom: 15px;
          font-size: 40px;
          color: #4CAF50;
        }
        
        .photo-upload-btn {
          background: #FF6B49;
          border: none;
          border-radius: 20px;
          padding: 8px 20px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        
        .photo-upload-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        }
        
        .photo-upload-input {
          display: none;
        }        
      `}</style>
    </>
  );
};

export default ProfileUpdation;
