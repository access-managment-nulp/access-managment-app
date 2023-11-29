import TileButton from './components/tile-button';
import './welcome-page.scss';

export default function WelcomePage() {
    
    const tileButtonData = [
        { imageUrl: './images/admin.png', linkTo: '/redirectmodule', title: 'Access Management' },
        { imageUrl: './images/admin.png', linkTo: '/welcomepage', title: 'NotImplemented' },
        { imageUrl: './images/admin.png', linkTo: '/welcomepage', title: 'NotImplemented' },
        { imageUrl: './images/admin.png', linkTo: '/welcomepage', title: 'NotImplemented' },
        { imageUrl: './images/admin.png', linkTo: '/welcomepage', title: 'NotImplemented' },
        { imageUrl: './images/admin.png', linkTo: '/welcomepage', title: 'NotImplemented' },
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