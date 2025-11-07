import React from 'react';
import './TermsAndCharges.css';

function TermsAndCharges() {
  return (
    <div className="terms-page">
      <div className="container">
        <div className="terms-header">
          <h1>Terms & Conditions</h1>
          <p>Please read our rental terms, charges, and policies carefully</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>💰 Rental Charges</h2>
            <div className="charges-grid">
              <div className="charge-item">
                <h3>Daily Rental Rates</h3>
                <ul>
                  <li><strong>Budget Cars:</strong> ₹3,500 - ₹6,500 per day</li>
                  <li><strong>Mid-Range Cars:</strong> ₹8,000 - ₹12,000 per day</li>
                  <li><strong>Luxury Cars:</strong> ₹14,000 - ₹20,000 per day</li>
                  <li><strong>Premium Sports:</strong> ₹20,000+ per day</li>
                </ul>
              </div>
              
              <div className="charge-item">
                <h3>Additional Charges</h3>
                <ul>
                  <li><strong>Security Deposit:</strong> ₹10,000 (refundable)</li>
                  <li><strong>Late Return:</strong> ₹500 per hour after grace period</li>
                  <li><strong>Fuel Charges:</strong> As per actual consumption</li>
                  <li><strong>Toll Charges:</strong> Customer responsibility</li>
                  <li><strong>Cleaning Fee:</strong> ₹500 if vehicle returned dirty</li>
                </ul>
              </div>
              
              <div className="charge-item">
                <h3>Payment Methods</h3>
                <ul>
                  <li>Credit/Debit Cards (Visa, MasterCard, RuPay)</li>
                  <li>UPI Payments (Google Pay, PhonePe, Paytm)</li>
                  <li>Net Banking</li>
                  <li>Cash (limited locations)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2>📋 Rental Terms & Conditions</h2>
            <div className="terms-grid">
              <div className="term-item">
                <h3>Eligibility Requirements</h3>
                <ul>
                  <li>Minimum age: 21 years</li>
                  <li>Valid Indian driving license (minimum 1 year old)</li>
                  <li>International driving permit for foreign nationals</li>
                  <li>Valid ID proof (Aadhaar, PAN, Passport)</li>
                  <li>Credit card for security deposit</li>
                </ul>
              </div>
              
              <div className="term-item">
                <h3>Booking & Cancellation</h3>
                <ul>
                  <li>Minimum rental period: 1 day</li>
                  <li>Maximum rental period: 30 days</li>
                  <li>Advance booking: Up to 6 months</li>
                  <li>Cancellation 24+ hours: 50% refund</li>
                  <li>Same-day cancellation: No refund</li>
                </ul>
              </div>
              
              <div className="term-item">
                <h3>Vehicle Condition</h3>
                <ul>
                  <li>Vehicle inspection before and after rental</li>
                  <li>Report existing damage immediately</li>
                  <li>Normal wear and tear accepted</li>
                  <li>Damage beyond normal wear charged</li>
                  <li>Cleaning charges for dirty returns</li>
                </ul>
              </div>
              
              <div className="term-item">
                <h3>Driving Restrictions</h3>
                <ul>
                  <li>No off-road driving</li>
                  <li>No racing or speed contests</li>
                  <li>No towing or heavy loads</li>
                  <li>No driving under influence</li>
                  <li>No unauthorized drivers</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2>⏰ Operating Hours & Locations</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <h3>Pickup & Return Hours</h3>
                <ul>
                  <li><strong>Monday - Saturday:</strong> 9:00 AM - 6:00 PM</li>
                  <li><strong>Sunday:</strong> 10:00 AM - 4:00 PM</li>
                  <li><strong>Public Holidays:</strong> 10:00 AM - 2:00 PM</li>
                  <li><strong>Emergency Pickup:</strong> 24/7 (Extra charges apply)</li>
                </ul>
              </div>
              
              <div className="hours-item">
                <h3>Service Locations</h3>
                <ul>
                  <li><strong>Delhi:</strong> Airport, Connaught Place, Gurgaon</li>
                  <li><strong>Mumbai:</strong> Airport, Bandra, Andheri</li>
                  <li><strong>Bangalore:</strong> Airport, Koramangala, Whitefield</li>
                  <li><strong>Chennai:</strong> Airport, T. Nagar, OMR</li>
                  <li><strong>Hyderabad:</strong> Airport, HITEC City, Banjara Hills</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2>🚫 Prohibited Activities</h2>
            <div className="prohibited-list">
              <div className="prohibited-item">
                <span className="prohibited-icon">🚭</span>
                <span>No smoking or consumption of alcohol in the vehicle</span>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">🏁</span>
                <span>No racing, speeding, or reckless driving</span>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">🚫</span>
                <span>No driving under influence of drugs or alcohol</span>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">👥</span>
                <span>No unauthorized drivers or subletting</span>
              </div>
              <div className="prohibited-item">
                <span className="prohibited-icon">🏔️</span>
                <span>No off-road driving or towing</span>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2>📞 Contact & Support</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <h3>Emergency Support</h3>
                <p><strong>24/7 Helpline:</strong> +91-9876543210</p>
                <p><strong>Roadside Assistance:</strong> +91-9876543211</p>
                <p><strong>Email:</strong> emergency@carrental.com</p>
              </div>
              
              <div className="contact-item">
                <h3>Customer Service</h3>
                <p><strong>Phone:</strong> +91-9876543212</p>
                <p><strong>Email:</strong> support@carrental.com</p>
                <p><strong>Hours:</strong> 9:00 AM - 6:00 PM (Mon-Sat)</p>
              </div>
              
              <div className="contact-item">
                <h3>Booking & Reservations</h3>
                <p><strong>Phone:</strong> +91-9876543213</p>
                <p><strong>Email:</strong> bookings@carrental.com</p>
                <p><strong>WhatsApp:</strong> +91-9876543214</p>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2>⚖️ Legal & Insurance</h2>
            <div className="legal-info">
              <div className="legal-item">
                <h3>Insurance Coverage</h3>
                <ul>
                  <li>Third-party liability insurance included</li>
                  <li>Comprehensive coverage available (extra charges)</li>
                  <li>Personal accident coverage for driver</li>
                  <li>Roadside assistance included</li>
                </ul>
              </div>
              
              <div className="legal-item">
                <h3>Legal Compliance</h3>
                <ul>
                  <li>All vehicles have valid registration and insurance</li>
                  <li>Pollution Under Control (PUC) certificates valid</li>
                  <li>Fitness certificates up to date</li>
                  <li>Compliance with local traffic laws</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="terms-footer">
            <div className="agreement-notice">
              <h3>📄 Agreement Acceptance</h3>
              <p>By proceeding with the booking, you acknowledge that you have read, understood, and agree to all the terms and conditions mentioned above. This agreement is legally binding and enforceable under Indian law.</p>
              
              <div className="important-notice">
                <h4>⚠️ Important Notice</h4>
                <p>Please ensure you have a valid driving license and meet all eligibility requirements before booking. Any violation of terms may result in immediate termination of rental agreement and forfeiture of security deposit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndCharges;
