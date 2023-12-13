import TileButton from '../components/tile-button';
import './main-module-redirect-page.scss';

const MainModuleRedirectPage = () => {
    
    const tileButtonData = [
        { imageUrl: './images/medical-team.png', linkTo: '/specialities', title: 'Specialities' },
        { imageUrl: './images/key.png', linkTo: '/accesses', title: 'Accesses' },
      ];

    return(
        <div className="container">
        <div className="tile-buttons-container">
          {tileButtonData.map((buttonData, index) => (
            <TileButton key={index} {...buttonData} />
          ))}
        </div>
      </div>
    );
};

export default MainModuleRedirectPage;
