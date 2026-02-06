import PageLayout from '../components/layout/PageLayout';

export default function NotFoundPage() {
  return (
    <PageLayout title="Page Not Found">
      <div className="not-found">
        <h1>404</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
      </div>
    </PageLayout>
  );
}
