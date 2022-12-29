import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/lucasmbrute2.png",
            name: "Lucas",
            role: "Full stack developer",
        },
        publishedAt: new Date("2022-12-25 20:00:00"),
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. O nome do projeto é 🚀",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego",
            role: "CTO @Rocketseat",
        },
        publishedAt: new Date("2022-12-28 20:00:00"),
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            {
                type: "paragraph",
                content:
                    "Acabei de subir mais um projeto no meu portifa. O nome do projeto é 🚀",
            },
            { type: "link", content: "jane.design/doctorcare" },
        ],
    },
];

function App() {
    return (
        <div className="App">
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post post={post} />
                    ))}
                </main>
            </div>
        </div>
    );
}

export default App;
