"use client";

import ModalVideoComponent from "@/components/common/ModalVideo";
import Image from "next/image";
import { useState } from "react";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  const stats = [
    { number: "1952", label: "Established" },
    { number: "70+", label: "Years Legacy" },
    { number: "400+", label: "Professionals" },
    { number: "100+", label: "Annual Events" },
  ];

  const objectives = [
    {
      icon: "/img/icons/1/diamond.svg",
      title: "Legal Education",
      description: "Promote education in tax laws, accountancy, and related fields",
    },
    {
      icon: "/img/icons/1/hot-air-balloon.svg",
      title: "Policy Advocacy",
      description: "Voice in tax law and policy reforms at state and central levels",
    },
    {
      icon: "/img/icons/1/medal.svg",
      title: "Professional Ethics",
      description: "Uphold integrity, fairness, and cooperation among members",
    },
    {
      icon: "/img/icons/1/ticket.svg",
      title: "Knowledge Forum",
      description: "Platform for legal and tax discussions among professionals",
    },
  ];

  const founderMembers = [
    { name: "Shri M.H. Ansari", status: "Present Charter Member", role: "Founder Leader" },
    { name: "Shri D.P. Bazari", status: "Present Charter Member", role: "Co-Founder" },
    { name: "Shri N.L. Jain", status: "Present Charter Member", role: "Co-Founder" },
    { name: "Shri P.S. Surana", status: "Late Charter Member", role: "Pioneer" },
    { name: "Shri Amar Singh", status: "Late Charter Member", role: "Pioneer" },
    { name: "Shri Hari Ram Gaur", status: "Late Charter Member", role: "Pioneer" },
  ];

  const milestones = [
    {
      year: "1947",
      title: "India's Independence",
      description: "Income Tax Act, 1922 was in force, but Kota (Bundi State) was exempt from income tax",
    },
    {
      year: "1950",
      title: "Tax Law Extension",
      description: "Part B States Income Tax Concession Order extended tax law to Kota region",
    },
    {
      year: "1952",
      title: "TBA Foundation",
      description: "Tax Bar Association, Kota established under Shri M.H. Ansari's leadership",
    },
    {
      year: "2023",
      title: "Present Day",
      description: "Leading body of 400+ tax professionals shaping tax dialogue in India",
    },
  ];

  const structure = [
    { count: "6", label: "Office Bearers" },
    { count: "4", label: "Study Circle Chairmen" },
    { count: "35-40", label: "Executive Members" },
    { count: "3-4", label: "Annual Seminars" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="layout-pt-xl layout-pb-lg">
        <div className="container">
          <div className="row align-items-center y-gap-50">
            <div className="col-lg-6 col-md-12">
              <div className="about-content" data-aos="fade-right">
                <div className="text-accent-1 text-14 fw-500 mb-10">ABOUT US</div>
                <h1 className="text-40 lg:text-30 md:text-24 fw-700 mb-20">
                  Tax Bar Association, 
                  <span className="text-accent-1"> Kota</span>
                </h1>
                <p className="text-16 text-dark-1 mb-30">
                  Established in 1952, the Tax Bar Association, Kota (TBA) stands as a leading body 
                  of tax professionals in India, committed to promoting excellence, ethics, and education 
                  in the field of taxation. With a legacy spanning more than 70 years and a membership 
                  exceeding 400 professionals, we've been instrumental in shaping tax reforms and 
                  professional development.
                </p>
                
                {/* Stats */}
                <div className="row y-gap-20 mb-40">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-6 col-sm-3">
                      <div className="text-center">
                        <div className="text-30 lg:text-24 fw-700 text-accent-1">
                          {stat.number}
                        </div>
                        <div className="text-14 text-dark-1 mt-5">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-20">
                  <button className="button -md -dark-1 bg-accent-1 text-white me-15 m-2">
                    Join TBA Kota
                  </button>
                  <button className="button -md -outline-accent-1 text-accent-1 m-2">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-aos="fade-left">
                <div className="relative">
                  <div className="overflow-hidden rounded-24">
                    <Image
                      width={570}
                      height={600}
                      src="/img/about/ab.jpg"
                      alt="Tax Bar Association Kota"
                      className="w-1/1 h-full object-cover"
                    />
                  </div>
                  
                  

                  {/* Floating Card */}
                  <div className="absolute bottom-30 left-30">
                    <div className="bg-white rounded-16 px-30 py-20 shadow-2">
                      <div className="d-flex items-center">
                        <div className="size-50 bg-accent-1-05 rounded-12 d-flex items-center justify-center mr-15">
                          <Image
                            width={24}
                            height={24}
                            src="/img/icons/1/medal.svg"
                            alt="Professional Icon"
                          />
                        </div>
                        <div>
                          <div className="text-16 fw-500 text-dark-1">Tax Professionals</div>
                          <div className="text-14 text-dark-1" style={{opacity: 0.7}}>Since 1952</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="layout-pt-lg layout-pb-lg bg-light-1">
        <div className="container">
          <div className="row justify-center text-center mb-60">
            <div className="col-lg-8">
              <div data-aos="fade-up">
                <div className="text-accent-1 text-14 fw-500 mb-10">VISION & MISSION</div>
                <h2 className="text-30 lg:text-24 fw-700 text-dark-1 mb-20">
                  Unity Through Knowledge
                </h2>
                <p className="text-16 text-dark-1">
                  Our founders believed in unity through knowledge, and their values remain 
                  central to our mission today.
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-40">
            {objectives.map((objective, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div 
                  className="featureCard bg-white rounded-24 px-30 py-40 h-full shadow-1 hover-shadow-2 transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="featureCard__icon size-60 bg-accent-1-05 rounded-16 d-flex items-center justify-center mb-20 mx-auto">
                    <Image
                      width={30}
                      height={30}
                      src={objective.icon}
                      alt={objective.title}
                    />
                  </div>
                  <h4 className="text-18 fw-500 text-dark-1 mb-15">{objective.title}</h4>
                  <p className="text-15 text-dark-1" style={{opacity: 0.7}}>{objective.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center mb-60">
            <div className="col-lg-8">
              <div data-aos="fade-up">
                <div className="text-accent-1 text-14 fw-500 mb-10">OUR HISTORY</div>
                <h2 className="text-30 lg:text-24 fw-700 text-dark-1 mb-20">
                  Our Historical Roots
                </h2>
                <p className="text-16 text-dark-1">
                  From India's independence to becoming a leading tax professionals body, 
                  discover the journey that shaped TBA Kota.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
              >
                <div className="timeline-content bg-white rounded-16 px-30 py-30 shadow-1">
                  <div className="timeline-year text-accent-1 text-20 fw-700 mb-10">
                    {milestone.year}
                  </div>
                  <h4 className="text-18 fw-500 text-dark-1 mb-15">{milestone.title}</h4>
                  <p className="text-15 text-dark-1" style={{opacity: 0.7}}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Members Section */}
      <section className="layout-pt-lg layout-pb-lg bg-light-1">
        <div className="container">
          <div className="row justify-center text-center mb-60">
            <div className="col-lg-8">
              <div data-aos="fade-up">
                <div className="text-accent-1 text-14 fw-500 mb-10">FOUNDING FATHERS</div>
                <h2 className="text-30 lg:text-24 fw-700 text-dark-1 mb-20">
                  Charter Members
                </h2>
                <p className="text-16 text-dark-1">
                  Honoring the visionary leaders who established TBA Kota in 1952 
                  under the leadership of Shri M.H. Ansari.
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30">
            {founderMembers.map((member, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="memberCard bg-white rounded-16 px-25 py-30 text-center shadow-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="bg-accent-1-05 rounded-full d-flex items-center justify-center mx-auto mb-20" style={{ width: '120px', height: '120px', flexShrink: 0 }}>
                    <Image
                      width={100}
                      height={100}
                      src={member.status === "Late Charter Member" ? `/img/team/default.jpg` : `/img/team/${index + 1}.jpg`}
                      alt={member.name}
                      className="rounded-full object-cover"
                      style={{ width: '100px', height: '100px' }}
                    />
                  </div>
                  <h4 className="text-16 fw-500 text-dark-1 mb-10">{member.name}</h4>
                  <div className="text-14 text-accent-1 mb-5">{member.role}</div>
                  <div className="text-13 text-dark-1" style={{opacity: 0.7}}>{member.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure & Activities */}
      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row align-items-center y-gap-50">
            <div className="col-lg-6">
              <div data-aos="fade-right">
                <div className="text-accent-1 text-14 fw-500 mb-10">ORGANIZATION</div>
                <h2 className="text-30 lg:text-24 fw-700 text-dark-1 mb-20">
                  Structure & Activities
                </h2>
                <p className="text-16 text-dark-1 mb-30">
                  TBA Kota functions through a well-structured organization including 
                  Advocates, Chartered Accountants, Company Secretaries, Cost Accountants, 
                  and Tax Consultants practicing both Direct and Indirect Taxes.
                </p>

                <div className="row y-gap-20 mb-30">
                  {structure.map((item, index) => (
                    <div key={index} className="col-6">
                      <div className="d-flex items-center">
                        <div className="size-50 bg-accent-1-05 rounded-12 d-flex items-center justify-center mr-15">
                          <span className={`${item.count.length > 2 ? 'text-12' : 'text-16'} fw-700 text-accent-1`} style={{ lineHeight: '1', whiteSpace: 'nowrap' }}>
                            {item.count}
                          </span>
                        </div>
                        <div className="text-15 text-dark-1">{item.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-light-1 rounded-16 px-25 py-20">
                  <h5 className="text-16 fw-500 text-dark-1 mb-15">Digital Presence</h5>
                  <p className="text-14 text-dark-1 mb-15" style={{opacity: 0.7}}>
                    Visit www.tbakota.com for articles, case summaries, tax updates, 
                    and government notifications.
                  </p>
                  <button className="button -sm -accent-1 bg-accent-1 text-white">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div data-aos="fade-left">
                <div className="activitiesCard bg-white rounded-24 px-30 py-40 shadow-1">
                  <h4 className="text-20 fw-500 text-dark-1 mb-25 text-center">Annual Activities</h4>
                  
                  <div className="activity-item d-flex items-center mb-20">
                    <div className="size-40 bg-accent-1-05 rounded-12 d-flex items-center justify-center mr-15">
                      <span className="text-14 fw-600 text-accent-1">3-4</span>
                    </div>
                    <div>
                      <div className="text-15 fw-500 text-dark-1">Full-day Seminars</div>
                      <div className="text-13 text-dark-1" style={{opacity: 0.7}}>Comprehensive tax education</div>
                    </div>
                  </div>

                  <div className="activity-item d-flex items-center mb-20">
                    <div className="size-40 bg-accent-1-05 rounded-12 d-flex items-center justify-center mr-15">
                      <span className="text-14 fw-600 text-accent-1">12+</span>
                    </div>
                    <div>
                      <div className="text-15 fw-500 text-dark-1">Topic-specific Workshops</div>
                      <div className="text-13 text-dark-1" style={{opacity: 0.7}}>Focused skill development</div>
                    </div>
                  </div>

                  <div className="activity-item d-flex items-center">
                    <div className="size-40 bg-accent-1-05 rounded-12 d-flex items-center justify-center mr-15">
                      <span className="text-14 fw-600 text-accent-1">24+</span>
                    </div>
                    <div>
                      <div className="text-15 fw-500 text-dark-1">Study Circle Meetings</div>
                      <div className="text-13 text-dark-1" style={{opacity: 0.7}}>Regular knowledge sharing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="layout-pt-lg layout-pb-lg bg-dark-1">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-lg-8">
              <div data-aos="fade-up">
                <h2 className="text-30 lg:text-24 fw-700 text-white mb-20">
                  Join the Tax Bar Association, Kota
                </h2>
                <p className="text-16 text-white mb-40" style={{opacity: 0.8}}>
                  Become part of a 70+ year legacy of tax professionals committed to 
                  excellence, ethics, and education in taxation.
                </p>
                <div className="d-flex flex-wrap justify-center gap-20">
                  <button className="button -md -accent-1 bg-accent-1 text-white me-15 m-2">
                    Apply for Membership
                  </button>
                  <button className="button -md -outline-white text-white m-2">
                    Contact TBA Kota
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <ModalVideoComponent
        videoId={"ANYfx4-jyqY"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <style jsx>{`
        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-container::after {
          content: '';
          position: absolute;
          width: 2px;
          background-color: #EB662B;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -1px;
        }

        .timeline-item {
          position: relative;
          width: 50%;
          padding: 30px;
        }

        .timeline-left {
          left: 0;
          padding-right: 50px;
        }

        .timeline-right {
          left: 50%;
          padding-left: 50px;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          background-color: #EB662B;
          border: 3px solid white;
          border-radius: 50%;
          top: 50px;
        }

        .timeline-left::after {
          right: -8px;
        }

        .timeline-right::after {
          left: -8px;
        }

        .featureCard {
          text-align: center;
        }

        .featureCard:hover,
        .memberCard:hover,
        .activitiesCard:hover {
          transform: translateY(-5px);
        }

        .absolute-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .hover-shadow-2:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .transition-all {
          transition: all 0.3s ease;
        }

        /* Button margin for mobile */
        @media (max-width: 576px) {
          .d-flex.flex-wrap.gap-20 {
            flex-direction: column;
            align-items: center;
          }
          
          .d-flex.flex-wrap.gap-20 .button {
            margin-bottom: 15px;
            margin-right: 0 !important;
            width: 100%;
            max-width: 250px;
          }
          
          .featureCard {
            margin-bottom: 30px;
          }
          
          .memberCard {
            margin-bottom: 30px;
          }
        }

        @media (max-width: 767px) {
          .timeline-container::after {
            left: 20px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 50px;
            padding-right: 25px;
          }

          .timeline-right {
            left: 0%;
          }

          .timeline-left::after,
          .timeline-right::after {
            left: 12px;
          }
          
          /* Mobile responsive for structure items */
          .col-6 {
            margin-bottom: 20px;
          }
          
          /* Center align content on mobile */
          .about-content {
            text-align: center;
          }
          
          .about-content .d-flex {
            justify-content: center;
          }
          
          .stats .text-center {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </>
  );
}