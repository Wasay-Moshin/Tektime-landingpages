import React from 'react'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

function Privacypolicy() {
    return (
        <div className='mt-5 py-5'>
            <div className="container mt-5">
                <h4 className="main-heading fw-bold text-center mb-4">Privacy Policy</h4>
                <p className="description text-center">Welcome to TekTIME. We are committed to protecting and respecting your privacy. This <br className="d-none d-md-block" /> privacy policy explains how we collect, use, disclose, and protect your personal <br className="d-none d-md-block" /> information when you use our TekTIME SaaS software.</p>
                <div className='mt-5'>
                    <h5 className="main-heading fs-5 fw-bold">Google Api Services Disclosure</h5>
                    <p className="description">TekTIME’s use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. Link to Google API Services User Data Policy.</p>
                </div>
                <div className="mt-5">
                    <h5 className="main-heading fs-5 fw-bold">1. Information We Collect</h5>
                    <p className="description">We collect several types of information for various uses to provide and improve our service to you.</p>
                    <div className='mt-5'>
                        <h5 className="main-heading fs-5 fw-bold">1.1 Personal Information</h5>
                        <p className="description fs-6">When you register with TekTIME, we may ask you to provide us with certain personally identifiable information which may include, but is not limited to:</p>
                        <p className="description d-flex gap-2 align-items-center mb-2"><span><GoDotFill /></span> <span>First and last name</span></p>
                        <p className="description d-flex gap-2 align-items-center"><span><GoDotFill /></span> <span>Email address</span></p>
                    </div>
                    <div className="mt-5">
                        <h5 className="main-heading fs-5 fw-bold">1.2 Log Data</h5>
                        <p className="description fs-6">We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer's IP address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on these pages, and other statistics.</p>
                    </div>
                    <div className="mt-5">
                        <h5 className="main-heading fs-5 fw-bold">1.3 Google Calendar Data</h5>
                        <p className="description fs-6">To provide our services, we may request access to your Google Calendar. This includes viewing and managing your calendar events to ensure seamless integration and improved user experience within TekTIME. We use the following sensitive scopes:</p>
                        <ul className="description fs-6">
                            <Link to="" className="green-txtcolor text-decoration-none">
                                <li>https://www.googleapis.com/auth/calendar</li>
                            </Link>
                            <Link to="" className="green-txtcolor text-decoration-none">
                                <li>https://www.googleapis.com/auth/calendar</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="mt-5">
                    <h5 className="main-heading fs-5 fw-bold">2. Use of Information</h5>
                    <p className="description fs-6">We use the information we collect in a variety of ways, including to:</p>
                    <ul className='description fs-6`'>
                        <li>Provide and maintain our service</li>
                        <li>Notify you of changes to our service</li>
                        <li>Allow you to participate in the interactive features of our service when you wish</li>
                        <li>Provide Customer Support</li>
                        <li>Collect analytics or valuable information so that we can improve our service</li>
                        <li>Monitor the use of our services</li>
                        <li>Detect, prevent, and resolve technical problems</li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h5 className="main-heading fs-5 fw-bold">3. Sharing Your Information</h5>
                    <p className="description fs-6">We do not sell, trade, or rent your personal information to third parties.</p>
                    <p className="description fs-6">We may share your information in the following situations:</p>
                    <ul className="description fs-6">
                        <li>With third-party service providers to facilitate our Service, to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used.</li>
                        <li className='mt-2'>To comply with a legal obligation, to protect and defend our rights or property, to prevent or investigate possible wrongdoing in connection with the Service, or to protect the personal safety of users of the Service or the public.</li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h5 className="main-heading fs-5 fw-bold">4. Data Security</h5>
                    <p className="description fs-6">The security of your data is important to us. We implement security measures to protect your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
                <div className="mt-5">
                    <h5 className="main-heading fs-5 fw-bold">5. Your Rights</h5>
                    <p className="description fs-6">In accordance with the Data Protection Act and the GDPR, you have the following rights:</p>
                    <ul className="description fs-6">
                        <li>Access: You have the right to request a copy of the information we hold about you.</li>
                        <li className='mt-2'>Rectification: You have the right to request that we correct any information that you believe is inaccurate or incomplete.</li>
                        <li className='mt-2'>Erasure: You have the right to request the deletion of your personal data under certain conditions.</li>
                        <li className='mt-2'>Limitation: You have the right to request the limitation of the processing of your personal data under certain conditions.</li>
                        <li className='mt-2'>Opposition: You have the right to object to the processing of your personal data under certain conditions.</li>
                        <li className='mt-2'>Portability: You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
                    </ul>
                </div>
                <div className="mt-5">
                    <h5 className="main-heading fs-5 fw-bold">6. Change to this Privacy Policy</h5>
                    <p className="description fs-6">We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when posted on this page.</p>
                </div>
            </div>
        </div>
    )
}

export default Privacypolicy