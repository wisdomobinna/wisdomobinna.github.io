import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

export default function NotFoundPage() {
  return (
    <PageLayout title="Page not found">
      <div className="not-found">
        <p className="section-label">404</p>
        <h1 className="page-title">This room is empty.</h1>
        <p className="page-lede">
          The page you were looking for isn&rsquo;t here. <Link to="/">Come back to the front house</Link>.
        </p>
      </div>
    </PageLayout>
  );
}
