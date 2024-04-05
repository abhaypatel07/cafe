import { useRouterManager } from "@/services/RouterManager";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
  const routerManager = useRouterManager();

  return (
    <div className="absolute left-20 mt-[24px] pb-[100px] w-1/2">
      <h1 className="font-ploni text-4xl font-bold leading-12 text-left">
        Privacy Policy
      </h1>
      <br />
      <span className="font-ploni text-base font-normal leading-5 text-left text-gray-500">
        Last modified: September 12, 2022
      </span>
      <br />
      <br />
      <div>
        <h3 className="font-ploni text-xl font-bold leading-7 text-left">
          Introduction
        </h3>
        <>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            Citizen Caf&eacute; Ltd. (&ldquo;Citizen&rdquo;, &ldquo;we&rdquo;,
            &ldquo;our&rdquo; or &ldquo;us&rdquo;) is providing language
            learning, with different method that teaches you to speak Hebrew
            with more ease and
            confidence,&#160;https://www.citizencafetlv.com/&#160;, its
            subdomains and its related features (&ldquo;Website&ldquo;,
            collectively &ldquo;Services&rdquo;).
          </p>
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            Citizen is dedicated to protecting your privacy rights and making
            our practices regarding your personal data more transparent and
            fair. This Privacy Policy (&ldquo;Policy&rdquo;) was designed to
            help you understand the information we collect, store, use and
            share, and it applies whenever you visit our Website or otherwise
            access or use any of our Services. Citizen Caf&eacute; Ltd. a
            company registered in Israel, is the data controller for the
            purposes of the General Data Protection Regulation
            (&ldquo;GDPR&rdquo;) and any relevant local legislation (&ldquo;Data
            Protection Laws&rdquo;).
          </p>
          <br />
          <p className="font-ploni text-base font-semibold leading-6 text-left">
            We strongly encourage you to read and understand this Policy. In the
            event that you do not agree to our Policy, please do not use our
            Services.
          </p>
          <br />
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            Providing us with Personal Data is not legally required, but without
            it we will be unable to provide you with the full range or the best
            experience of our Services.
          </p>
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            This Privacy Policy is integrated into and forms part of the 
            <Link
              href={{
                pathname: routerManager.TERM_CONDITIONS_PAGE_PATH,
              }}
              className="underline"
            >
              Citizen Terms of Use
            </Link>
            , and is incorporated therewith by reference.
          </p>
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            By using the Services, including our Apps and Website, you signify
            your acceptance of this Privacy Policy. If you do not agree to the
            terms of this Privacy Policy, please do not use our Services. Your
            continued use of the Services following the posting of changes to
            this Privacy Policy will mean that you accept those changes.
          </p>
          <br />
        </>
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            1. What types of data we collect?
          </h3>
          <>
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              1.1 Information You Provide.
            </p>
            <p className="font-ploni text-sm font-normal leading-4 text-left">
              When you register your account, we require you to provide us with
              your email address, your name, and your password. In addition,
              when you subscribe to our Services or place an order with us, we
              collect payment details and record your agreement to our Terms and
              Conditions. If you choose to log in, access or otherwise connect
              to the Services through a social networking service or a single
              sign on service (such as Facebook, Twitter, Instagram, Google,
              Apple etc.), we may collect your user ID and/or username
              associated with that social networking service, as well as any
              information you make public using that social networking service
              or that the social networking service allows us to access.
            </p>
            <br />
            <br />
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              1.2 Automatically Technical Information.
            </p>
            <p className="font-ploni text-sm font-normal leading-4 text-left">
              When you use our Services, we collect technical information about
              your device. Such information may include pages and files
              accessed, time of access; amount of data transferred; browser
              version; operating system; language settings; device ID;
              previously visited pages (if you access our website via a link);
              IP address; session ID.
            </p>
            <br />
            <br />
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              1.3 Communication Information.
            </p>
            <p className="font-ploni text-sm font-normal leading-4 text-left">
              When you send us an email or contact us via the support in our
              Services, we collect the Personal Data you provide us. This may
              include your name, email address and any other information you
              choose to provide.
            </p>
            <br />
            <br />
          </>
        </>
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            2. Tracking Technologies
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            When you visit or access our Services, we use cookies, pixels,
            beacons, local storage and similar technologies (&ldquo;Tracking
            Technologies&ldquo;). These allow us to automatically collect
            information about you, your device, and your online behavior, in
            order to enhance your navigation in our Services, improve our
            Services&rsquo; performance, perform analytics, customize your
            experience and offer you, for example, tailored content and
            advertisements that better correspond with your interests. Citizen
            may use non-Personal Data for commercial, marketing, and/or business
            purposes, such as reporting and conducting research and development
            in order to enhance our existing Services and/or develop new
            products and services. We may share this information internally
            and/or with third parties for our or their purposes in an anonymous
            or aggregated form that is designed to prevent anyone from
            identifying you.
          </p>
          <br />
          <br />
          <>
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              2.1 How do we collect information?
            </p>
            <>
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                When you enter the Website, we collect your browser type and
                your IP address (a unique address that identifies your computer
                on the Internet). When you use our mobile Application, we
                collect your device type, your device ID, and your IP address.
              </p>
              <br />
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                In addition, we store certain information from your browser
                using &ldquo;cookies.&rdquo;&#8232;A &ldquo;cookie&rdquo; is a
                small text file that a website can send to your computer&rsquo;s
                browser. It&rsquo;s like an internet user&rsquo;s identification
                card, which tells a website when a user is re-visiting the site.
                Their ability is limited to containing and transferring to the
                website as much information as the users have disclosed to that
                site. Cookies can&rsquo;t read or interfere with other
                information saved on your hard drive.
              </p>
              <br />
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                We use cookies on certain of our pages to help analyze our web
                page flow, customize our services and content. <br />
                We use cookies to help identify you and maintain your signed-in
                status. Most cookies are &ldquo;session cookies&rdquo; which
                exist only during one session and they disappear from your
                computer when you close your browser software or turn off your
                computer. Persistent cookies remain on your computer after you
                close your browser or turn off your computer.
              </p>
              <br />
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                If you have chosen to identify yourself in this website, we will
                use session cookies containing encrypted information to uniquely
                identify you. Each time you log into the Service, a session
                cookie containing an encrypted, unique identifier that is tied
                to your account is placed in your browser. Session cookies are
                required to use the Service.
              </p>
              <br />
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                We use persistent cookies that only we can read and use to
                identify browsers that have previously visited this website.
                When you use the Service or provide us with personal
                information, a unique identifier is assigned to you. This unique
                identifier is associated with a persistent cookie that we place
                on your Web browser. We are especially careful about the
                security and confidentiality of the information stored in
                persistent cookies (e.g. we do not store account numbers or
                passwords in persistent cookies). If you disable your Web
                browser&rsquo;s ability to accept cookies, you will be able to
                navigate in this websites, but you will not be able to use the
                Service.
              </p>
              <br />
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                Most computers are set up to automatically accept cookies.
                However, you can reset your browser settings to refuse cookies,
                or alert you when a cookie is being sent so you can choose
                whether or not to accept it.
              </p>
              <br />
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                To learn more about how can manage your cookies, below is a list
                of useful links that can provide you with more information on
                how to manage your cookies:
              </p>
              <ul className="list-disc relative left-8">
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://support.microsoft.com/en-us/topic/description-of-cookies-ad01aa7e-66c9-8ab2-7898-6652c100999d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Internet Explorer
                  </a>
                </li>
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari (Desktop)
                  </a>
                </li>
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://support.apple.com/en-us/105082"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari (Mobile)
                  </a>
                </li>
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://support.google.com/nexus/answer/54068?visit_id=637249861772874734-2281104728&hl=en&rd=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android Browser
                  </a>
                </li>
              </ul>
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                You can learn more and turn off certain third party targeting
                and advertising cookies by visiting the following third party
                webpages:
              </p>
              <ul className="list-disc relative left-8">
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://www.iab.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Interactive Advertising Bureau (US)
                  </a>
                </li>
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://iabeurope.eu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Interactive Advertising Bureau (EU)
                  </a>
                </li>
                <li className="non-ordered underline font-ploni text-sm font-normal leading-4 text-left">
                  <a
                    href="https://www.youronlinechoices.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    European Interactive Digital Advertising Alliance (EU)
                  </a>
                </li>
              </ul>
              <br />
              <p className="font-ploni text-sm font-normal leading-4 text-left">
                We use cookies:
              </p>
              <ul className="list-disc relative left-8">
                <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                  for login authentication and login status;
                </li>
                <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                  for load distribution and corresponding optimization of our
                  Services;
                </li>
                <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                  to save your language settings;
                </li>
                <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                  to provide and improve our Services;
                </li>
                <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                  to analyze user behavior on different devices;
                </li>
                <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                  for analytics and advertising.
                </li>
              </ul>
            </>
          </>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            3. Why we process your Personal Data?
          </h3>
          <>
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              3.1 Provision of our Services;
            </p>
            <p className="font-ploni text-sm font-normal leading-4 text-left">
              support. We use your Personal Data, such as your name and email
              address, for consumer services purposes. This includes, for
              example, responding to your inquiries. Our interests in this case
              are enforcing our policies, protection against fraud and misuse of
              our Services.
            </p>
            <br />
            <br />
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              3.2 Improve our Services.
            </p>
            <p className="font-ploni text-sm font-normal leading-4 text-left">
              We collect and analyse information about you and your usage of our
              Services to improve the usability and effectiveness of our
              Services.
            </p>
            <br />
            <br />
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              3.3 Marketing and Advertising.
            </p>
            <p className="font-ploni text-sm font-normal leading-4 text-left">
              When you visit our Services, we may use Tracking Technologies
              (which may collect Personal Data). Your consent (where required)
              and our legitimate interests are the legal bases for processing
              this data. In this case, our legitimate interests are to provide
              you with tailored services, content and advertisements that are
              more relevant to you.
            </p>
            <br />
            <br />
            <p className="font-ploni text-base font-semibold leading-6 text-left">
              3.4 Compliance with applicable laws.
            </p>
            <p className="font-ploni text-sm font-normal leading-4 text-left">
              We may be required to collect, retain, or share your Personal
              Data, under applicable laws.
            </p>
            <br />
            <br />
          </>
        </>
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            4. How we use your information?
          </h3>
          <div>
            <ul className="list-disc relative left-8">
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                To provide and improve our Services;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                To monitor interactions with our marketing emails;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                For machine learning, artificial intelligence, or natural
                language processing research, pseudonymized, anonymized, or
                aggregated;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                To conduct surveys under pseudonyms or anonymities;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                For the purpose of processing subscriptions to our services;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                In order to protect our interests or those of third parties;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                For the purpose of maintaining and enhancing the security of our
                services;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                For the purpose of preventing abuse of our services;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                For the purpose of complying with our legal obligations;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                To communicate with you;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                For analytics and advertising, including personalized ads;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                In order to perform or enforce our obligations;
              </li>
              <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
                For any other purpose with your consent.
              </li>
            </ul>
          </div>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            5. With whom we share your data?
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            We may share your Personal Data as described below:
          </p>
          <ol type="a">
            <li className="font-ploni text-sm font-normal leading-4 text-left">
              <strong>a) Affiliated companies:</strong> we may share Personal
              Data internally within our affiliated companies, for the purposes
              described in this Policy.
            </li>
            <br />

            <li className="font-ploni text-sm font-normal leading-4 text-left">
              <strong>b) Service providers:</strong> we work with service
              providers that work on our behalf that may need access to certain
              personal data in order to provide their services to us. These
              companies may include, but are not limited to, cloud storage
              providers, analytics services, fraud prevention, identity
              verification provider, etc.
            </li>
            <br />

            <li className="font-ploni text-sm font-normal leading-4 text-left">
              <strong>c) Mergers and acquisitions:</strong> we may transfer,
              sell or otherwise share your data if we enter into a business
              transaction such as a merger, acquisition, reorganization,
              bankruptcy, or sale of some or all of our assets. Any party that
              acquires our assets as part of such a transaction may continue to
              use your data in accordance with the terms of this Policy. If we
              believe that such change in control might materially affect your
              Personal Data then stored with us, we will notify you of this
              event and the choices you may have via e-mail and/or prominent
              notice on our Services.
            </li>
            <br />

            <li className="font-ploni text-sm font-normal leading-4 text-left">
              <strong>d) Any Purpose</strong> we might share your information to
              fulfill any purpose for which you provide it; for any other
              purpose disclosed to you when you provide the information; or with
              your consent.
            </li>
            <br />

            <li className="font-ploni text-sm font-normal leading-4 text-left">
              <strong>e) Our rights</strong> we might share your information if
              we believe disclosure is necessary or appropriate to protect our
              rights, property, or interests, our investors, or others.
            </li>
            <br />
          </ol>
        </>
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            6. Your rights
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            This section addresses the specific rights you may have concerning
            your Personal Data.
          </p>
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            You may request to:
          </p>
          <ol type="1" className="relative left-7">
            <li className="numbered font-ploni text-sm font-normal leading-4 text-left">
              Receive confirmation as to whether or not Personal Data concerning
              you is being processed, and access your stored Personal Data,
              together with supplementary information.
            </li>
            <li className="numbered font-ploni text-sm font-normal leading-4 text-left">
              Receive a copy of Personal Data you directly volunteer to us in a
              structured, commonly used and machine-readable format.
            </li>
            <li className="numbered font-ploni text-sm font-normal leading-4 text-left">
              Request rectification of your Personal Data that is in our
              control.
            </li>
            <li className="numbered font-ploni text-sm font-normal leading-4 text-left">
              Request erasure of your Personal Data.
            </li>
            <li className="numbered font-ploni text-sm font-normal leading-4 text-left">
              Object to the processing of Personal Data by us.
            </li>
            <li className="numbered font-ploni text-sm font-normal leading-4 text-left">
              Request to restrict processing of your Personal Data by us.
            </li>
          </ol>
          <br />
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            Please note that these rights are not absolute, and may be subject
            to our own legitimate interests and regulatory requirements. You are
            welcome to contact us for any questions, requests or complaints
            through our contact details below.
          </p>{" "}
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            We will make an effort to reply within a reasonable timeframe.
            Please feel free to reach out to us at any time. If you are
            unsatisfied with our response, you can lodge a complaint with the
            competent supervisory authority.
          </p>
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            <strong>6.1 Residents of California:</strong> This Privacy Policy
            discloses the categories of personal information we have collected
            about California residents over the past twelve months, the sources
            of collection, how we use that information, and the categories of
            third parties with whom we share that information for a business or
            commercial purpose. California residents have the right to request
            that we disclose information about the personal information we
            collected, used, disclosed, and sold about them during the past
            twelve months and the right to request specific pieces of their
            personal information. California residents also have the right to
            request deletion of the personal information we have collected about
            them. California residents or their authorized agent can submit a
            request by calling Toll-Free (only calls): +1 888-808-0334&#160;or
            by emailing&#160;office@citizenCafeTLV.com.&#160;
            <br />
            <br />
            Requestors will need to provide us with certain personal information
            for us to match with our records in order to verify their identity
            and residency. The personal information that we use to verify a
            requestor&rsquo;s identity and residency will not be used for any
            other purpose. California residents have the right not to be
            discriminated against for exercising their CCPA privacy rights and
            we do not discriminate against California residents who exercise
            their CCPA privacy rights.
            <br />
            <br />
            <strong>6.2 California and Nevada Residents:</strong> We may share
            your personal information in ways that could be considered a
            &ldquo;sale&rdquo; of personal information under certain state laws.
            Residents of California and Nevada have the right to opt out of the
            sale of their personal information. To do so please&#160;emailing us
            at&#160;office@citizenCafeTLV.com.
            <br />
            <br />
            <strong>6.3 Individuals in the EEA:</strong> In addition to the
            foregoing rights, you have the right to lodge a complaint with a
            supervisory authority if you believe we have processed your
            information in a manner inconsistent with your privacy rights. We
            kindly request that you contact us first so that we may address your
            concern by emailing us at&#160;office@citizenCafeTLV.com.
            <br />
            <br />
            You may also have the right to make a GDPR complaint to the relevant
            Supervisory Authority. A list of EEA Supervisory Authorities is
            available here:
            http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
            and the UK here: https://ico.org.uk/global/contact-us/. If you need
            further assistance regarding your rights, please contact us using
            the contact information provided below and we will consider your
            request in accordance with applicable law. In some cases our ability
            to uphold these rights for you may depend upon our obligations to
            process personal information for security, safety, fraud prevention
            reasons, compliance with regulatory or legal requirements, or
            because processing is necessary to deliver the services you have
            requested. Where this is the case, we will inform you of specific
            details in response to your request.
            <br />
          </p>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            7. Transfer of data
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            We may transfer your Personal Data to third parties, as set out in
            this Policy. Such third parties may reside in various jurisdictions
            around the world. In such circumstances and where required by law,
            we have put in place contractual measures to ensure that the
            recipients of your Personal Data provide appropriate safeguards for
            your data (for example, by training its staff and implementing
            effective technological and organizational security measures) and
            are only using it for the purposes of performing their services, or
            otherwise for those purposes for which we have disclosed your
            information to them.
          </p>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            8. How we protect your data?
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            In order to protect your personal data, Testing ID, User Photo,
            access credentials, and Citizen Hebrew Tests results etc., Citizen
            has implemented, technical, and physical safeguards to help prevent
            unauthorized access, use, or disclosure of your Personal Data. While
            we seek to protect your information to ensure that it is kept
            confidential, we cannot guarantee the security of any information.
            You should be aware that there is always some risk involved in
            transmitting information over the internet and that there is also
            some risk that others could find a way to thwart our security
            systems. Such breaches can lead to things such as reputational harm,
            fraud or identity theft. Therefore, we encourage you to exercise
            discretion regarding the Personal Data you choose to disclose. If
            you feel that your privacy was treated not in accordance with our
            Policy, or if any person attempted to abuse the Services or acted in
            an inappropriate manner, please contact us directly via our contact
            details available below.
          </p>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            9. Retention
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            We will retain your Personal Data for as long as necessary to
            provide our Services, and as necessary to comply with our legal
            obligations, resolve disputes, and enforce our policies. Retention
            periods will be determined to take into account the type of
            information that is collected and the purpose for which it is
            collected, bearing in mind the requirements applicable to the
            situation and the need to destroy outdated, unused information at
            the earliest reasonable time.
          </p>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            10. Updates to this Policy
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            We reserve the right to change this Policy at any time. The most
            current version will always be posted on our Services (as reflected
            in the &ldquo;Last Updated&rdquo; heading). You are advised to check
            for updates regularly. By continuing to access or use our Services
            after any revisions become effective, you agree to be bound by the
            updated Policy.
          </p>
        </>
        <br />
        <br />

        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            11. Children under age of digital consent
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            Children deserve extra privacy protection. Due to this, we treat
            child users differently to ensure their parents remain in control,
            and we only collect the bare minimum information to make Citizen
            work.&#8232;Upon creating a Ciitizen account, we collect a
            user&rsquo;s age and compare it with the local standard for child
            online consent in their country. The term &ldquo;child user&rdquo;
            refers to users under this age. User accounts can be created by
            children, but they must use their parent&rsquo;s email address
            rather than their own. As well, we do not require child users to
            provide their own names.
            <br />
            <br />
            &#8232;Our email will inform parents about Citizen&rsquo;s privacy
            practices regarding child users, including what personal data we
            collect, how we use, share, and protect that information. The email
            also explains how parents can request that Citizen access, change or
            delete the personal data about their child.
            <br />
            <br />
            Child users receive the following special treatment:
          </p>
          <ul className="relative left-6">
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              We remove mature words like “beer” and “wine” from lessons to make
              them age-appropriate.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Advertisements are set to family-friendly content.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              In the Profile page, the child cannot state their name, location,
              or bio.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Avatar photos cannot be uploaded.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Email promotions are disabled.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Forums for discussion are disabled.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              A child’s profile is made private and hidden from other users.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              It is not possible for other users to follow the child.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Users cannot follow or search for other users.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Email invitations cannot be sent.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              The ability to find friends on Facebook is disabled.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              It is not possible to log in with Facebook, Google, or Apple.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Twitter, Facebook, and Instagram follow buttons are disabled.
            </li>
          </ul>
          <br />
          <br />
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            Furthermore, all users under the age of 16 receive the following
            special treatment:
          </p>
          <ul className="relative left-6">
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Non-personalized advertisements are displayed.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              We disable third-party behavioural tracking.
            </li>
            <li className="non-ordered font-ploni text-sm font-normal leading-4 text-left">
              Analytics from third parties are disabled.
            </li>
          </ul>
          <br />
          <br />
          <p>
            In order to prevent restricted users from amending these features,
            these settings will be hidden or grayed out. As soon as the user is
            old enough, we&rsquo;ll automatically remove the restrictions, reset
            settings to defaults, and let them configure the settings
            themselves.&#8232;
            <br />
            <br />
            With regards to the Children&rsquo;s Online Privacy Protection Rule
            (&ldquo;COPPA&ldquo;), Citizen only collects personal information
            from children under the age of 13 for the sole purpose of performing
            internal operations of the Service. If we discover that we have
            unknowingly collected additional personal information from these
            children we will delete it. If you believe this to be the case,
            please contact us at&#160;hello@citizenCafeTLV.com.
          </p>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            12. Third party websites and links
          </h3>

          <p className="font-ploni text-sm font-normal leading-4 text-left">
            Please note that you may have cookies placed on your computer by
            third party websites that refer you to our Service. Although we do
            not share your personal data with these third party websites unless
            it is reasonably necessary to offer the Service, they may be able to
            link certain non-personally identifiable information we transfer to
            them with personal data they previously collected from you. Please
            review the privacy policies of each website you visit to better
            understand their privacy practices. In addition, Citizen would like
            to inform you that anytime you click on links (including advertising
            banners), which take you to third party websites, you will be
            subject to the third parties&rsquo; privacy policies.
            <br />
            <br />
            Our Services contain links to other sites operated by third parties.
            Citizen does not control such other sites and is not responsible for
            their content, their privacy policies, or their use of personal
            data, including any personal or financial information collected by
            our third party payment processor to process payments for in-app
            purchases. Citizen inclusion of such links does not imply any
            endorsement of the content on such sites or of their owners or
            operators except as disclosed on the Services. Any information
            submitted by you directly to these third parties is subject to that
            third party&rsquo;s privacy policy.
          </p>
        </>
        <br />
        <br />
        <>
          <h3 className="font-ploni text-xl font-bold leading-7 text-left">
            13. Contact Us
          </h3>
          <p className="font-ploni text-sm font-normal leading-4 text-left">
            If you have any further questions, please contact us by email
            at:&#160;Hello@citizenCafeTLV.com.
            <br />
            WhatsApp or Call us: +972 50-751-6400
            <br />
            Toll-Free (only calls): +1 888-808-0334
          </p>
        </>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
