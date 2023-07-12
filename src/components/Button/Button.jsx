import React from 'react'
import './button.scss';

function Button({children, status, href}) {
  return (
    href ? 
        <a  
            href={href}
            className="btn"
            rel="noopener noreferrer"
            download="Fabricio-Cunha-CV">
                {children}
        </a> : 
        <button className={status === "SUCCESS" ? "btn-success btn" : status === "ERROR" ? "btn-fail btn" : "btn"}>
            {children}
        </button>
  )
}

export default Button