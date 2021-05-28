export default function Mail(props) {
  return (
    <svg
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9166 2C20.9166 0.9 19.9791 0 18.8333 0H2.16659C1.02075 0 0.083252 0.9 0.083252 2V14C0.083252 15.1 1.02075 16 2.16659 16H18.8333C19.9791 16 20.9166 15.1 20.9166 14V2ZM18.8333 2L10.4999 7L2.16659 2H18.8333ZM18.8333 14H2.16659V4L10.4999 9L18.8333 4V14Z"
        fill={props.iconColor}
      />
    </svg>
  );
}
