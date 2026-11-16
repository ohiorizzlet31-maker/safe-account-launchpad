import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Launcher" },
      { name: "description", content: "Please use an ALT account. Never sign in with your main account." },
      { property: "og:title", content: "Launcher" },
      { property: "og:description", content: "Please use an ALT account. Never sign in with your main account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex max-w-md flex-col items-center gap-8 text-center">
        <p className="text-xl font-medium leading-relaxed text-foreground">
          Please use an ALT account. Never sign in with your main account.
        </p>
        {/* Plain anchor: the launcher is a static file, not an app page, so it needs a full page load. */}
        <a
          href="/i8ugbeqri/launcher/index.html"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Launch
        </a>
      </div>
    </main>
  );
}
