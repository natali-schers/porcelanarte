import './index.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {year} Porcelanarte. Todos os direitos reservados.</p>
        </footer>
    );        
}