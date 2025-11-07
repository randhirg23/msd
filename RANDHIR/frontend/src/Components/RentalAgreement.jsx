import React from 'react';
import './RentalAgreement.css';

function RentalAgreement({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="rental-agreement-modal">
      <div className="rental-agreement-content">
        <div className="rental-agreement-header">
          <h2>Rental Agreement & Instructions</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="rental-agreement-body">
          <div className="agreement-section">
            <h3>📋 Terms & Conditions</h3>
            <ul>
              <li>Minimum rental period is 1 day</li>
              <li>Driver must be at least 21 years old with valid driving license</li>
              <li>International driving permit required for foreign nationals</li>
              <li>Security deposit of ₹10,000 will be collected at pickup</li>
              <li>Fuel tank must be returned at the same level as received</li>
            </ul>
          </div>

          <div className="agreement-section">
            <h3>🚗 Vehicle Condition</h3>
            <ul>
              <li>Vehicle will be inspected before and after rental</li>
              <li>Any damages beyond normal wear will be charged</li>
              <li>Report any existing damage immediately upon pickup</li>
              <li>Vehicle must be returned in the same condition</li>
              <li>Cleaning charges may apply if vehicle is returned dirty</li>
            </ul>
          </div>

          <div className="agreement-section">
            <h3>⏰ Pickup & Return</h3>
            <ul>
              <li>Pickup time: 9:00 AM - 6:00 PM (Monday to Saturday)</li>
              <li>Return time: Same as pickup time</li>
              <li>Late return charges: ₹500 per hour after grace period</li>
              <li>Early return does not qualify for refund</li>
              <li>24/7 emergency support available</li>
            </ul>
          </div>

          <div className="agreement-section">
            <h3>💳 Payment & Refunds</h3>
            <ul>
              <li>Full payment required at booking confirmation</li>
              <li>Refund policy: 50% refund if cancelled 24 hours before pickup</li>
              <li>No refund for same-day cancellations</li>
              <li>Security deposit refunded within 7 business days</li>
              <li>Additional charges for tolls, parking, and traffic violations</li>
            </ul>
          </div>

          <div className="agreement-section">
            <h3>🚫 Prohibited Activities</h3>
            <ul>
              <li>No smoking or consumption of alcohol in the vehicle</li>
              <li>No off-road driving or racing</li>
              <li>No towing or carrying heavy loads</li>
              <li>No driving under influence of drugs or alcohol</li>
              <li>No subletting or unauthorized drivers</li>
            </ul>
          </div>

          <div className="agreement-section">
            <h3>📞 Contact Information</h3>
            <ul>
              <li>Emergency: +91-9876543210</li>
              <li>Customer Service: +91-9876543211</li>
              <li>Email: support@carrental.com</li>
              <li>Office Hours: 9:00 AM - 6:00 PM</li>
              <li>24/7 Roadside Assistance Available</li>
            </ul>
          </div>

          <div className="agreement-footer">
            <p><strong>By proceeding with the booking, you agree to all terms and conditions mentioned above.</strong></p>
            <button className="agree-btn" onClick={onClose}>
              I Understand & Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentalAgreement;
