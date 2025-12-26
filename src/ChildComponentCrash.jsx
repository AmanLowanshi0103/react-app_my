function CrashComponent({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error("Testing Fallback Component");
  }
  return <div>Testing</div>;
}

export default CrashComponent