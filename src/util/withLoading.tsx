export default function withLoading(Component: JSX.Element, loading: boolean) {
  if (loading) {
    return <></>;
  }

  return Component;
}
