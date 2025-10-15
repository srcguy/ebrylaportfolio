import './index.css'
import { motion } from 'motion/react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { type Settings } from 'react-slick'

function App() {

  const header = "flex-1 flex text-zinc-500";
  const main = "flex-20 flex justify-center";
  const title = "text-autumn-6 lg:text-[5em] sm:text-[4em] text-[3em] font-serif font-semibold";
  const h2 = "text-autumn-5 lg:text-[4em] sm:text-[3em] text-[2em] font-serif font-semibold";
  const h3 = "text-autumn-4 lg:text-[3em] sm:text-[2em] text-[1em] font-sans font-semibold";
  const h4 = "text-autumn-4 lg:text-[2em] sm:text-[1em] text-[0.75em] font-sans font-semibold";
  const contact = "text-autumn-5 lg:text-[2.5em] sm:text-[2em] text-[1.2em] font-serif font-semibold";
  const headertext = "text-zinc-700 lg:text-[1em] md:text-[0.8em] sm:text-[0.6em] text-[0.6em] mb-auto mt-auto mr-10"

  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    }
  }

  const fadeInScroll = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1,
      transition: {
        duration: 1
      }
    }
  }

  const fromBot = {
    initial: {
      y: -100,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    }
  }

    const settings1: Settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      lazyLoad: "ondemand",
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        },
      },
    ],
  };
  const settings2: Settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      lazyLoad: "ondemand",
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        },
      },
    ],
  };
  const settings3: Settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      lazyLoad: "ondemand",
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        },
      },
    ],
  };

  return (
    <div className=''>
      <div className='h-screen w-screen bg-autumn-1-2'>
        <motion.div className={`${header}`}>
          <div className='flex-1 flex justify-start'>
            <a href="https://www.instagram.com/fotograficzny.mc"><img src='instagram.png' className='lg:h-8 md:h-8 sm:h-6 h-5 pt-1 pl-10 mb-auto mt-auto'></img></a>
          </div>
          <div className='flex-3 flex justify-end'>
            <p className={`${headertext}`}>kontakt.foto.bryla@gmail.com</p>
            <p className={`${headertext}`}>+48 663 865 176</p>
          </div>
        </motion.div>
        <motion.div className={`${main}`}>
          <div>
          <motion.p className={`${title} mt-50 text-center`} {...fadeIn} transition={{delay: 0, duration: 0.5}}>Emanuel Bryla</motion.p>
          <motion.p className={`${h2} mt-0 text-center`} {...fadeIn} transition={{delay: 0.5, duration: 0.5}}>Fotograf, na którego możesz liczyć </motion.p>
          <motion.p className={`${h3} mt-5 text-center`}>
            <motion.span {...fromBot} transition={{delay: 1}} className='mr-10'>Opole</motion.span> 
            <motion.span {...fromBot} transition={{delay: 1.3}} className='mr-10'>Nysa</motion.span>
            <motion.span {...fromBot} transition={{delay: 1.6}}>Wrocław</motion.span>
          </motion.p>
          </div>
        </motion.div>
      </div>
      <div className='h-screen w-screen flex flex-col gap-10 bg-autumn-1-2'>
        <motion.div className='flex-1 mr-10 ml-10'>
          <motion.p className={`${h2} mt-10 text-center`} {...fadeInScroll}>Portret</motion.p>
          <div className='flex'>
            <motion.p className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              Indywidualna sesja portretowa, dopasowana do Twojego stylu i osobowości. Idealna do portfolio, CV lub social mediów.
            </motion.p>
            <motion.ul className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              <li>sesja 1h</li>
              <li>obróbka do 5 dni</li>
              <li>wycena indywidualna</li>
            </motion.ul>
          </div>
        </motion.div>
        <Slider {...settings1} className="flex-3">
          <motion.img src='portret/1.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/2.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/3.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/4.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/5.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/6.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/7.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/8.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='portret/9.jpg' className='w-auto h-auto'></motion.img>
        </Slider>
      </div>
      <div className='sm:h-[150vh] h-[100vh] w-screen flex flex-col gap-10 bg-autumn-1-2'>
        <motion.div className='flex-1 mt-10 w-screen'>
          <motion.p className={`${h2} mt-10 text-center sm:mt-20y w-screen`} {...fadeInScroll}>Architektura</motion.p>
          <div className='flex flex-col'>
            <motion.p className={`${h4} w-screen mt-5 pr-10 pl-10 text-center flex-1`} {...fadeInScroll}>
              Fotografia budynków i przestrzeni, która oddaje charakter miejsca i detale konstrukcji. Idealna do prezentacji realizacji architektonicznych i wnętrz.
            </motion.p>
            <motion.ul className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              <li>wycena indywidualna</li>
            </motion.ul>
          </div>
        </motion.div>
        <Slider {...settings2} className="flex-5 sm:w-150 w-[100vw] ml-auto mr-auto">
          <motion.img src='architektura/1.jpg' className='w-100 h-auto sm:mt-40 mt-20 inline'></motion.img>
          <motion.img src='architektura/2.jpg' className='w-100 h-auto sm:mt-70 mt-40 inline'></motion.img>
          <motion.img src='architektura/3.jpg' className='w-100 h-auto  inline'></motion.img>
          <motion.img src='architektura/4.jpg' className='w-100 h-auto  inline'></motion.img>
          <motion.img src='architektura/5.jpg' className='w-100 h-auto  inline'></motion.img>
        </Slider>
      </div>
      <div className='sm:h-[120vh] h-[70vh] w-screen flex flex-col gap-10 bg-autumn-1-2'>
        <motion.div className='flex-1 mt-10 mr-10 w-screen'>
          <motion.p className={`${h2} text-center`} {...fadeInScroll}>Dla par</motion.p>
          <div className='flex flex-rows ml-10'>
            <motion.p className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              Romantyczna sesja w plenerze lub wybranym miejscu. 1,5 godziny wspólnych ujęć, pełnych emocji i naturalnych kadrów.
            </motion.p>
            <motion.ul className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              <li>15 zdjęć</li>
              <li>retusz + obróbka</li>
              <li>do 5 dni</li>
              <li>120 zł</li>
            </motion.ul>
          </div>
        </motion.div>
        <Slider {...settings2} className="flex-2 sm:w-230 w-[100vw] ml-auto mr-auto">
          <motion.img src='dla_par/1_1.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='dla_par/2.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='dla_par/3.jpg' className='w-auto h-auto'></motion.img>
        </Slider>
      </div>
      <div className='h-screen w-screen flex flex-col gap-10 bg-autumn-1-2'>
        <motion.div className='flex-1 mr-10 ml-10'>
          <motion.p className={`${h2} text-center`} {...fadeInScroll}>Reportaż biegowy</motion.p>
          <div className='flex'>
            <motion.p className={`${h4} mt-5 text-center flex-3`} {...fadeInScroll}>
              Dynamiczne zdjęcia z zawodów sportowych - emocje, wysiłek i radość uczestników uchwycone w ruchu.
            </motion.p>
            <motion.ul className={`${h4} mt-5 text-center flex-2`} {...fadeInScroll}>
              <li>sesja ok. 4h</li>
              <li>obróbka do 3 dni</li>
              <li>350 zł</li>
            </motion.ul>
          </div>
        </motion.div>
        <Slider {...settings1} className="flex-3">
          <motion.img src='reportaz_biegowy/1.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/2.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/3.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/4.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/5.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/6.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/7.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/8.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_biegowy/9.jpg' className='w-auto h-auto'></motion.img>
        </Slider>
      </div>
      <div className='sm:h-screen h-[70vh] w-screen flex flex-col gap-10 bg-autumn-1-2'>
        <motion.div className='flex-1 mr-10 ml-10'>
          <motion.p className={`${h2} mt-10 text-center`} {...fadeInScroll}>Reportaż meczowy</motion.p>
          <div className='flex'>
            <motion.p className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              Relacja fotograficzna z meczu, pełna energii i sportowych emocji. Idealna dla klubów, drużyn i organizatorów wydarzeń.
            </motion.p>
            <motion.ul className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              <li>woj. opolskie</li>
              <li>sesja ok. 3h</li>
              <li>obróbka do 10h</li>
              <li>50+ zdjęć</li>
              <li>100-300 zł</li>
            </motion.ul>
          </div>
        </motion.div>
        <Slider {...settings3} className="flex-3 sm:mt-0 mt-10">
          <motion.img src='reportaz_meczowy/1.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/2.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/3.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/4.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/5.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/6.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/7.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/8.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_meczowy/10.jpg' className='w-auto h-auto'></motion.img>
        </Slider>
      </div>
      <div className='sm:h-screen h-[70vh] w-screen flex flex-col gap-10 bg-autumn-1-2'>
        <motion.div className='flex-1 mr-10 ml-10'>
          <motion.p className={`${h2} text-center`} {...fadeInScroll}>Reportaż ogólno-sportowy</motion.p>
          <div className='flex'>
            <motion.p className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              Fotoreportaż z dowolnego wydarzenia sportowego - od lokalnych zawodów po większe imprezy. Zdjęcia dopasowane do charakteru wydarzenia.
            </motion.p>
            <motion.ul className={`${h4} mt-5 text-center flex-1`} {...fadeInScroll}>
              <li>woj. opolskie</li>
              <li>sesja ok. 3h</li>
              <li>obróbka do 10h</li>
              <li>wycena indywidualna</li>
            </motion.ul>
          </div>
        </motion.div>
        <Slider {...settings3} className="flex-3 sm:mt-0 mt-10">
          <motion.img src='reportaz_ogolny/1.png' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_ogolny/2.png' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_ogolny/3.png' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_ogolny/4.png' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_ogolny/5.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_ogolny/6.jpg' className='w-auto h-auto'></motion.img>
          <motion.img src='reportaz_ogolny/7.jpg' className='w-auto h-auto'></motion.img>
        </Slider>
      </div>
      <div className='sm:h-screen h-[60vh] w-screen flex flex-col sm:flex-row gap-10 bg-autumn-1-2 mb-80 sm:mb-0'>
        <div className='flex-1 flex flex-col sm:pl-10'>
          <motion.p className={`${h2} mt-5 text-center `}>
            O mnie
          </motion.p>
          <motion.p className={`${h4} mt-5 text-center flex-1 sm:mr-0 mr-10 ml-10`}>
            Nazywam się Emanuel i pochodzę z niewielkiej wioski pod Opolem. Od trzech lat fotografia towarzyszy mi każdego dnia - stała się moim językiem, sposobem opowiadania historii i zatrzymywania chwil.
            Kształcę się jako Technik Fotografii, poszukując własnego stylu w świecie obrazu. Tworzę zarówno w technice cyfrowej, jak i analogowej, bo wierzę, że każde zdjęcie ma swój niepowtarzalny rytm i emocję.
          </motion.p>
        </div>
        <div className='flex-1'>
          <motion.img src='emci/1.jpg' className='mr-auto ml-auto h-150 rounded-xl'/>
        </div>
      </div>
      <div className='sm:h-screen h-[70vh] w-screen flex flex-col sm:flex-row gap-10 bg-autumn-1-2'>
        <div className='flex-1 sm:m-20 m-10 rounded-xl sm:justify-center items-center flex bg-autumn-2'>
          <div className='hidden sm:block flex-2'>
            <motion.p className={`${title} mt-5 ml-20`}>
              Kontakt
            </motion.p>
          </div>
          <div className='flex-3'>
            <motion.p className={`${contact} mt-5 pl-4 flex`}>
              <img src="instagram.png" className='h-15 mr-10 w-auto hidden sm:block'></img>
              fotograficzny.mc
            </motion.p>
            <motion.p className={`${contact} mt-5 pl-4 flex`}>
              <img src="tel.png" className='h-15 mr-10 w-auto hidden sm:block'></img>
              663 865 176
            </motion.p>
            <motion.p className={`${contact} mt-5 pl-4 flex`}>
              <img src="email.png" className='h-15 mr-10 w-auto hidden sm:block'></img>
              <a href="mailto:kontakt.foto.bryla@gmail.com">kontakt.foto.bryla@gmail.com</a>
            </motion.p>
          </div>
        </div>
      </div>
      <p className='bg-autumn-1-2 text-zinc-900/80 text-center pb-2'>Zdjęcia: Emanuel Bryla | Wykonanie: Bruno Szewczyk © 2025</p>
    </div>
  )
}

export default App
