import { useState } from 'react';

const ConsentForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    insuranceProvider: '',
    policyNumber: '',
    claimType: '',
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Please provide consent to proceed');
      return;
    }
    
    console.log('Consent form submitted:', formData);
    // Here you would typically send this data to your backend/EKA API
    alert('Consent form submitted successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Insurance Claim Consent Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="insuranceProvider">Insurance Provider:</label>
          <input
            type="text"
            id="insuranceProvider"
            name="insuranceProvider"
            value={formData.insuranceProvider}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="policyNumber">Policy Number:</label>
          <input
            type="text"
            id="policyNumber"
            name="policyNumber"
            value={formData.policyNumber}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="claimType">Claim Type:</label>
          <select
            id="claimType"
            name="claimType"
            value={formData.claimType}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          >
            <option value="">Select Claim Type</option>
            <option value="medical">Medical Treatment</option>
            <option value="prescription">Prescription</option>
            <option value="emergency">Emergency</option>
            <option value="preventive">Preventive Care</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            I consent to sharing my medical information with the insurance provider for claim processing.
          </label>
        </div>

        <button 
          type="submit"
          style={{ 
            backgroundColor: '#007bff', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit Consent
        </button>
      </form>
    </div>
  );
};

export default ConsentForm;
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ConsentForm.css';

// const ConsentForm = () => {
//   const [agreed, setAgreed] = useState(false);
//   const navigate = useNavigate();

//   const handleAgree = () => {
//     if (agreed) {
//       // Store consent in localStorage
//       localStorage.setItem('userConsent', JSON.stringify({
//         agreed: true,
//         timestamp: new Date().toISOString()
//       }));
      
//       // Navigate to insurance claim form or dashboard
//       navigate('/insurance-claim');
//       console.log('User agreed to terms');
//     }
//   };

//   const handleDisagree = () => {
//     // Navigate back to login or home
//     navigate('/login');
//     console.log('User disagreed to terms');
//   };

//   return (
//     <div className="consent-container">
//       <div className="consent-card">
//         {/* Header Section */}
//         <div className="consent-header">
//           <div className="illustration">
//             <div className="handshake-icon">
//               <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
//                 <circle cx="60" cy="60" r="60" fill="#E3F2FD"/>
//                 <path d="M30 45C30 40 34 36 39 36H51C56 36 60 40 60 45V55H30V45Z" fill="#2196F3"/>
//                 <path d="M60 45C60 40 64 36 69 36H81C86 36 90 40 90 45V55H60V45Z" fill="#1976D2"/>
//                 <rect x="35" y="55" width="50" height="25" rx="2" fill="#FFF"/>
//                 <circle cx="85" cy="45" r="3" fill="#4CAF50"/>
//                 <path d="M83 44L84 45L87 42" stroke="white" strokeWidth="1.5" fill="none"/>
//               </svg>
//             </div>
//           </div>
//           <h1>Welcome to EkaShield Insurance Support</h1>
//           <p className="subtitle">Secure Healthcare Data Sharing</p>
//         </div>

//         {/* Greeting Section */}
//         <div className="greeting-section">
//           <h2>Hello, 👋</h2>
//           <p>Before you start, please read and accept our <a href="#" className="link">privacy policy</a> and <a href="#" className="link">terms of service</a></p>
//         </div>

//         {/* Terms Content */}
//         <div className="terms-content">
//           <div className="term-item">
//             <h3>1. User Rights</h3>
//             <p>You have the right to control access to your healthcare data by managing permissions and can revoke consent at any time through your account settings.</p>
//           </div>

//           <div className="term-item">
//             <h3>2. Data Usage</h3>
//             <p>Your medical data will be used exclusively for insurance claim processing and will be shared only with authorized insurance providers as per your specific consent.</p>
//           </div>

//           <div className="term-item">
//             <h3>3. Data Security</h3>
//             <p>We implement industry-standard security measures to protect your healthcare data, including end-to-end encryption and secure transmission protocols.</p>
//           </div>

//           <div className="term-item">
//             <h3>4. Insurance Integration</h3>
//             <p>By consenting, you authorize EkaShield to share relevant medical records with your insurance provider to facilitate claim processing and coverage verification.</p>
//           </div>
//         </div>

//         {/* Consent Checkbox */}
//         <div className="consent-checkbox">
//           <label className="checkbox-container">
//             <input 
//               type="checkbox" 
//               checked={agreed}
//               onChange={(e) => setAgreed(e.target.checked)}
//             />
//             <span className="checkmark"></span>
//             <span className="checkbox-text">
//               I have read and agree to the terms and conditions for healthcare data sharing
//             </span>
//           </label>
//         </div>

//         {/* Action Buttons */}
//         <div className="action-buttons">
//           <button 
//             className="btn-disagree"
//             onClick={handleDisagree}
//           >
//             Disagree
//           </button>
//           <button 
//             className={`btn-agree ${!agreed ? 'disabled' : ''}`}
//             onClick={handleAgree}
//             disabled={!agreed}
//           >
//             Agree
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConsentForm;