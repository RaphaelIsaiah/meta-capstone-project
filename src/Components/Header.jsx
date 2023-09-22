import Logo from "../Assets/Images/Logo.svg";

export default function Header() {
  return (
    <header>
      <div className="H-img-closure">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>
      {/* How can I make this logo responsive */}
    </header>
  );
}
// width={200} height={50}
