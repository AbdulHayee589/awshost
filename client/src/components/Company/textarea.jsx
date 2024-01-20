const TextArea = ({ tagline, setTagline }) => {
  return (
    <textarea
      value={tagline}
      onChange={(e) => setTagline(e.target.value)}
      className="forminput col-md-12 col-12 mt-2"
      rows="3" // Set the number of visible rows as needed
      maxLength={120}
    />
  );
};
export default TextArea;
