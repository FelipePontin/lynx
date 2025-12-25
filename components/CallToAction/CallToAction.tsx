import Button from "../Button/Button";

import "./CallToAction.css";

export interface CallToActionProps {
  title?: string;
  subtitle?: string;
  background?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CallToAction = ({
  title,
  subtitle,
  background = "",
  buttonText,
  buttonLink,
}: CallToActionProps) => {
  return (
    <section
      className="callToAction"
      style={{
        backgroundImage: background ? `url("${background}")` : undefined,
      }}
      role="img"
      aria-label={"Call To Action Background Image"}
    >
      <p className="callToAction__title">{title}</p>
      <p className="callToAction__subtile">{subtitle}</p>
      <Button href={buttonLink} text={buttonText} />
    </section>
  );
};

export default CallToAction;
