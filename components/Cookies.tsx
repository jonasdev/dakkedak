import React from "react";
import CookieConsent from "react-cookie-consent";

export default function Cookies() {
  return (
    <div className="fixed inset-x-0 bottom-0 px-6 z-[100]">
      <CookieConsent
        style={{
          backgroundColor: "#FFF",
          color: "#000",
          border: "1px solid black",
          maxWidth: "700px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "20px",
          position: "sticky",
          alignItems: "center",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "20px",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        }}
        buttonStyle={{
          color: "#fff",
          fontSize: "13px",
          backgroundColor: "#B49180",
          display: "flex",
          alignSelf: "center",
          borderRadius: "20px",
          padding: "12px",
        }}
        buttonClasses="bg-primary text-white focus:ring-primary active:bg-primary-dark lg:hover:bg-primary-dark shadow-xl rounded px-8 py-3 text-sm font-medium transition active:translate-y-[2px] flex justify-center items-center text-center"
        buttonText="Acceptér"
      >
        🍪 Hjemmesiden anvender cookies til at huske dine indstillinger og
        statistik. Denne information deles med tredjepart.
        <a
          href="/cookies"
          className="font-semibold underline underline-offset-2 text-primary-dark inline-block ml-1"
        >
          Læs mere
        </a>{" "}
        <a href="https://www.minecookies.org" target="_blank" className="">
          {" "}
          <img src="/cookies.png" className="w-5 h-auto inline-block ml-1" />
        </a>
      </CookieConsent>
    </div>
  );
}
