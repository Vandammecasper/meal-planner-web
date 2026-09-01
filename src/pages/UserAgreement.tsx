import { Link } from 'react-router-dom';
import { LegalPage, Section } from '../components/LegalPage';
import { APP_NAME, LAST_UPDATED, SUPPORT_EMAIL } from '../theme';

export function UserAgreement() {
  return (
    <LegalPage
      title="User Agreement"
      subtitle={`These terms govern your use of ${APP_NAME}. By creating an account or using the App, you agree to them.`}
      updated={LAST_UPDATED}
    >
      <Section title="Agreement">
        <p>
          This User Agreement is a contract between you and the operator of {APP_NAME} (“we”,
          “us”). If you do not agree, do not use the App.
        </p>
        <p>
          Your use of the App is also subject to our{' '}
          <Link to="/privacy">Privacy Policy</Link>, which explains how we handle personal
          information.
        </p>
      </Section>

      <Section title="The service">
        <p>
          {APP_NAME} provides tools to save meals (including bulk import from a file you provide),
          plan meals for your household by day or month, share planning with invited family
          members, track grocery needs, scan product barcodes while shopping, keep a fridge
          inventory, and — on supported devices — show plan summaries on the home screen. Features
          may change over time as we improve the App.
        </p>
      </Section>

      <Section title="Accounts">
        <ul>
          <li>You must provide accurate information when you create a profile.</li>
          <li>You are responsible for keeping your sign-in credentials secure.</li>
          <li>
            You must be old enough to use the App under the laws of your country (and at least 13
            where that is the applicable minimum).
          </li>
          <li>
            Guest accounts are temporary convenience accounts. Convert to a full account if you
            want a lasting identity and recovery options.
          </li>
          <li>
            We may suspend or terminate accounts that violate these terms or that put other users
            or the service at risk.
          </li>
        </ul>
      </Section>

      <Section title="Households and shared content">
        <p>
          When you join a household, other members can see shared meals, plans, grocery data,
          fridge inventory, and profile details needed for collaboration. Admins can invite or
          remove members and change certain household settings. Private plan entries are intended
          to be visible only to the person who planned them in the App, but they are stored with
          household data so they can sync across that person’s devices.
        </p>
        <p>
          You are responsible for the content you add (meal names, ingredients, notes, imported
          files, and similar text). Do not post unlawful, abusive, or infringing content, and do
          not attempt to access another household’s data without permission.
        </p>
      </Section>

      <Section title="Device features and third parties">
        <p>
          Barcode scanning uses your device camera, with your permission, to read product codes.
          Looking up a product name may send the barcode to Open Food Facts, an independent public
          database. Camera access is optional; refusing it only turns off scanning.
        </p>
        <p>
          Home-screen widgets, where available, show meal names from your plan on the device. The
          App also uses service providers described in our{' '}
          <Link to="/privacy">Privacy Policy</Link> (including cloud hosting and product
          analytics) to operate the service.
        </p>
      </Section>

      <Section title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>Misuse the App, probe its systems, or disrupt service for others</li>
          <li>Impersonate someone else or misrepresent your affiliation</li>
          <li>Use the App for anything illegal</li>
          <li>Scrape, reverse engineer, or redistribute the App except as allowed by law</li>
        </ul>
      </Section>

      <Section title="Intellectual property">
        <p>
          The App, including its design, branding, and software, is owned by us or our licensors.
          You keep ownership of the meal and planning content you create. You grant us a limited
          license to host and display that content solely to operate the service for you and your
          household.
        </p>
      </Section>

      <Section title="Disclaimers">
        <p>
          The App is provided “as is” and “as available.” Meal plans, grocery lists, fridge
          matching, and barcode lookups are tools to help you organize cooking; they are not
          professional dietary, medical, or allergen advice, and product matches may be incomplete
          or incorrect. You are responsible for checking ingredients and suitability for your
          household.
        </p>
        <p>
          To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness
          for a particular purpose, and non-infringement. We do not guarantee uninterrupted or
          error-free operation.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, we are not liable for indirect, incidental,
          special, consequential, or punitive damages, or for lost data, profits, or goodwill,
          arising from your use of the App. Our total liability for any claim relating to the App
          will not exceed the greater of (a) the amount you paid us for the App in the 12 months
          before the claim, or (b) zero if the App is provided free of charge.
        </p>
        <p>
          Some jurisdictions do not allow certain limitations; in those places, our liability is
          limited to the maximum extent permitted by law.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          You may stop using the App at any time and may delete your account in Account settings.
          We may stop providing the App or suspend access if needed for maintenance, legal, or
          security reasons.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update these terms. When we do, we will revise the “Last updated” date on this
          page. If you continue using the App after changes take effect, you accept the updated
          terms.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this agreement:{' '}
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME} – User Agreement`)}`}
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          Support:{' '}
          <Link to="/support">Support page</Link>
        </p>
      </Section>
    </LegalPage>
  );
}
