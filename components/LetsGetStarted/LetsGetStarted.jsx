import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LetsGetStarted() {
    return (
        <section className="cta-join-section py-5 position-relative bg-white">
            <div className="container">
                <div className="cta-card p-4 p-md-5 rounded-4">
                    <div className="row align-items-center">
                        <div data-aos="fade-right" className="col-lg-7 col-md-6 mb-4 mb-md-0">
                            <h2 className="fw-bold text-dark mb-3" style={{ fontSize: "2.2rem" }}>
                                Become a Member of <span className="text-primary">Tax Bar Association</span>
                            </h2>
                            <p className="text-secondary mb-4" style={{ fontSize: "1.1rem", maxWidth: "90%" }}>
                                Join a vibrant community of tax professionals, share knowledge, and contribute to the advancement of tax education and ethical standards.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link href="/jointba" legacyBehavior>
                                    <a className="btn cta-primary-btn px-4 py-3 rounded-pill fw-semibold">
                                        Join Tax Bar Association
                                    </a>
                                </Link>
                                <Link href="/about" legacyBehavior>
                                    <a className="btn cta-secondary-btn px-4 py-3 rounded-pill fw-semibold">
                                        Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="col-lg-5 col-md-6 position-relative">
                            <div className="cta-image-container p-3 bg-light rounded-4 text-center">
                                <Image 
                                    src="/img/avatars/1/CTA-image.png" 
                                    alt="Tax Professionals" 
                                    width={400} 
                                    height={300}
                                    className="img-fluid"
                                    style={{ width: "40%", height: "auto", borderRadius: "100%" }}
                                />
                                <div className="badge-floating">Join Us Today!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                .cta-join-section {
                    padding: 60px 0;
                    margin: 60px 0;
                }
                
                .cta-card {
                    background: linear-gradient(120deg, #ffffff, #fdf7f4);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                    border-left: 5px solid #ff8547;
                    transition: transform 0.3s ease;
                }
                
                .cta-primary-btn {
                    background: #ff8547 !important;
                    color: #fff !important;
                    transition: all 0.3s ease;
                    border: none;
                    font-size: 1.1rem;
                }
                
                .cta-primary-btn:hover, .cta-primary-btn:focus {
                    background: #ff8547 !important;
                    box-shadow: 0 5px 15px rgba(26, 35, 126, 0.3) !important;
                    transform: translateY(-2px);
                }
                
                .cta-secondary-btn {
                    background: transparent !important;
                    color: #ff8547 !important;
                    border: 2px solid #ff8547 !important;
                    transition: all 0.3s ease;
                    font-size: 1.1rem;
                }
                
                .cta-secondary-btn:hover, .cta-secondary-btn:focus {
                    background: rgba(26, 35, 126, 0.1) !important;
                    transform: translateY(-2px);
                }
                
                .cta-image-container {
                    position: relative;
                    overflow: hidden;
                }
                
                .badge-floating {
                    background: #ff8547;
                    width: fit-content;
                    margin: 0 auto;
                    color: white;
                    padding: 8px 6rem;
                    border-radius: 10px;
                    font-weight: bold;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
                
                @media (max-width: 768px) {
                    .cta-card {
                        text-align: center;
                    }
                    
                    .cta-card p {
                        max-width: 100% !important;
                    }
                    
                    .d-flex.gap-3 {
                        justify-content: center;
                    }
                }
                `}
            </style>
        </section>
    );
}
