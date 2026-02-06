// Custom router compatibility layer
export { Link } from '@/app/components/RouterLink';

// Create a mock useLocation hook
export function useLocation() {
  return {
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
    state: null,
    key: 'default'
  };
}
