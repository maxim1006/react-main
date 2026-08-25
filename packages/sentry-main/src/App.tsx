import { Sentry } from "./sentry";

function App() {
  const captureMessage = () => {
    const eventId = Sentry.captureMessage("Manual test message from sentry-main");
    console.log("Sentry message event id:", eventId);
  };

  const captureError = () => {
    try {
      throw new Error("Manual test error from sentry-main");
    } catch (error) {
      const eventId = Sentry.captureException(error);
      console.log("Sentry error event id:", eventId);
    }
  };

  return (
    <main style={{ fontFamily: "sans-serif", margin: "40px auto", maxWidth: "720px", lineHeight: 1.5 }}>
      <h1>sentry-main</h1>
      <p>Minimal React + TypeScript app to validate Sentry events.</p>
      <p>
        Set <code>VITE_SENTRY_DSN</code> in environment and restart the container to send data to Sentry.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button type="button" onClick={captureMessage}>
          Capture message
        </button>
        <button type="button" onClick={captureError}>
          Capture handled error
        </button>
      </div>
    </main>
  );
}

export default App;
