import Logo from "../Assets/Images/Logo.svg";

export default function Header() {
  return (
    <header className="App">
      <img src={Logo} alt="Little Lemon Logo" width={200} height={50} />
    </header>
  );
}
