import styles from './WebsiteHeader.module.css';

function WebsiteHeader(props) {
    return (
        <header>
            <div className={styles.headerImageContainer}>
                <img 
                    alt='website logo' 
                    src='https://via.placeholder.com/500x100/1e1f21/3e4145?text=signature logo'>
                </img>
                <span className={styles.headerImageSpan}></span>
                <img 
                    className={styles.headerAnimatedImage} 
                    alt='starling animation' 
                    src='https://via.placeholder.com/300x100/1e1f21/3e4145?text=signature logo'>
                </img>
            </div>
            <nav>
                <ul className={styles.headerNavList}>
                    <li className={styles.headerNavListItem}>About</li>
                    <li className={styles.headerNavListItem}>Books</li>
                    <li className={styles.headerNavListItem}>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default WebsiteHeader;