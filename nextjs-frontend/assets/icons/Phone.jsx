export default function Phone(props) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.2675 2C4.325 2.89 4.46875 3.76 4.69875 4.59L3.54875 5.79C3.15583 4.59 2.90667 3.32 2.82042 2H4.2675ZM13.7167 14.02C14.5312 14.26 15.365 14.41 16.2083 14.47V15.96C14.9433 15.87 13.7262 15.61 12.5667 15.21L13.7167 14.02ZM5.1875 0H1.83333C1.30625 0 0.875 0.45 0.875 1C0.875 10.39 8.16792 18 17.1667 18C17.6938 18 18.125 17.55 18.125 17V13.51C18.125 12.96 17.6938 12.51 17.1667 12.51C15.9783 12.51 14.8188 12.31 13.7454 11.94C13.6496 11.9 13.5442 11.89 13.4483 11.89C13.1992 11.89 12.9596 11.99 12.7679 12.18L10.6596 14.38C7.9475 12.93 5.72417 10.62 4.34417 7.79L6.4525 5.59C6.72083 5.31 6.7975 4.92 6.69208 4.57C6.3375 3.45 6.14583 2.25 6.14583 1C6.14583 0.45 5.71458 0 5.1875 0Z"
        fill={props.iconColor}
      />
    </svg>
  );
}
