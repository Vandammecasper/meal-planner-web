import { Link } from 'react-router-dom';
import { LegalPage, Section } from '../components/LegalPage';
import { APP_NAME, SUPPORT_EMAIL } from '../theme';
import './Support.css';

const bugMailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME} – Bug Report`)}`;
const supportMailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${APP_NAME} – Support`)}`;

export function Support() {
  return (
    <LegalPage
      title="Support"
      subtitle={`Get help with ${APP_NAME}, report a problem, or ask a question.`}
    >
      <Section title="Contact us">
        <p>
          The fastest way to reach us is by email. We read every message and aim to reply as soon
          as we can.
        </p>
        <p>
          <a className="support__email-link" href={supportMailto}>
            {SUPPORT_EMAIL}
          </a>
        </p>
        <div className="support__actions">
          <a className="support__button support__button--primary" href={supportMailto}>
            Email support
          </a>
          <a className="support__button" href={bugMailto}>
            Report a bug
          </a>
        </div>
      </Section>

      <Section title="In the app">
        <p>Inside {APP_NAME}, you can also:</p>
        <ul>
          <li>
            Open <strong>Settings → Feature requests</strong> to suggest improvements
          </li>
          <li>
            Open <strong>Settings → Report a bug</strong> to email us with a pre-filled subject
            line
          </li>
          <li>
            Manage your profile, password, and account deletion under <strong>Account</strong>
          </li>
        </ul>
      </Section>

      <Section title="Common topics">
        <p>
          <strong>Signing in</strong> — Use email and password, Apple Sign-In (on supported
          devices), or continue as a guest. If you forget a password for an email account, contact
          support and we will help you recover access where possible.
        </p>
        <p>
          <strong>Family invites</strong> — Admins invite members by username. Check Settings for
          pending invites, and make sure the other person has finished profile setup so they have a
          username.
        </p>
        <p>
          <strong>Shared meals and plans</strong> — Non-admin members may submit meals or plan
          changes for approval. Admins review pending items before they appear for everyone. You
          can also plan a private meal only you see, or a one-off (such as a restaurant) without
          saving it to the meal library.
        </p>
        <p>
          <strong>Grocery list and scanning</strong> — The shopping list is built from your plan
          for the selected week. Checking an item off adds it to the fridge. On Groceries, you can
          scan a barcode to match a product to the list. Camera permission is required for
          scanning; if a product is not found, you can still check the item off by hand.
        </p>
        <p>
          <strong>Fridge</strong> — Open Groceries and switch to Fridge to add what you already
          have. The Meals and Plan screens can highlight recipes that match leftover ingredients.
          Stock is reduced after planned meals for past days.
        </p>
        <p>
          <strong>Importing meals</strong> — Admins and solo households can import a CSV of meals
          from the Meals tab. Use the in-app template if you are unsure of the columns.
        </p>
        <p>
          <strong>Widgets</strong> — On iOS you can add Today’s Plan or Plan Overview to the home
          screen. If a widget looks stale, open the app so it can refresh.
        </p>
        <p>
          <strong>Deleting your account</strong> — Go to Account in the App and follow the delete
          account steps. For privacy details, see our{' '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </Section>

      <Section title="Before you write">
        <p>Including the following helps us help you faster:</p>
        <ul>
          <li>Your username or the email on the account (if any)</li>
          <li>Device type and OS version (for example, iPhone on iOS 18)</li>
          <li>What you were trying to do, and what happened instead</li>
          <li>Screenshots, if they show the problem clearly</li>
        </ul>
      </Section>

      <Section title="Policies">
        <p>
          <Link to="/privacy">Privacy Policy</Link>
          {' · '}
          <Link to="/user-agreement">User Agreement</Link>
        </p>
      </Section>
    </LegalPage>
  );
}
