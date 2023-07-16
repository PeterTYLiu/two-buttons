export default function TwoButtons({ children, ...props }) {
    return (<>
      <button {...props}>{children}</button>
      <button {...props}>{children}</button>
    </>);
}
