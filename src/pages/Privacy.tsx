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
          {APP_NAME} (“the App”) is a meal-planning application for households. It helps you
          build a meal library, plan breakfast, lunch, and dinner, share plans with family
          members, and keep a grocery list in sync.
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
            <strong>Household and planning data</strong> — family membership and roles, meal
            recipes and ingredients you save, weekly meal plans, grocery checklist state, and
            related settings (such as household size and which meal slots you plan).
          </li>
          <li>
            <strong>Feature requests</strong> — feedback you submit through the in-app feature
            request form.
          </li>
          <li>
            <strong>Device and service data</strong> — information needed to operate authentication
            and cloud sync (for example, account identifiers issued by our authentication
            provider). We do not sell your personal information.
          </li>
        </ul>
      </Section>

      <Section title="How we use your information">
        <p>We use the information above to:</p>
        <ul>
          <li>Create and secure your account</li>
          <li>Sync meals, plans, and groceries across your devices and household</li>
          <li>Let family admins manage invites, roles, and shared planning settings</li>
          <li>Respond to support requests and improve the App</li>
          <li>Comply with applicable law and enforce our{' '}
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
          Some preferences and session state may also be stored locally on your device so the App
          can work reliably between launches.
        </p>
      </Section>

      <Section title="Sharing">
        <p>
          Household members you invite (or who invite you) can see shared family content such as
          meals, plans, grocery items, and member profiles within that household.
        </p>
        <p>
          We do not sell your personal information. We may share data with service providers that
          help us run the App (such as Firebase), when required by law, or to protect the rights
          and safety of users.
        </p>
      </Section>

      <Section title="Your choices">
        <ul>
          <li>
            You can update your display name and username in Account settings.
          </li>
          <li>
            You can leave a household, remove members (if you are an admin), or delete meal and
            plan content you control according to your role in the App.
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
