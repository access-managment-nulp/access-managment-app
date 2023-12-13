import TileButton from './components/tile-button';
import './welcome-page.scss';

export default function WelcomePage() {
    
    const tileButtonData = [
        { imageUrl: './images/access-control.png', linkTo: '/redirectmodule', title: 'Access Management' },
        { imageUrl: './images/healthy.png', linkTo: '/welcomepage', title: 'Patient Cabinet' },
        { imageUrl: './images/nutritionist.png', linkTo: '/welcomepage', title: 'Doctor Cabinet' },
        { imageUrl: './images/advice.png', linkTo: '/welcomepage', title: 'Communication' },
        { imageUrl: './images/questions.png', linkTo: '/welcomepage', title: 'Questionnaires' },
        { imageUrl: './images/diagnosis.png', linkTo: '/welcomepage', title: 'Analysis' },
      ];

    return(
        <div className="container">
        <h1 className="welcome-title">Welcome, Administrator!</h1>
        <div className="tile-buttons-container">
          {tileButtonData.map((buttonData, index) => (
            <TileButton key={index} {...buttonData} />
          ))}
        </div>
      </div>
    );
}