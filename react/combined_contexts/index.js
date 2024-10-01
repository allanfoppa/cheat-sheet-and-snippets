// ... all needed imports and code then

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="loading">
    <CombinedProvider>
      <AppRoutes />
    </CombinedProvider>
  </Suspense>
);
