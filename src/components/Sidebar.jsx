import styles from "./Sidebar.module.css";

export function Sidebar() {
    return (
        <div>
            <aside className={styles.sidebar}>
                <img
                    className={styles.cover}
                    src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                />
                <div className={styles.profile}>
                    <strong>Lucas Dantas</strong>
                    <span>Web developer</span>
                </div>

                <footer>
                    <a href="#">Editar seu perfil</a>
                </footer>
            </aside>
        </div>
    );
}
