import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';

const Markdown = ({ children }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    transformImageUri={uri => (uri.startsWith('http') ? uri : `${process.env.NEXT_PUBLIC_API_URL}${uri}`)}
  >
    {children}
  </ReactMarkdown>
);

Markdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Markdown.defaultProps = {
  children: null,
};

export default Markdown;
