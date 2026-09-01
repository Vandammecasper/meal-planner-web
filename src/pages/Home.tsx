import { Link } from 'react-router-dom';
import { APP_NAME } from '../theme';
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
