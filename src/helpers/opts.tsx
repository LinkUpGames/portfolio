import { Components } from "node_modules/react-markdown/lib";

/**
 * The markdown components and how they should be rendered in html
 */
export const markdownComponents: Partial<Components> = {
  h1(props) {
    const { node, ...rest } = props;

    return <h1 className="font-bold text-5xl text-red" {...rest} />;
  },
  h2(props) {
    const { node, ...rest } = props;

    return <h2 className="font-bold text-4xl text-dark" {...rest} />;
  },
  h3(props) {
    const { node, ...rest } = props;

    return <h3 className="font-bold text-3xl text-green" {...rest} />;
  },
  h4(props) {
    const { node, ...rest } = props;

    return <h4 className="font-bold text-2xl text-blue" {...rest} />;
  },
  h5(props) {
    const { node, ...rest } = props;

    return <h5 className="font-bold text-xl text-gold" {...rest} />;
  },
  h6(props) {
    const { node, ...rest } = props;

    return <h6 className="font-bold text-lg text-black" {...rest} />;
  },
  hr(props) {
    const { node, ...rest } = props;

    return <hr className="text-dark border-[1px]" {...rest} />;
  },
  code(props) {
    const { node, ...rest } = props;

    return <code className="text-gray" {...rest} />;
  },
  pre(props) {
    const { node, ...rest } = props;

    return (
      <pre
        className="bg-dark rounded-md text-white p-2 font-vt font-bold my-2"
        {...rest}
      />
    );
  },
  p(props) {
    const { node, ...rest } = props;

    return (
      <p className="font-normal text-base md:text-lg text-black" {...rest} />
    );
  },
  a(props) {
    const { node, ...rest } = props;

    return <a className="underline text-links" target="_blank" {...rest} />;
  },
  blockquote(props) {
    const { node, ...rest } = props;

    return <blockquote className="border-l-4 border-l-red pl-2" {...rest} />;
  },
  ul(props) {
    const { node, ...rest } = props;

    return <ul className="list-disc ml-2" {...rest} />;
  },
  ol(props) {
    const { node, ...rest } = props;

    return <ol className="list-decimal ml-3" {...rest} />;
  },
};
