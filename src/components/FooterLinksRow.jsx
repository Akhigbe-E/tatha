import React from "react";

const FooterLinksRow = ({ title = "Title", links = [], extraLinkComponent }) => {
  return (
    <div className="flex flex-col space-y-6">
      <p className="text-lg">{title}</p>
      <ul className="space-y-5 flex flex-col">
        {links.map(({ text, href }) => (
          <li>
            <a className="text-[#fefeff] no-underline" href="#">
              {text}
            </a>
          </li>
        ))}
        {extraLinkComponent}
      </ul>
    </div>
  );
};

export default FooterLinksRow;
