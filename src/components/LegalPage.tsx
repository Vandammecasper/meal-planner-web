import type { ReactNode } from 'react';
import './LegalPage.css';

type LegalPageProps = {
  title: string;
  subtitle: string;
  updated?: string;
  children: ReactNode;
};

export function LegalPage({ title, subtitle, updated, children }: LegalPageProps) {
  return (
    <article className="legal">
      <header className="legal__header">
        <p className="legal__eyebrow">Plan my meal</p>
        <h1 className="legal__title">{title}</h1>
        <p className="legal__subtitle">{subtitle}</p>
        {updated ? <p className="legal__updated">Last updated: {updated}</p> : null}
      </header>
      <div className="legal__body">{children}</div>
    </article>
  );
}

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section className="legal__section">
      <h2 className="legal__section-title">{title}</h2>
      <div className="legal__section-body">{children}</div>
    </section>
  );
}
