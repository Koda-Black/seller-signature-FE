"use client";

import { useState } from "react";
import axios from "axios";

export default function SignaturePage() {
  const [signUrl, setSignUrl] = useState("");

  const handleCreateSignatureRequest = async () => {
    const { data } = await axios.post(
      "/agreement"
    );
    const signatureId = data.signature_request.signatures[0].signature_id;

    const { data: signingUrlData } = await axios.get(
      `/api/dropbox-sign/get-signing-url?signatureId=${signatureId}`
    );
    setSignUrl(signingUrlData.signUrl);
  };

  return (
    <div>
      <button onClick={handleCreateSignatureRequest}>
        Create Signature Request
      </button>
      {signUrl && (
        <iframe
          src={signUrl}
          width="100%"
          height="600px"
          style={{ border: "none" }}
          allowFullScreen
        />
      )}
    </div>
  );
}
