import './index.css';
import BannerImage from 'assets/banner.jpg';

export default function Banner() {
  return (
    <section className="banner">
      <div className="content">
        <h1 className="title">Bem-vindo à Porcelanarte</h1>
        <p className="paragraph">Explore o mundo do artesanato e descubra a beleza da arte em cada peça.</p>
      </div>
      <div className="images">
        <img src={BannerImage} aria-hidden={true} alt="Foto Principal" className="main-photo" />
      </div>
    </section>
  );
}