import React from "react";
import { BsGoogle, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="mb-5">
      <footer className="text-center mt-5 mb-3">
        <div className="d-flex justify-content-center gap-3 mb-4">
          {[BsGoogle, BsFacebook, BsLinkedin, BsTwitter].map((Icon, idx) => (
            <Button
              key={idx}
              variant="outline-dark"
              size="sm"
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" }}
            >
              <Icon />
            </Button>
          ))}
        </div>
        <div className="my-3">
        <div>
          <p className="text-muted">Example@gmail.com</p>
        </div>
        <div className="text-muted">
          Copyright © 2025 Name. All rights reserved.
        </div>
        </div>
       
      </footer>
    </div>
  );
};

export default Footer;
