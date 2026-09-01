import { Link } from 'react-router-dom';
import { LegalPage, Section } from '../components/LegalPage';
import { APP_NAME, LAST_UPDATED, SUPPORT_EMAIL } from '../theme';

export function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle={`This policy explains what information ${APP_NAME} collects, how it is used, and the choices you have.`}
      updated={LAST_UPDATED}
    >
      <Section title="Who we are">
        <p>
          {APP_NAME} is a meal-planning application for households. It helps you build a meal
          library, plan breakfast, lunch, and dinner, share plans with family members, keep a
          grocery list in sync, track what is in the fridge, and scan products while you shop.
        </p>
        <p>
          If you have questions about this policy, contact us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </Section>

      <Section title="Information we collect">
        <p>Depending on how you use the App, we may collect:</p>
        <ul>
          <li>
            <strong>Account information</strong> — email address and authentication details when
            you sign in with email and password, Apple Sign-In, or (when available) Google. Guest
            accounts are anonymous and are not tied to an email address.
          </li>
          <li>
            <strong>Profile details</strong> — display name and username you choose so other
            household members can find and invite you.
          </li>
          <li>
            <strong>Household and planning data</strong> — family membership and roles, meals you
            save (including ingredients, recipes, cook time, servings, categories, food types, and
            optional source notes or links), weekly meal plans (including private meals visible
            only to you in the App, and one-off titles such as takeout), grocery checklist state,
            extra grocery items you add, fridge inventory (item names, quantities, and how they
            were added), and related settings (such as household size and which meal slots you
            plan).
          </li>
          <li>
            <strong>Feature requests</strong> — feedback you submit through the in-app feature
            request form, including likes on requests.
          </li>
          <li>
            <strong>Camera and barcodes</strong> — if you use barcode scanning, the App uses the
            camera on your device to read a product barcode. We do not store or upload photos from
            the camera. The barcode number is used only to look up a product name and match it to
            your grocery list.
          </li>
          <li>
            <strong>Usage analytics</strong> — product events that describe how the App is used
            (for example, which screens you open and which features you use), together with
            technical details such as platform and whether the account is a guest. Analytics may
            be associated with your account identifier. We do not record session replay (screen
            recordings) of your use of the App.
          </li>
          <li>
            <strong>Device and service data</strong> — information needed to operate authentication
            and cloud sync (for example, account identifiers issued by our authentication
            provider). Some preferences, session state, and home-screen widget data (such as meal
            names for today and the current month) may also be stored locally on your device. We
            do not sell your personal information.
          </li>
        </ul>
      </Section>

      <Section title="How we use your information">
        <p>We use the information above to:</p>
        <ul>
          <li>Create and secure your account</li>
          <li>
            Sync meals, plans, groceries, and fridge contents across your devices and household
          </li>
          <li>Match scanned products to your grocery list and suggest meals from leftover food</li>
          <li>Let family admins manage invites, roles, and shared planning settings</li>
          <li>Understand how the App is used so we can fix problems and improve it</li>
          <li>Respond to support requests</li>
          <li>
            Comply with applicable law and enforce our{' '}
            <Link to="/user-agreement">User Agreement</Link>
          </li>
        </ul>
      </Section>

      <Section title="Where your data is stored">
        <p>
          Account authentication and app data are stored using Google Firebase (Firebase
          Authentication and Firebase Realtime Database). Data may be processed on servers
          operated by Google in accordance with their security and privacy practices.
        </p>
        <p>
          Product analytics are processed by PostHog. We use PostHog’s European Union hosting
          where configured. PostHog processes usage events and related account identifiers on our
          behalf so we can operate and improve the App.
        </p>
        <p>
          When you scan a barcode, the barcode number is sent to Open Food Facts, a public product
          database, to retrieve a product name. Open Food Facts is an independent service; their
          own privacy terms apply to that lookup. We do not send your name, email, or household
          data to Open Food Facts.
        </p>
        <p>
          Some preferences, session state, and widget content may also be stored locally on your
          device (including in an on-device app group on iOS) so the App and widgets can work
          reliably between launches.
        </p>
      </Section>

      <Section title="Sharing">
        <p>
          Household members you invite (or who invite you) can see shared family content such as
          meals, plans, grocery items, fridge contents, and member profiles within that household.
          Private plan entries are stored with household data so they can sync, but the App only
          shows them to the person who planned them.
        </p>
        <p>
          We do not sell your personal information. We may share data with service providers that
          help us run the App (such as Firebase, PostHog, and Open Food Facts for barcode
          lookups), when required by law, or to protect the rights and safety of users.
        </p>
      </Section>

      <Section title="Your choices">
        <ul>
          <li>You can update your display name and username in Account settings.</li>
          <li>
            You can leave a household, remove members (if you are an admin), or delete meal and
            plan content you control according to your role in the App.
          </li>
          <li>
            You can decline camera permission. Barcode scanning will not work without it; the rest
            of the App remains available.
          </li>
          <li>
            You can delete your account from Account settings in the App. Deleting your account
            removes your authentication record and associated profile data we control. Shared
            household content created by others may remain for remaining members.
          </li>
          <li>
            You can email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> for privacy
            questions or deletion help if you cannot use the in-app flow.
          </li>
        </ul>
      </Section>

      <Section title="Children">
        <p>
          The App is not directed to children under 13 (or the minimum age required in your
          country). We do not knowingly collect personal information from children. If you believe
          a child has provided us with personal information, contact us and we will take
          appropriate steps to delete it.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update this Privacy Policy from time to time. The “Last updated” date at the top
          of this page will change when we do. Continued use of the App after an update means you
          accept the revised policy.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Privacy requests:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME} – Privacy`)}`}>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p>
          Need help with the App? Visit our <Link to="/support">Support</Link> page.
        </p>
      </Section>
    </LegalPage>
  );
}
