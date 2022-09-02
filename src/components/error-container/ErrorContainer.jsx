import "./ErrorContainer.css";

export const ErrorContainer = ({ message }) => {
  return (
    <div className="error-container">
      <p className="title">Woops! Something went wrong!</p>
      <p className="helper">Find the details below:</p>
      <code className="message">{message}</code>
    </div>
  );
};
