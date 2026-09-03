import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, SUPPORT_EMAIL, TESTFLIGHT_URL } from '../theme';
import './Home.css';

type FeatureIcon = 'plan' | 'meals' | 'import' | 'groceries' | 'scan' | 'fridge' | 'family' | 'widgets';

const features: { icon: FeatureIcon; title: string; body: string }[] = [
  {
    icon: 'plan',
    title: 'Plan by day or month',
    body: 'Map breakfast, lunch, and dinner, swipe between weeks, and move meals when plans change. Set servings per day, or hide meal slots you do not use.',
  },
  {
    icon: 'meals',
    title: 'Build a meal library',
    body: 'Save recipes with ingredients, instructions, cook time, servings, categories, and food types. Search and filter, including meals you can make from what is already in the fridge.',
  },
  {
    icon: 'import',
    title: 'Import meals in bulk',
    body: 'Admins and solo households can import many recipes at once from a CSV file, including a downloadable template.',
  },
  {
    icon: 'groceries',
    title: 'A list from your plan',
    body: 'Ingredients from planned meals are combined and scaled to how many people you cook for. Group them together or by meal, add extras, and check items off as you shop.',
  },
  {
    icon: 'scan',
    title: 'Scan while you shop',
    body: 'Use the camera to scan product barcodes. The app looks up the product and matches it to your grocery list so you can check it off on the spot.',
  },
  {
    icon: 'fridge',
    title: 'Track the fridge',
    body: 'Keep a shared fridge inventory. Checking off groceries adds them there. The app suggests meals you can cook from leftovers, and uses stock as planned meals pass.',
  },
  {
    icon: 'family',
    title: 'Cook as a household',
    body: 'Invite people by username to share one plan. Admins can review new meals and plan changes. Plan a private meal only you see, or a one-off like takeout without saving it to the library.',
  },
  {
    icon: 'widgets',
    title: 'Home screen widgets',
    body: 'On iOS, add Today’s Plan or Plan Overview to see the day’s meals and a month calendar without opening the app.',
  },
];

const weekSteps = [
  {
    step: '1',
    title: 'Plan the week',
    body: 'Put breakfast, lunch, and dinner on the calendar. Share one household plan, keep a meal private, or add a one-off like takeout.',
  },
  {
    step: '2',
    title: 'Shop the list',
    body: 'Ingredients from the plan become a grocery list, scaled to how many you cook for. Scan products in the aisle to check them off.',
  },
  {
    step: '3',
    title: 'Cook from the fridge',
    body: 'Checked-off groceries move into a shared fridge. The app suggests meals you can make from leftovers, and uses stock as planned meals pass.',
  },
] as const;

const legalCards = [
  {
    to: '/privacy',
    title: 'Privacy Policy',
    body: 'How we collect, use, and protect your account, household, and meal data.',
  },
  {
    to: '/support',
    title: 'Support',
    body: 'Get help, report a bug, or reach the Plan my meal team.',
  },
  {
    to: '/user-agreement',
    title: 'User Agreement',
    body: 'The terms that apply when you use the Plan my meal app.',
  },
] as const;

function FeatureGlyph({ icon }: { icon: FeatureIcon }) {
  switch (icon) {
    case 'plan':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="15" rx="3" />
          <path d="M8 3.5v3M16 3.5v3M3.5 9.5h17" />
        </svg>
      );
    case 'meals':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 4v16M5.5 4v6.5a2.5 2.5 0 0 0 5 0V4M16 4v16M16 4c2.2 2 2.2 6 0 8" />
        </svg>
      );
    case 'import':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 3.5H8A2.5 2.5 0 0 0 5.5 6v12A2.5 2.5 0 0 0 8 20.5h8A2.5 2.5 0 0 0 18.5 18V8.5L14 3.5Z" />
          <path d="M14 3.5V8.5h4.5M12 11.5v6M9.5 15 12 17.5 14.5 15" />
        </svg>
      );
    case 'groceries':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 7h15l-1.4 8.2A2.5 2.5 0 0 1 16.15 17.5H9.4A2.5 2.5 0 0 1 6.95 15.2L5 7Z" />
          <path d="M8 7 9.2 4.5h3.1M8.5 20.5h.01M16 20.5h.01" />
        </svg>
      );
    case 'scan':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.5 8.5V6A1.5 1.5 0 0 1 6 4.5h2.5M15.5 4.5H18A1.5 1.5 0 0 1 19.5 6v2.5M4.5 15.5V18A1.5 1.5 0 0 0 6 19.5h2.5M15.5 19.5H18A1.5 1.5 0 0 0 19.5 18v-2.5M8 12h8" />
        </svg>
      );
    case 'fridge':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="6.5" y="3.5" width="11" height="17" rx="2" />
          <path d="M6.5 11h11M9 6.5v2M9 13.5v3" />
        </svg>
      );
    case 'family':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="8" r="2.4" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4.5 18.5c.6-3 2.6-4.7 4.5-4.7s3.9 1.7 4.5 4.7M13.2 13.9c1.7-.2 3.6 1.2 4.3 4.1" />
        </svg>
      );
    case 'widgets':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="7.5" height="7.5" rx="1.6" />
          <rect x="13" y="3.5" width="7.5" height="7.5" rx="1.6" />
          <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.6" />
          <rect x="13" y="13" width="7.5" height="7.5" rx="1.6" />
        </svg>
      );
  }
}

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function AndroidGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.6 9.48 19.44 6.3a.62.62 0 0 0-.26-.85.63.63 0 0 0-.83.22l-1.88 3.24a8.86 8.86 0 0 0-8.94 0L5.65 5.67a.63.63 0 0 0-.87-.2.62.62 0 0 0-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52ZM7 15.25A1.25 1.25 0 1 1 7 12.75 1.25 1.25 0 0 1 7 15.25Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
    </svg>
  );
}

function androidRequestMailto(playStoreEmail: string) {
  const subject = `${APP_NAME} – Android closed testing request`;
  const body = [
    'Hello,',
    '',
    'I would like to join the Plan my meal Android closed test.',
    '',
    `My Play Store email: ${playStoreEmail}`,
    '',
    'Thank you in advance for your help!',
    'Best regards,',
  ].join('\n');

  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function GetTheApp() {
  const [androidOpen, setAndroidOpen] = useState(false);
  const [playStoreEmail, setPlayStoreEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleAndroidSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = playStoreEmail.trim();
    if (!email) return;

    window.location.href = androidRequestMailto(email);
    setSubmitted(true);
  }

  function toggleAndroid() {
    setAndroidOpen((open) => {
      if (open) setSubmitted(false);
      return !open;
    });
  }

  return (
    <div className="home__get-app" id="get-the-app">
      <p className="home__get-app-note">
        The app is in testing, so these are beta invites rather than App Store or Play Store
        listings.
      </p>
      <div className="home__store">
        <a
          className="home__store-btn home__store-btn--apple"
          href={TESTFLIGHT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="home__store-btn-icon">
            <AppleGlyph />
          </span>
          <span className="home__store-btn-copy">
            <span className="home__store-btn-kicker">iPhone &amp; iPad</span>
            <span className="home__store-btn-name">Join via TestFlight</span>
          </span>
        </a>
        <button
          type="button"
          className={`home__store-btn home__store-btn--android${androidOpen ? ' home__store-btn--android-open' : ''}`}
          aria-expanded={androidOpen}
          aria-controls="android-access-form"
          onClick={toggleAndroid}
        >
          <span className="home__store-btn-icon">
            <AndroidGlyph />
          </span>
          <span className="home__store-btn-copy">
            <span className="home__store-btn-kicker">Android</span>
            <span className="home__store-btn-name">Request Play access</span>
          </span>
        </button>
      </div>

      {androidOpen ? (
        <form id="android-access-form" className="home__android" onSubmit={handleAndroidSubmit}>
          {submitted ? (
            <div className="home__android-done">
              <p className="home__android-status" role="status">
                Your email app should open with a message to {SUPPORT_EMAIL}. Send it, and we will
                add <strong>{playStoreEmail.trim()}</strong> to the closed test and reply with the
                install link. If nothing opened, email that Play Store address to{' '}
                <a href={androidRequestMailto(playStoreEmail.trim())}>{SUPPORT_EMAIL}</a>.
              </p>
              <button
                className="home__android-again"
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              <h2 className="home__android-title">Join the Android closed test</h2>
              <p className="home__android-lede">
                Google Play testing is invite-only for now. Enter the Google account you are
                signed into on the Play Store on your phone. We will add it to the test group and
                email you the install link.
              </p>
              <label className="home__android-label" htmlFor="play-store-email">
                Play Store email
              </label>
              <input
                id="play-store-email"
                className="home__android-input"
                type="email"
                name="playStoreEmail"
                autoComplete="email"
                inputMode="email"
                required
                autoFocus
                placeholder="you@gmail.com"
                value={playStoreEmail}
                onChange={(event) => setPlayStoreEmail(event.target.value)}
              />
              <p className="home__android-hint">
                This is the account in the Play Store app (often under Settings → Account), which
                may differ from the email you use in {APP_NAME}.
              </p>
              <button className="home__android-submit" type="submit">
                Email my request
              </button>
            </>
          )}
        </form>
      ) : null}
    </div>
  );
}

export function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Household meal planning</p>
        <h1 className="home__title">{APP_NAME}</h1>
        <p className="home__lede">
          Plan the week, keep a shared meal library, shop from a list that matches your plan, and
          use what is already in the fridge — together with the people you cook for.
        </p>
        <GetTheApp />
      </section>

      <section className="home__week" aria-labelledby="week-heading">
        <div className="home__section-head">
          <h2 id="week-heading" className="home__section-title">
            How a week works
          </h2>
          <p className="home__section-lede">
            Planning, shopping, and cooking stay on one loop, so the list matches the plan and the
            fridge stays in the picture.
          </p>
        </div>
        <ol className="home__steps">
          {weekSteps.map((item) => (
            <li key={item.step} className="home__step">
              <span className="home__step-num" aria-hidden="true">
                {item.step}
              </span>
              <h3 className="home__step-title">{item.title}</h3>
              <p className="home__step-body">{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="home__features" aria-labelledby="features-heading">
        <div className="home__section-head">
          <h2 id="features-heading" className="home__section-title">
            What’s in the app
          </h2>
          <p className="home__section-lede">
            The current {APP_NAME} app includes planning, groceries, a fridge, barcode scanning,
            household sharing, and iOS widgets.
          </p>
        </div>
        <ul className="home__feature-grid">
          {features.map((feature) => (
            <li key={feature.title} className="home__feature">
              <span className="home__feature-icon">
                <FeatureGlyph icon={feature.icon} />
              </span>
              <h3 className="home__feature-title">{feature.title}</h3>
              <p className="home__feature-body">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="home__cta" aria-labelledby="cta-heading">
        <h2 id="cta-heading" className="home__cta-title">
          Try the beta
        </h2>
        <p className="home__cta-body">
          {APP_NAME} is in testing on iPhone, iPad, and Android. Join through TestFlight, or request
          Play Store access with the Google account on your phone.
        </p>
        <a className="home__cta-button" href="#get-the-app">
          Get the app
        </a>
      </section>

      <section className="home__legal" aria-labelledby="legal-heading">
        <div className="home__section-head">
          <h2 id="legal-heading" className="home__section-title">
            Legal & support
          </h2>
          <p className="home__section-lede">
            Privacy, help, and the rules of use for {APP_NAME}.
          </p>
        </div>
        <div className="home__cards">
          {legalCards.map((card) => (
            <Link key={card.to} to={card.to} className="home__card">
              <h3 className="home__card-title">{card.title}</h3>
              <p className="home__card-body">{card.body}</p>
              <span className="home__card-cta">Read more</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
