"use client";
import React, { useEffect, useState } from "react";
import { registerUser } from "@/server/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    name: {
      firstname: "",
      middlename: "",
      lastname: "",
    },
    profession: "",
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

  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const handleChange = (e, target) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [target]: value,
    }));
  };

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

  const handleMobileEmailMaritialChange = (e, object, target) => {
    const { value } = e.target;
    console.log(`Updating ${object} with target ${target} to value: ${value}`);

    setFormData((prevData) => {
      return {
        ...prevData,
        [object]: {
          ...prevData[object],
          [target]: value,
        },
      };
    });
  };

  const handleAddressChange = (e, addressOf, target) => {
    const { value } = e.target;
    console.log(`with target ${target} to value: ${value}`);

    setFormData((prevData) => {
      return {
        ...prevData,
        address: {
          ...prevData.address,
          [addressOf]: {
            ...prevData.address[addressOf],
            [target]: value,
          },
        },
      };
    });
  };

  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const [conPass, setConPass] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (conPass !== formData.password) {
        toast.error("Passwords do not match");
      } else {
        setConfirmPasswordError("");
      }
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [conPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setApiSuccess("");
    console.log("Form Data:", formData);    
    try {
      const res = await registerUser({user:formData});
      toast.success("Registration successful! Please login.");
      console.log("Response:", res);
      router.push('/auth/login')
    } catch (err) {
      toast.error(err.message || "Registration failed");
      console.log("Response:", err);
    }
  };


  return (
    <section className="mt-header mt-10">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-10 col-md-12">
            <div className="text-center mb-40 md:mb-30">
              <h1 className="text-30">Join Tax Bar Kota</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">
                Create an account and join Tax Bar Kota
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
            >
              {/* Group 1 */}
              <div className="row justify-content-center align-items-center gap-3">
                <div className="mb-3 col-md-4 col-12">
                  <label htmlFor="username" className="form-label">
                    Enter Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="form-control border-1"
                    placeholder="username"
                    onChange={(e) => handleChange(e, "username")}
                  />
                </div>
                {/* password field */}
                <div className="mb-3   col-6 col-md-4">
                  <label htmlFor="password" className="form-label">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control my-form-control border-1"
                    placeholder="username"
                    onChange={(e) => handleChange(e, "password")}
                  />
                </div>
                <div className="mb-3   col-6 col-md-4">
                  <label htmlFor="confirm-password" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="form-control my-form-control border-1"
                    placeholder="username"
                    onChange={(e) => setConPass(e.target.value)}
                  />
                  {confirmPasswordError && (
                    <div className="text-danger mt-2">
                      {confirmPasswordError}
                    </div>
                  )}
                </div>
              </div>
              {/* group 2 */}
              <div className="row justify-content-center align-items-center gap-3">
                <div className="mb-3 col-md-4 col-12">
                  <label htmlFor="firstname" className="form-label">
                    Enter Firstname
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control border-1"
                    placeholder="firstname"
                    onChange={(e) => handleNameChange(e, "firstname")}
                  />
                </div>
                {/* password field */}
                <div className="mb-3   col-6 col-md-4">
                  <label htmlFor="middlename" className="form-label">
                    Enter middlename
                  </label>
                  <input
                    type="text"
                    id="middlename"
                    className="form-control my-form-control border-1"
                    placeholder="middlename"
                    onChange={(e) => handleNameChange(e, "middlename")}
                  />
                </div>
                <div className="mb-3   col-6 col-md-4">
                  <label htmlFor="lastname" className="form-label">
                    Enter Lastname
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control my-form-control border-1"
                    placeholder="lastname"
                    onChange={(e) => handleNameChange(e, "lastname")}
                  />
                </div>
              </div>
              {/* profession and blood group */}
              <div className="row justify-content-center align-items-center gap-3">
                {/* <div className="col-6"> */}
                <div className="mb-3 col-6">
                  <label htmlFor="profession" className="form-label">
                    Enter Profession
                  </label>
                  <input
                    type="text"
                    id="profession"
                    className="form-control border-1"
                    placeholder="profession"
                    onChange={(e) => handleChange(e, "profession")}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="bloodGroup" className="form-label">
                    Enter Blood Group
                  </label>

                  <select
                    id="bloodGroup"
                    className="form-control border-1"
                    onChange={(e) => handleChange(e, "bloodGroup")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select blood group
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  {/* <input
                    type="text"
                    id="bloodGroup"
                    className="form-control border-1"
                    placeholder="blood group"
                    onChange={(e) => handleChange(e, "bloodGroup")}
                  /> */}
                </div>
              </div>
              {/* </div> */}
              {/* group 3 email and mobile */}
              <div className="row justify-content-center align-items-center gap-3">
                <div className="mb-3 col-md-3 col-6">
                  <label htmlFor="primary-email" className="form-label">
                    Enter Primary Email
                  </label>
                  <input
                    type="email"
                    id="primary-email"
                    className="form-control border-1"
                    placeholder="primaryexample@gmail.com"
                    onChange={(e) =>
                      handleMobileEmailMaritialChange(e, "email", "primary")
                    }
                  />
                </div>
                {/* password field */}
                <div className="mb-3   col-6 col-md-3">
                  <label htmlFor="primary-mobile" className="form-label">
                    Enter Primary Mobile
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    id="primary-mobile"
                    className="form-control my-form-control border-1"
                    placeholder="9000000000"
                    onChange={(e) =>
                      handleMobileEmailMaritialChange(e, "phone", "primary")
                    }
                  />
                </div>
                <div className="mb-3 col-md-3 col-6">
                  <label htmlFor="alternate-email" className="form-label">
                    Enter Alternate Email
                  </label>
                  <input
                    type="email"
                    id="alternate-email"
                    className="form-control border-1"
                    placeholder="alternateexample@gmail.com"
                    onChange={(e) =>
                      handleMobileEmailMaritialChange(e, "email", "alternate")
                    }
                  />
                </div>
                {/* password field */}
                <div className="mb-3   col-6 col-md-3">
                  <label htmlFor="alternate-mobile" className="form-label">
                    Enter Alternate Mobile
                  </label>
                  <input
                    type="text"
                    maxLength={10}
                    id="alternate-mobile"
                    className="form-control my-form-control border-1"
                    placeholder="9000000000"
                    onChange={(e) =>
                      handleMobileEmailMaritialChange(e, "phone", "alternate")
                    }
                  />
                </div>
              </div>
              {/* group 4 */}
              <div className="row justify-content-center align-items-center gap-3">
                <div className="flex flex-row gap-3 col-12">
                  <label htmlFor="maritial-status" className="form-label">
                    Marital Status
                  </label>
                  <div className="d-flex flex-row gap-10">
                    <div className="form-check d-flex flex-row gap-3 me-5">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="maritalStatus"
                        id="radioMarried"
                        value="married"
                        checked={formData.maritalInfo.status === "married"}
                        onChange={(e) =>
                          handleMobileEmailMaritialChange(
                            e,
                            "maritalInfo",
                            "status"
                          )
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radioMarried"
                      >
                        Married
                      </label>
                    </div>

                    <div className="form-check d-flex flex-row gap-3">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="maritalStatus"
                        id="radioUnmarried"
                        value="unmarried"
                        checked={formData.maritalInfo.status === "unmarried"}
                        onChange={(e) =>
                          handleMobileEmailMaritialChange(
                            e,
                            "maritalInfo",
                            "status"
                          )
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radioUnmarried"
                      >
                        Unmarried
                      </label>
                    </div>
                  </div>
                </div>
                {formData.maritalInfo.status === "married" && (
                  <div
                    className="row"
                    style={{
                      background: "#00000008",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="mb-3 col-6">
                      <div className="form-check d-flex flex-column gap-3 me-5">
                        <label
                          className="form-check-label w-100"
                          style={{
                            width: "100% !important",
                          }}
                          htmlFor="radioMarried"
                        >
                          Date of Marriage
                        </label>
                        <input
                          className="form-check-input form-control me-2"
                          type="date"
                          name="maritalStatus"
                          id="radioMarried"
                          onChange={(e) =>
                            handleMobileEmailMaritialChange(
                              e,
                              "maritalInfo",
                              "date"
                            )
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-3 col-6">
                      <label htmlFor="spouse-name" className="form-label">
                        Spouse Name
                      </label>
                      <input
                        type="text"
                        id="spouse-name"
                        className="form-control border-1"
                        placeholder="Spouse Name"
                        onChange={(e) =>
                          handleMobileEmailMaritialChange(
                            e,
                            "maritalInfo",
                            "spouseName"
                          )
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* Group 5 */}
              <div className="row justify-content-center align-items-center gap-3 my-3">
                <div className="flex flex-row gap-3 col-6">
                  <label htmlFor="maritial-status" className="form-label">
                    Gender
                  </label>
                  <div className="d-flex flex-row gap-10">
                    <div className="form-check d-flex flex-row gap-3 me-5">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="gender"
                        id="radiogenderMale"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={(e) => handleChange(e, "gender")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radiogenderMale"
                      >
                        Male
                      </label>
                    </div>

                    <div className="form-check d-flex flex-row gap-3">
                      <input
                        className="form-check-input me-2"
                        type="radio"
                        name="gender"
                        id="radiogenderFemale"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={(e) => handleChange(e, "gender")}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radiogenderFemale"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-3  col-6">
                  <label htmlFor="DOB" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="DOB"
                    className="form-control border-1"
                    placeholder="Date of Birth"
                    onChange={(e) => handleChange(e, "DOB")}
                  />
                </div>
              </div>
              {/* group 6 */}
              <div className="row justify-content-center align-items-center gap-3 my-3">
                <div className="col-6">
                  <h5 className="form-label">Residential address</h5>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="res-address" className="form-label">
                        Residential address line
                      </label>
                      <textarea
                        type="text"
                        id="res-address"
                        className="form-control border-1"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sit sequi vel."
                        onChange={(e) =>
                          handleAddressChange(e, "residential", "addressLine")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-pincode" className="form-label">
                        Pincode
                      </label>
                      <input
                        type="number"
                        id="res-pincode"
                        className="form-control border-1"
                        placeholder="pincode"
                        onChange={(e) =>
                          handleAddressChange(e, "residential", "pincode")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-state" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        id="res-state"
                        className="form-control border-1"
                        placeholder="state"
                        onChange={(e) =>
                          handleAddressChange(e, "residential", "state")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        id="res-city"
                        className="form-control border-1"
                        placeholder="city"
                        onChange={(e) =>
                          handleAddressChange(e, "residential", "city")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        maxLength={10}
                        id="res-phone"
                        className="form-control border-1"
                        placeholder="phone"
                        onChange={(e) =>
                          handleAddressChange(e, "residential", "phone")
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <h5 className="form-label">Office address</h5>
                  <div>
                    <div className="mb-3">
                      <label htmlFor="res-address" className="form-label">
                        Office address line
                      </label>
                      <textarea
                        type="text"
                        id="res-address"
                        className="form-control border-1"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sit sequi vel."
                        onChange={(e) =>
                          handleAddressChange(e, "office", "addressLine")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-pincode" className="form-label">
                        Pincode
                      </label>
                      <input
                        type="number"
                        id="res-pincode"
                        className="form-control border-1"
                        placeholder="pincode"
                        onChange={(e) =>
                          handleAddressChange(e, "office", "pincode")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-state" className="form-label">
                        State
                      </label>
                      <input
                        type="text"
                        id="res-state"
                        className="form-control border-1"
                        placeholder="state"
                        onChange={(e) =>
                          handleAddressChange(e, "office", "state")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        id="res-city"
                        className="form-control border-1"
                        placeholder="city"
                        onChange={(e) =>
                          handleAddressChange(e, "office", "city")
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="res-phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        maxLength={10}
                        id="res-phone"
                        className="form-control border-1"
                        placeholder="phone"
                        onChange={(e) =>
                          handleAddressChange(e, "office", "phone")
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              {apiError && <div className="text-danger mt-20">{apiError}</div>}
              {apiSuccess && (
                <div className="text-success mt-20">{apiSuccess}</div>
              )}
              <button
                type="submit"
                className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
