import Logo from "../Assets/Images/Logo.svg";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon Logo"  />
      {/* How can I make this logo responsive */}
    </header>
  );
}
// width={200} height={50}