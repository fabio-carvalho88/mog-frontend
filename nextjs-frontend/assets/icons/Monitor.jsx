export default function Monitor(props) {
  return (
    <svg
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.5682 3.78906H5.31356C3.84624 3.78906 2.65674 4.92001 2.65674 6.3151V18.9453C2.65674 20.3404 3.84624 21.4714 5.31356 21.4714H26.5682C28.0355 21.4714 29.225 20.3404 29.225 18.9453V6.3151C29.225 4.92001 28.0355 3.78906 26.5682 3.78906Z"
        stroke={props.iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6274 26.5234H21.2547"
        stroke={props.iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9409 21.4713V26.5234"
        stroke={props.iconColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
