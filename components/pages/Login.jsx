"use client";

import Link from "next/link";
import React, { useState } from "react";
import { loginUser } from "@/server/api";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const router = useRouter()
  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError("");
    setApiSuccess("");
    console.log("hi")
    try {
      const res = await loginUser(formData);
      setApiSuccess("Login successful!");
      console.log('res', res);
      console.log("res user", res?.user?._id);
      localStorage.setItem("tba-token", res?.user?._id);
      router.push('/')
    } catch (err) {
      console.log("login err", err)
      setApiError(err.message || "Login failed");
    }
  };

  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">Log In</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">
                We're glad to see you again!
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
            >
              <div className="form-input ">
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">
                  Username
                </label>
              </div>

              <div className="form-input mt-30">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label className="lh-1 text-16 text-light-1">Password</label>
              </div>

              {apiError && <div className="text-danger mt-20">{apiError}</div>}
              {apiSuccess && <div className="text-success mt-20">{apiSuccess}</div>}

              <button
                type="submit"
                className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30"
              >
                Log In
                <i className="icon-arrow-top-right ml-10"></i>
              </button>
            <div className="text-center mt-20">
              Don't have an account?{' '}
              <Link href="/auth/signup" className="text-accent-1">
                Sign Up!
              </Link>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
