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

    return <h2 className="font-bold text-4xl text-blue" {...rest} />;
  },
  h3(props) {
    const { node, ...rest } = props;

    return <h3 className="font-bold text-3xl text-yellow" {...rest} />;
  },
  h4(props) {
    const { node, ...rest } = props;

    return <h4 className="font-bold text-2xl text-black" {...rest} />;
  },
  h5(props) {
    const { node, ...rest } = props;

    return <h5 className="font-bold text-xl text-black" {...rest} />;
  },
  h6(props) {
    const { node, ...rest } = props;

    return <h6 className="font-bold text-lg text-black" {...rest} />;
  },
  hr(props) {
    const { node, ...rest } = props;

    return <hr className="text-dark" {...rest} />;
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

    return <p className="font-normal text-base text-black" {...rest} />;
  },
};
