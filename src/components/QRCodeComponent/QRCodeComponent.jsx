import QRCode from '../../assets/images/image-qr-code.png';
import classes from './QRCodeComponent.module.css';

export default function QRCodeComponent() {
  return (
    <div className={classes.container}>
      <img
        src={QRCode}
        alt="qr-code"
        className={classes.image}
      />
      <div className={classes.text_container}>
        <h2 className={classes.mainText}>
          Improve your front-end skills by building projects
        </h2>
        <p className={classes.description}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
