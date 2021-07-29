
/**
 * Component takes in a prop, returns prop's content
 * @param {string} props - contains a string
 * @returns {string} content
 */
function Component( props ) {

    return <div>{props.content}</div>;
}

export default Component;
