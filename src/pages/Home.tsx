import { Link } from 'react-router-dom';
import { APP_NAME } from '../theme';
import './Home.css';

const cards = [
  {
    to: '/privacy',
    title: 'Privacy Policy',
    body: 'How we collect, use, and protect your account and meal data.',
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

export function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <p className="home__eyebrow">Legal & support</p>
        <h1 className="home__title">{APP_NAME}</h1>
        <p className="home__lede">
          Plan your week, share meals with your household, and keep groceries in sync —
          these pages cover privacy, support, and the rules of use for the app.
        </p>
      </section>

      <section className="home__cards" aria-label="Site pages">
        {cards.map((card) => (
          <Link key={card.to} to={card.to} className="home__card">
            <h2 className="home__card-title">{card.title}</h2>
            <p className="home__card-body">{card.body}</p>
            <span className="home__card-cta">Read more</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
