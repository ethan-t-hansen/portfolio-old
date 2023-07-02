'use client';

interface ButtonProps {
  targetId: string;
  buttonText: string;
}

const ScrollButton: React.FC<ButtonProps> = ({ targetId, buttonText }) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick} className="directory-heading">{buttonText}</button>
  );
};

export default ScrollButton;