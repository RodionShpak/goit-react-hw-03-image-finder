export const Button = ({ type, label, onLoadMore, className }) => {
  return (
    <button type={type} onClick={onLoadMore} className={className}>
      <span className="button-label">{label}</span>
    </button>
  );
};
