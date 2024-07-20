import useWindowSize from "../hooks/useWindowSize";

export default function Footer() {
  const windowSize = useWindowSize();

  return (
    <div style={{ display: "flex", flexDirection: windowSize.width > 600 ? "row" : "column", justifyContent: "space-between", width: "100%" }}>
      <div>Lecca.io © {new Date().getFullYear()}</div>
      <div style={{ display: "flex", flexDirection: windowSize.width > 600 ? "row" : "column" }}>
        <div style={{ width: "16px", height: "16px" }}></div>
        <a href={`/privacy`}>Privacy Policy</a>
        <div style={{ width: "16px", height: "16px" }}></div>
        <a href={`/terms-and-conditions`}>Terms & Conditions</a>
      </div>
    </div>
  );
}
