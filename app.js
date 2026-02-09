// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn bg-[var(--primary-blue)] text-white px-6 py-2 rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [categoryFilter, setCategoryFilter] = React.useState("All");
  const [audienceFilter, setAudienceFilter] = React.useState("All");

  try {
    return (
      <div className="min-h-screen bg-white" data-name="app" data-file="app.js">
        <Header />
        <main className="pt-28">
          <Hero
            categoryFilter={categoryFilter}
            audienceFilter={audienceFilter}
          />

          <ResourceGrid
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            audienceFilter={audienceFilter}
            setAudienceFilter={setAudienceFilter}
          />
          <Newsletter />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);