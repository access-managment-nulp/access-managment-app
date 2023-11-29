import './tile-button.scss';

interface TileButtonProps {
    imageUrl: string;
    title: string;
    linkTo: string;
  }
  
const TileButton = (props : TileButtonProps) => {

    return(
        <div className="tile-container">
        <a href={props.linkTo} className="tile-link">
        <div className="tile-content">
        <img src={props.imageUrl} alt="Tile Image" className="tile-image" />
          <h3 className="tile-title">{props.title}</h3>
        </div>
      </a>
    </div>
    );
};

export default TileButton;