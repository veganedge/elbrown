import WebsiteHeader from '../../components/WebsiteHeader/WebsiteHeader';
import styles from './ELStarlingIntro.module.css';


function ELStarlingIntro(props) {
    return (
        <>
            <WebsiteHeader 
                logoAlt='E L Starling logo' 
                logoSrc='https://via.placeholder.com/500x100/f7f7f2/000000?text=signature logo'
                starlingAlt='starling animation'
                starlingSrc='https://via.placeholder.com/300x100/f7f7f2/B7AC44?text=starling image'
                />
        </>
    );
}

export default ELStarlingIntro;