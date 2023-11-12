import './styles.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <iframe
        src="https://giphy.com/embed/OgUorGH0Z75b3unoPA"
        width="480"
        height="480"
        frameBorder="0"
        className="giphy-embed"
        title="loading"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/capybara-capy-spinning-OgUorGH0Z75b3unoPA">
          via GIPHY
        </a>
      </p>
    </div>
  );
};

export default Loading;