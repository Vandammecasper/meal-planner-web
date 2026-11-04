import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APP_NAME, TESTFLIGHT_URL } from '../theme';
import './SharedMeal.css';

const APP_SCHEME = 'planmymeal';
const ANDROID_PACKAGE = 'com.caspervandamme.planmymeal';
const SHARE_ID_PATTERN = /^[A-Za-z0-9_-]{6,128}$/;

function isAndroid(): boolean {
  return /Android/i.test(navigator.userAgent);
}

function buildAppUrl(shareId: string): string {
  return `${APP_SCHEME}://shared-meal/${shareId}`;
}

function buildAndroidIntentUrl(shareId: string, fallbackUrl: string): string {
  const path = `shared-meal/${shareId}`;
  return (
    `intent://${path}#Intent;` +
    `scheme=${APP_SCHEME};` +
    `package=${ANDROID_PACKAGE};` +
    `S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};` +
    'end'
  );
}

export function SharedMeal() {
  const { shareId: rawShareId } = useParams<{ shareId: string }>();
  const shareId = (rawShareId ?? '').trim();
  const valid = SHARE_ID_PATTERN.test(shareId);
  const [attempted, setAttempted] = useState(false);

  const appUrl = useMemo(() => (valid ? buildAppUrl(shareId) : ''), [shareId, valid]);
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    if (!valid || !appUrl) return;

    const target = isAndroid() ? buildAndroidIntentUrl(shareId, pageUrl || appUrl) : appUrl;
    const timer = window.setTimeout(() => {
      window.location.href = target;
      setAttempted(true);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [appUrl, pageUrl, shareId, valid]);

  const openApp = () => {
    if (!appUrl) return;
    const target = isAndroid() ? buildAndroidIntentUrl(shareId, pageUrl || appUrl) : appUrl;
    window.location.href = target;
    setAttempted(true);
  };

  if (!valid) {
    return (
      <section className="shared-meal">
        <p className="shared-meal__eyebrow">Shared meal</p>
        <h1 className="shared-meal__title">Link looks incomplete</h1>
        <p className="shared-meal__body">
          This share link is missing or damaged. Ask the sender for a new one, or open {APP_NAME}{' '}
          from your device.
        </p>
        <Link className="shared-meal__secondary" to="/">
          Back to website
        </Link>
      </section>
    );
  }

  return (
    <section className="shared-meal">
      <p className="shared-meal__eyebrow">Shared meal</p>
      <h1 className="shared-meal__title">Opening {APP_NAME}…</h1>
      <p className="shared-meal__body">
        {attempted
          ? `If the app did not open, tap the button below. You need ${APP_NAME} installed to add this meal to your library.`
          : `We are trying to open this meal in ${APP_NAME}. If nothing happens, use the button below.`}
      </p>
      <div className="shared-meal__actions">
        <button type="button" className="shared-meal__primary" onClick={openApp}>
          Open in {APP_NAME}
        </button>
        <a className="shared-meal__secondary" href={TESTFLIGHT_URL}>
          Get the iOS beta
        </a>
        <Link className="shared-meal__secondary" to="/#get-app">
          App info on this site
        </Link>
      </div>
    </section>
  );
}
