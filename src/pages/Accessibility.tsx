
import { Layout } from "@/components/layout/Layout";

const Accessibility = () => {
  return (
    <Layout>
      <div className="container py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Accessibility Statement</h1>
        
        <div className="prose max-w-none">
          <p className="lead text-muted-foreground">
            Last Updated: April 11, 2025
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p>
            LocalLink is committed to ensuring digital accessibility for people of all abilities. 
            We are continually improving the user experience for everyone, and applying the relevant 
            accessibility standards to achieve this.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Measures Taken</h2>
          <p>
            We take the following measures to ensure accessibility:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Web Content Accessibility Guidelines (WCAG):</strong> We adhere to the WCAG 2.1 AA standards as our 
              primary accessibility guideline, ensuring our platform is perceivable, operable, understandable, and robust.
            </li>
            <li>
              <strong>Regular Audits:</strong> We conduct regular accessibility audits using both automated tools and manual testing 
              with assistive technologies.
            </li>
            <li>
              <strong>User Testing:</strong> We include people with disabilities in our user testing processes to 
              identify and address accessibility barriers.
            </li>
            <li>
              <strong>Ongoing Development:</strong> Our development team receives regular training on accessibility 
              best practices and implements them in all new features.
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Accessibility Features</h2>
          <p>
            Our platform includes the following accessibility features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Screen Reader Compatibility:</strong> All content and functionality are accessible via screen readers.
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> All interactive elements are accessible using keyboard-only navigation.
            </li>
            <li>
              <strong>Text Alternatives:</strong> We provide text alternatives for non-text content.
            </li>
            <li>
              <strong>Color Contrast:</strong> We maintain sufficient color contrast ratios for text and interactive elements.
            </li>
            <li>
              <strong>Resizable Text:</strong> Users can adjust text size without loss of content or functionality.
            </li>
            <li>
              <strong>Focus Indicators:</strong> Visible focus indicators are provided for keyboard navigation.
            </li>
            <li>
              <strong>Alternative Communication Channels:</strong> For users who cannot use standard digital interfaces, we provide
              alternative methods of accessing services and information.
            </li>
            <li>
              <strong>Plain Language:</strong> We use clear, simple language and avoid complex terminology where possible.
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Bridging the Digital Divide</h2>
          <p>
            We recognize that not all citizens have equal access to digital technology. To address this, we provide:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Low-bandwidth Options:</strong> Users with slow internet connections can access a simplified 
              version of our platform.
            </li>
            <li>
              <strong>Offline Materials:</strong> Important information is available in printable formats that can be 
              distributed in community centers.
            </li>
            <li>
              <strong>SMS Notifications:</strong> Critical alerts can be received via text message for those without 
              consistent internet access.
            </li>
            <li>
              <strong>Community Access Points:</strong> We partner with libraries, community centers, and local 
              government offices to provide access points for those without personal devices.
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Assistive Technology Compatibility</h2>
          <p>
            Our platform has been tested with the following assistive technologies:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
            <li>Screen magnification software</li>
            <li>Speech recognition software</li>
            <li>Various alternative input devices</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Known Limitations</h2>
          <p>
            While we strive for full accessibility, we acknowledge the following current limitations:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Some older content may not fully meet our accessibility standards.</li>
            <li>Some third-party content or tools integrated into our platform may have accessibility limitations.</li>
            <li>We are actively working to address these issues.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Feedback and Assistance</h2>
          <p>
            We welcome feedback on the accessibility of LocalLink. Please let us know if you encounter accessibility barriers:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email: accessibility@locallink.gov.in</li>
            <li>Phone: +91 11 2303 4567</li>
            <li>Feedback form: Available on our Contact page</li>
          </ul>
          <p className="mt-4">
            We try to respond to feedback within 2 business days. If you need assistance using our platform due to an
            accessibility barrier, please contact us and we will work with you to provide the information or service 
            you need through an alternative method.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Continuous Improvement</h2>
          <p>
            We are committed to continuous improvement of our accessibility practices. Our accessibility roadmap includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Regular testing with users who have disabilities</li>
            <li>Ongoing staff training on digital accessibility</li>
            <li>Periodic audits of our platform against the latest accessibility standards</li>
            <li>Implementation of new technologies as they become available to improve accessibility</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Formal Compliance Status</h2>
          <p>
            This platform has been designed to conform to WCAG 2.1 Level AA standards. An independent accessibility audit
            was last conducted on March 1, 2025, by AccessibilityCert India.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Accessibility;
