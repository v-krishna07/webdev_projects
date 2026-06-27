import { useState } from "react";

export default function Cop_Profile() {
  const [companyName, setCompanyName] = useState("");
  const [taxID, setTaxID] = useState("");
  const [corporateEmail, setCorporateEmail] = useState("");
  const [validID, setValidID] = useState({
    name: false,
    id: false,
    mail: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usrData = {
      CompanyName: companyName,
      CorporateEmail: corporateEmail,
      TaxID: taxID,
    };
    await new Promise(() => {
      fetch("http://localhost:5173/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usrData),
      });
    });
  };

  const handleTaxID = (e) => {
    const value = e.target.value;
    setTaxID(value);
    const regux = /^[A-Z]{2}\d{6}$/;
    const result = regux.test(value);
    setValidID({ ...validID, id: result });
  };
  const handleCorporateEmail = (e) => {
    const value = e.target.value;
    const regux = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result = regux.test(value);
    setCorporateEmail(value);
    setValidID({ ...validID, mail: result });
  };
  const handleCompanyName = (e) => {
    const value = e.target.value;
    const regux = /^[a-zA-Z0-9_-]{3,16}$/;
    const result = regux.test(value);
    setCompanyName(value);
    setValidID({ ...validID, name: result });
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="label">Company Name</p>
        <input
          type="text"
          value={companyName}
          className="input"
          placeholder="XYZ"
          onChange={handleCompanyName}
        />
        <p>{companyName}</p>
        <p className="label">Tax ID</p>
        <input
          type="text"
          value={taxID}
          className={`input ${!validID.id && taxID !== "" ? "border-red-500" : "border-gray-300"}`}
          onChange={handleTaxID}
          placeholder="e.g. XX123456"
        />
        <p className="label">Corporate Email</p>
        <input
          type="text"
          value={corporateEmail}
          className="input"
          placeholder="xyz1234@gmail.com"
          onChange={handleCorporateEmail}
        />
        <br />

        <button
          className="button"
          type="submit"
          disabled={!validID.id || !validID.mail || !validID.name}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
}
