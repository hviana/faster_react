const Loading = (props: any) => {
  const { loading } = props;
  if (loading) {
    return (
      <div role="status" className="flex space-x-2" aria-live="polite">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200">
        </div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400">
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
};

export default Loading;
