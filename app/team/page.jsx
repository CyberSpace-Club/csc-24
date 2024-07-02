import React from "react";
import "@/app/globals.css";
import Person from "../components/Person";
import h1 from "@/assets/team/behindTheScene.svg";
import h2 from "@/assets/team/facultyCoordinator.svg";
import h21 from "@/assets/team/facultyCoordinatorStraight.svg";
import h3 from "@/assets/team/dsw.svg";
import h4 from "@/assets/team/executive.svg";
import h5 from "@/assets/team/core.svg";
import h6 from "@/assets/team/deputyCore.svg";
//Faculties
import UmaShankar from "@/assets/team/people/FacultyCoordinator/DrUmashankarRawat.jpg";
import Rohit from "@/assets/team/people/FacultyCoordinator/DrRohitBhatnagar.jpg";
import AmitKumarBairwa from "@/assets/team/people/FacultyCoordinator/AmitKumarBairwa.jpg";
import Sanchit from "@/assets/team/people/DSW/SanchitAnand.jpg";
//Execs
import vatsa from "@/assets/team/people/execs/SrivatsaPalepu.jpeg";
import salil from "@/assets/team/people/execs/SalilHiremath.jpg";
import Kanishk from "@/assets/team/people/execs/Kanishk.jpg";
import HarshitRawat from "@/assets/team/people/execs/HarshitRawat.jpg";
import Chitransh from "@/assets/team/people/execs/ChitranshSaxena.jpeg";
import AditiJain from "@/assets/team/people/execs/Aditijain.jpeg";
import Chetna from "@/assets/team/people/execs/ChetnaRai.jpeg";
import HarshKamra from "@/assets/team/people/execs/HarshKamra.jpeg";
//Heads
import DhruvRathee from "@/assets/team/people/core/DhruvRathee.jpg";
import Ganesh from "@/assets/team/people/core/GaneshKotwade.jpg";
import Aarv from "@/assets/team/people/core/AarvMankodi.jpg";
import AditiShrivastava from "@/assets/team/people/core/AditiShrivastava.jpg";
import ShauryaSharma from "@/assets/team/people/core/ShauryaSharma.jpg";
import AdityaAgrawal from "@/assets/team/people/core/AdityaAgrawal.jpg";
import AmiqueKhan from "@/assets/team/people/core/AmiqueKhan.jpg";
import AnkitSingh from "@/assets/team/people/core/AnkitSingh.jpg";
import AnshikaVerma from "@/assets/team/people/core/AnshikaVerma.jpg";
import AnugyaJain from "@/assets/team/people/core/AnugyaJain.jpg";
import AnushkaJain from "@/assets/team/people/core/AnushkaJain.jpg";
import ArkMani from "@/assets/team/people/core/ArkMani.jpg";
import ArnabRoy from "@/assets/team/people/core/ARNABROY.jpg";
import ArnavRathi from "@/assets/team/people/core/ArnavRathi.jpg";
import BaibhavSahoo from "@/assets/team/people/core/BaibhavSahoo.jpg";
import BhavyaBansal from "@/assets/team/people/core/BhavyaBansal.jpg";
import DamandeepKaur from "@/assets/team/people/core/DamandeepKaur.jpg";
import DineshChoudhary from "@/assets/team/people/core/DineshChoudhary.jpg";
import EkagraRamola from "@/assets/team/people/core/EkagraRamola.jpg";
import GargiPal from "@/assets/team/people/core/GargiPal.jpg";
import HimankSingh from "@/assets/team/people/core/HimankSingh.jpg";
import HussainRaza from "@/assets/team/people/core/HussainRaza.jpg";
import IshikaSingh from "@/assets/team/people/core/IshikaSingh.jpg";
import JatinKumarSangewar from "@/assets/team/people/core/JatinKumarSangewar.jpg";
import KartikeyaChaturvedi from "@/assets/team/people/core/KartikeyaChaturvedi.jpg";
import KashishTiwari from "@/assets/team/people/core/KashishTiwari.jpg";
import KrishnaGoel from "@/assets/team/people/core/KrishnaGoel.jpg";
import KritarthBijalwann from "@/assets/team/people/core/KritarthBijalwann.jpg";
import KuberChhabra from "@/assets/team/people/core/KuberChhabra.jpg";
import ManyaAgrawal from "@/assets/team/people/core/ManyaAgrawal.jpg";
import MradulGarg from "@/assets/team/people/core/MradulGarg.jpg";
import MuskanShinghal from "@/assets/team/people/core/MuskanShinghal .jpg";
import NamanKumar from "@/assets/team/people/core/NamanKumar.jpg";
import NikhilVerma from "@/assets/team/people/core/NikhilVerma.jpg";
import NishikOjha from "@/assets/team/people/core/NishikOjha.jpg";
import PaarviChauhan from "@/assets/team/people/core/PaarviChauhan.jpg";
import ParthSarathi from "@/assets/team/people/core/ParthSarathi.jpg";
import PoornimaSingh from "@/assets/team/people/core/PoornimaSingh.jpg";
import SnehaShekhar from "@/assets/team/people/core/SnehaShekhar.jpg";
import SourabhBiswas from "@/assets/team/people/core/SourabhBiswas.jpg";
import SrikruthiNeriyanuri from "@/assets/team/people/core/SrikruthiNeriyanuri.jpg";
import TanishSharma from "@/assets/team/people/core/TanishSharma.jpg";
import ToshaniGupta from "@/assets/team/people/core/ToshaniGupta.jpg";
import VedicVarma from "@/assets/team/people/core/VedicVarma.jpg";
import VritiGupta from "@/assets/team/people/core/VritiGupta.jpg";
import YogendraSaini from "@/assets/team/people/core/YogendraSaini.jpg";
import VaibhavSnigdh from "@/assets/team/people/core/VaibhavSnigdh.jpg";
import RadhikaSinghal from "@/assets/team/people/core/RadhikaSinghal.jpg";
import SiaAsrani from "@/assets/team/people/core/SiaAsrani.jpg";
import SaranshSingh from "@/assets/team/people/core/SaranshSingh.jpg";


import vansh from "@/assets/team/people/exec/vansh.jpeg";
import anurag from "@/assets/team/people/exec/anurag.jpeg";
import taveesha from "@/assets/team/people/exec/taveesha.jpeg";
import devanshu from "@/assets/team/people/exec/DevanshuKejriwal.JPG";
import anmol from "@/assets/team/people/exec/AnmolGill.jpg";
import ananyasharma from "@/assets/team/people/exec/ananya.jpeg";
import Ritika from "@/assets/team/people/exec/RitikaMalhotra.jpeg";
import ShivendraGoenka from "@/assets/team/people/exec/shivendragoenka.jpeg";
import Anushka from "@/assets/team/people/exec/AnushkaShreya.jpg";
import SRD from "@/assets/team/people/exec/SHIVAMRAJDUBEY.jpeg";
import Lakshya from "@/assets/team/people/exec/LakshyaPawar.jpg";
import Navneet from "@/assets/team/people/exec/navneet.jpeg";
import Sarvi from "@/assets/team/people/exec/SarviAgarwal.jpg";
import AditiSoni from "@/assets/team/people/exec/AditiSoni.jpeg";
import Akansha from "@/assets/team/people/exec/AkankshaSinha.jpg";
import ArnavNahar from "@/assets/team/people/exec/ArnavNahar.jpg";
import Sumit from "@/assets/team/people/exec/sumit.jpeg";
import AnanyaPatel from "@/assets/team/people/exec/AnanyaPatel.JPG";
import Karishma from "@/assets/team/people/exec/KarishmaDhyani.jpg";
import AvniGoel from "@/assets/team/people/exec/AvniGoel.jpg";
import Ayushman from "@/assets/team/people/exec/AayushmanRanjan.jpeg";
import Lovish from "@/assets/team/people/exec/lovishaneja.jpeg";
import Shivang from "@/assets/team/people/exec/ShivangBansal.jpg";
import Raunak from "@/assets/team/people/exec/Raunak.jpeg";
import AdarshDevashish from "@/assets/team/people/exec/AdarshDevashish.jpg";
import Darshan from "@/assets/team/people/exec/DarshanBaingani.jpg";
import VishalRai from "@/assets/team/people/exec/VishalRai.jpg";
import AnshPorwal from "@/assets/team/people/exec/AnshPorwal.jpg";
import Kamya from "@/assets/team/people/exec/Kamya.jpg";
import Pratyaksh from "@/assets/team/people/exec/PratyakshSinghal.jpg";
import AryanShah from "@/assets/team/people/exec/AryanShah.jpg";
import AnandGhugare from "@/assets/team/people/exec/AnandGhugare.jpg";

import SheryaGupta from "@/assets/team/people/exec/SheryaGupta.jpg";
import JainilShah from "@/assets/team/people/exec/JainilShah.jpeg";
import ParthSarrathi from "@/assets/team/people/exec/ParthSarrathi.jpg";
import RanojitPalit from "@/assets/team/people/exec/RanojitPalit.jpg";
import Kartikey from "@/assets/team/people/exec/Kartikey.jpg";
import Sidharth from "@/assets/team/people/exec/Sidharth.jpg";
import Sarthak from "@/assets/team/people/exec/Sarthak.jpg";
import AnantSharma from "@/assets/team/people/exec/AnantSharma.jpg";

import Image from "next/image";

const TeamPage = () => {
  return (
    <div
      className="grid grid-flow-row justify-center items-center pt-[90px] text-[#eeeeee]
    g:bg-slate-800
    d:bg-slate-600
    m:bg-slate-400 overflow-x-hidden"
    >
      <div className="justify-self-center">
        <Image
          alt="our team"
          height={600}
          width={600}
          src={h1}
          className="
          hidden
          md:hidden
          sm:hidden
          lg:block"
        />{" "}
        <Image
          height={500}
          width={500}
          src={h1}
          className="
          hidden
        md:block
        sm:hidden
        lg:hidden"
        />{" "}
        <Image
          height={400}
          width={400}
          src={h1}
          className="
          md:hidden
          block
          lg:hidden"
        />
      </div>
      {/* Fac cooredinators */}
      <div
        className="w-[100vw] grid grid-flow-row items-center justify-evenly mt-3 mb-12 px-12
      md:grid-cols-7 sm:grid-cols-2 grid-cols-1"
      >
        <Image
          height={300}
          width={150}
          src={h2}
          className="col-span-1 md:block hidden"
        />{" "}
        <Image
          height={300}
          width={150}
          src={h4}
          className="sm:col-span-3 my-6 justify-self-center md:hidden sm:block"
        />
        {/* <h1 className="md:hidden sm:block fc place-content-center">
          FACULTY COORDINATORS
        </h1> */}
        <div className="justify-self-center md:col-span-2">
          <Person
            img={Rohit}
            name="Dr. Roheet Bhatnagar"
            post="Directorate of Research"
            link1="https://www.linkedin.com/in/dr-roheet-bhatnagar-79ba8015/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/roheet-bhatnagar.html"
          />
        </div>
        <div className="md:col-span-2">
          <Person
            img={UmaShankar}
            name="Dr. Umashankar Rawat"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/uma-shankar-rawat.html"
          />
        </div>
        <div className="md:col-span-2">
          <Person
            img={AmitKumarBairwa}
            name="Dr. Amit Kumar Bairwa"
            post="Professor in Department of CSE"
            link1="https://www.linkedin.com/in/dr-amit-kumar-bairwa-460aaaa9/?originalSubdomain=in"
            link2="https://jaipur.manipal.edu/foe/schools-faculty/faculty-list/Amit-Kumar-Bairwa.html"
          />
        </div>
      </div>
      <div className="pageSeparator" />
      {/* dsw */}
      <div className="grid grid-flow-col grid-cols-7 my-20 justify-center items-center mx-12">
        <div className="justify-self-center col-span-6">
          <Person
            img={Sanchit}
            name="Dr. Sanchit Anand"
            post="Assistant Director, Directorate of Student's Welfare"
            link1="https://www.linkedin.com/in/dr-sanchit-anand-4a9112105/"
            link2="https://jaipur.manipal.edu/muj/academics/institution-list/foe/schools-faculty/faculty-list/Sanchit-Anand.html"
          />
        </div>
        <Image height={200} width={100} src={h3} className="col-span-1" />
      </div>
      <div className="pageSeparator" />
      {/* Exec */}
      <div className="grid grid-flow-row place-items-center  my-20">
        <Image
          height={300}
          width={600}
          src={h4}
          className="justify-self-center pb-6
          md:hidden
          hidden
          lg:block"
        />{" "}
        <Image
          height={300}
          width={500}
          src={h4}
          className="justify-self-center pb-6
        md:block
        hidden
        lg:hidden"
        />{" "}
        <Image
          height={300}
          width={400}
          src={h4}
          className="justify-self-center pb-6
          md:hidden
          block
          lg:hidden"
        />
        <div className="gap-y-7 gap-x-6 grid grid-flow-row md:grid-cols-3 sm:grid-cols-2 justify-evenly w-[100vw]">
          <div className="">
            <Person
              img={vatsa}
              name="Srivatsa Palepu"
              post="Chairperson"
              link1="https://www.linkedin.com/in/srivatsa-palepu-5210a6265"
              link2="https://www.instagram.com/srivatsa_palepu/?next=%2F"
            />
          </div>
          <div>
            <Person
              img={Chitransh}
              name="Chitransh Saxena"
              post="Vice-Chairperson"
              link1="https://www.linkedin.com/in/chitranshatlkdin/"
              link2="https://www.instagram.com/_.chitransh_saxena._/"
            />
          </div>
          <div>
            <Person
              img={HarshitRawat}
              name="Harshit Rawat"
              post="General Secretary"
              link1="https://www.linkedin.com/in/harshit-rawat-it/"
              link2="https://www.instagram.com/harshitt_rawat/"
            />
          </div>
          <div>
            <Person
              img={AditiJain}
              name="Aditi Jain"
              post="Treasurer"
              link1="https://www.linkedin.com/in/aditi-jain-09ab53244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="http://instagram.com/aditijain.thv"
            />
          </div>
          <div>
            <Person
              img={HarshKamra}
              name="Harsh Kamra"
              post="Creative Director"
              link1="https://www.linkedin.com/in/harsh-kamra-a6a53b251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://instagram.com/itsastrotine"
            />
          </div>
          <div>
            <Person
              img={salil}
              name="Salil Hiremath"
              post="Human Resource Director"
              link1="https://www.linkedin.com/in/salil-hiremath-946784212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/saaalil?igsh=b2s1a29jdGsyODA4"
            />
          </div>
        </div>
        <div className="mt-7">
          <Person
            img={Kanishk}
            name="Kanishk Valechha"
            post="Webmaster"
            link1="https://www.linkedin.com/in/kanishk-valechha/"
            link2="https://www.instagram.com/kanishk_valechha/"
          />
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Core */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="heads justify-self-center md:text-8xl text-7xl mb-6">
          HEADS
        </h1>
        <div className="gap-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-evenly w-[100vw]">
          <div>
            <Person
              img={DhruvRathee}
              name="Dhruv Rathee"
              post="Head of Events"
              link1="https://www.linkedin.com/" //No link or id given
              link2="https://instagram.com/"
            />
          </div>
          <div>
            <Person
              img={Ganesh}
              name="Ganesh Kotwade"
              post="Head of Marketing"
              link1="https://www.linkedin.com/in/ganesh-kotwade-2a2191275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/gannny_k?igsh=ZWhtMTlxODJoZmsz"
            />
          </div>
          <div>
            <Person
              img={RadhikaSinghal}
              name="RadhikaSinghal"
              post="Technical Head"
              link1="https://www.linkedin.com/in/radhika-singhal-065029202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/radhikasinghall?igsh=dHJyMW1xMzNsY250&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={SrikruthiNeriyanuri}
              name="Srikruthi Neriyanuri"
              post="Head of Research"
              link1="http://www.linkedin.com/in/srikruthi-neriyanuri-49a51b230" // No second link found in Google sheets
              link2="https://www.instagram.com/_kruthi.n_/"
            />
          </div>
          <div>
            <Person
              img={ShauryaSharma}
              name="Shaurya Sharma"
              post="Head of Content"
              link1="https://www.linkedin.com/in/shaurya-sharma-2ba105275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/shaurya_sharma27?igsh=bnNpMWtzYmVienBi"
            />
          </div>
          <div>
            <Person
              img={YogendraSaini}
              name="Yogendra Saini"
              post="Head of Operations"
              link1="https://www.linkedin.com/in/yogendra-saini-32a286282/"
              link2="https://www.instagram.com/yogi_vert/"
            />
          </div>
          <div>
            <Person
              img={HussainRaza}
              name="Hussain Raza"
              post="Head of Programs"
              link1="https://www.linkedin.com/in/mohd-hussain-raza-naqvi-7b6587236/"
              link2="https://www.instagram.com/m.h.r_naqvi1703/"
            />
          </div>

          <div>
            <Person
              img={ManyaAgrawal}
              name="Manya Agrawal"
              post="Head of Graphic Design"
              link1="https://www.linkedin.com/in/manya-agrawal-58813830a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/manya_9009?igsh=czgxajg2aWhubDZ3"
            />
          </div>
          <div>
            <Person
              img={ArnabRoy}
              name="Arnab Roy"
              post="Head of Curations"
              link1="https://www.linkedin.com/in/arnab-roy-913548313/" //Only one link is available
              link2="https://www.instagram.com/arnab_1411/"
            />
          </div>
          <div>
            <Person
              img={HimankSingh}
              name="Himank Singh"
              post="Head of Media"
              link1="http://www.linkedin.com/in/himank-singh-b92790312"
              link2="https://www.instagram.com/himanksss?igsh=aXhxYXI1ZW0xbHZ2&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={TanishSharma}
              name="Tanish Sharma"
              post="Head of Social Media"
              link1="https://www.linkedin.com/in/tanish-sharma-922094243/"
              link2="https://www.instagram.com/soulm8fr/"
            />
          </div>
          <div>
            <Person
              img={VedicVarma}
              name="VedicVarma"
              post="Joint WebMaster"
              link1="https://instagram.com/aditijain.thv?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/aditi-jain-09ab53244"
            />
          </div>
          <div>
            <Person
              img={PoornimaSingh}
              name="Poornima Singh"
              post="Joint Head of Marketing"
              link1="https://www.linkedin.com/in/poornima-singh-118a7b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/singhpoornima545?igsh=MWp5NmJ4dmp3ZHdxeQ=="
            />
          </div>
          <div>
            <Person
              img={GargiPal}
              name="Gargi Pal"
              post="Joint Head of Marketing"
              link1="https://www.linkedin.com/in/gargi-pal-390a68293/"
              link2="https://www.instagram.com/invites/contact/?igsh=12vgzph6vuoth&utm_content=s6y5ssx"
            />
          </div>
          <div>
            <Person
              img={KashishTiwari}
              name="Kashish Tiwari"
              post="Joint Head of Marketing"
              link1="https://www.linkedin.com/in/kashish-tiwari-744ba3289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/kashishtiwari_17?igsh=MWw2bGF4ZW51ODRrcQ=="
            />
          </div>
          <div>
            <Person
              img={KrishnaGoel}
              name="Krishna Goel"
              post="Joint Head Curations"
              link1="https://www.linkedin.com/in/krishna-goel-38a345275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/invites/contact/?igsh=2ip2u22iyyj7&utm_content=rm936wu"
            />
          </div>
          <div>
            <Person
              img={AnushkaJain}
              name="Anushka Jain"
              post="Joint Head Curations"
              link1="https://www.linkedin.com/in/anushka-jain-69479a21b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/anushkajain0807?igsh=aXJtbWEzOWQ5NnQy"
            />
          </div>
          <div>
            <Person
              img={PaarviChauhan}
              name="Paarvi Chauhan"
              post="Joint Head Graphic Design"
              link1="https://www.linkedin.com/in/paarvi-chauhan-817a2a276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              link2="https://www.instagram.com/nvm._.itzzpaarvi?igsh=bzd1MDUwZjNiOWNy&utm_source=qr"
            />
          </div>
          <div>
            <Person
              img={KuberChhabra}
              name="Kuber Chhabra"
              post="Joint Head Graphic Design"
              link1="https://www.linkedin.com/in/kuber-chhabra-616101295"
              link2="https://www.instagram.com/kuber.chhabra?igsh=MWxsaGkzdHM0cGgzZw=="
            />
          </div>
          <div>
            <Person
              img={VritiGupta}
              name="Vriti Gupta"
              post="Joint Head Content"
              link1="www.linkedin.com/" //id given link needed
              link2="https://www.instagram.com/"
            />
          </div>
          <div>
            <Person
              img={JatinKumarSangewar}
              name="Jatin Kumar Sangewar"
              post="Joint Head of Media"
              link1="https://www.linkedin.com/in/jatinkumar-s/"
              link2="https://www.instagram.com/urbraiinded_loll/"
            />
          </div>
          <div>
            <Person
              img={KartikeyaChaturvedi}
              name="Kartikeya Chaturvedi"
              post="Joint Head of Media"
              link1="https://www.linkedin.com/in/kartikeya-chaturvedi-7b556528a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/kartikeya___29?igsh=MWdvbTliaGRhM2dvbg=="
            />
          </div>
          <div>
            <Person
              img={SiaAsrani}
              name="Sia Asrani"
              post="Joint Head of Social Media"
              link1="https://www.linkedin.com/in/sia-asrani-2289661bb/"
              link2="https://www.instagram.com/sia_asrani05/?igsh=MWExMXIzZzVvcXFicQ%3D%3D"
            />
          </div>
          <div>
            <Person
              img={Aarv}
              name="Aarv Mankodi"
              post="Joint Head of Technical"
              link1="https://in.linkedin.com/in/aarv-mankodi-031880241"
              link2="https://www.instagram.com/aarv_mankodi?igsh=NjhzdWtqcHdtM25s"
            />
          </div>
          <div>
            <Person
              img={ToshaniGupta}
              name="Toshani Gupta"
              post="Joint Head of Technical"
              link1="http://linkedin.com/in/toshani-gupta-abb93b27b"
              link2="https://www.instagram.com/toshani_gupta/"
            />
          </div>
          <div>
            <Person
              img={SaranshSingh}
              name="Saransh Singh"
              post="Joint Head of Technical"
              link1="http://www.linkedin.com/in/saransh3364"
              link2="https://www.instagram.com/saranshhh_03/"
            />
          </div>
          <div>
            <Person
              img={AdityaAgrawal}
              name="Aditya Agrawal"
              post="Joint Head of Programs"
              link1="https://www.linkedin.com/in/aditya-agrawal-ab5979288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              link2="https://www.instagram.com/aditya_agr18?igsh=MXI4eHY0ZmdrejRwaA=="
            />
          </div>
          <div>
            <Person
              img={SaranshSingh}
              name="Saransh Singh"
              post="Joint Head of Programs"
              link1="http://www.linkedin.com/in/saransh3364"
              link2="https://www.instagram.com/saranshhh_03/"
            />
          </div>
          <div>
            <Person
              img={SaranshSingh}
              name="Saransh Singh"
              post="Joint Head of Programs"
              link1="http://www.linkedin.com/in/saransh3364"
              link2="https://www.instagram.com/saranshhh_03/"
            />
          </div>
          <div>
            <Person
              img={SRD}
              name="Shivam Raj Dubey"
              post="Joint Marketing Head"
              link1="https://www.instagram.com/shivam.raj.dubey/"
              link2="https://www.linkedin.com/in/shivam-raj-dubey-5610361ba/"
            />
          </div>
          <div>
            <Person
              img={Pratyaksh}
              name="Pratyaksh Singhal"
              post="Joint Logistics Head"
              link1="https://instagram.com/_pratyaksh01?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/pratyaksh-singhal-491799236"
            />
          </div>

          <div>
            <Person
              img={Navneet}
              name="Navneet"
              post="Joint Content Head"
              link1="https://www.linkedin.com/in/k-navneet-vishnu-932a5424a"
              link2="https://www.instagram.com/navneetk_1147/"
            />
          </div>
          <div>
            <Person
              img={Sarvi}
              name="Sarvi Agarwal"
              post="Joint Content Head"
              link1="https://instagram.com/sarvi.agarwal?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/sarvi-agarwal"
            />
          </div>
          <div>
            <Person
              img={Akansha}
              name="Akanksha Sinha"
              post="Joint Graphics Head"
              link1="https://www.linkedin.com/in/umashankar-rawat-41730a48/" //Only Insta userID is provided=
              link2="https://www.linkedin.com/in/akanksha-sinha-a9638a268"
            />
          </div>
          <div>
            <Person
              img={HarshitRawat}
              name="Harshit Rawat"
              post="Joint Head of Events"
              link1="https://www.linkedin.com/in/harshit-rawat-6730571b3?trk=contact-info"
              link2="https://instagram.com/harshitt_rawat?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
          </div>
          <div>
            <Person
              img={AditiSoni}
              name="Aditi Soni"
              post="Joint Graphics Head"
              link1="https://instagram.com/_wtf.adu?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
              link2="https://www.linkedin.com/in/er-aditi-soni"
            />
          </div>
          <div>
            <Person
              img={ArnavNahar}
              name="Arnav Nahar"
              post="Joint Curations Head"
              link1="https://instagram.com/arnavnahar_28?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              link2="https://in.linkedin.com/in/arnav-n-1297a421b"
            />
          </div>
          {/* ADD MORE HEADS */}
        </div>
      </div>
      <div className="pageSeparator" />
      {/* Senior Coordinator */}
      {/* SUMIT😅😅😅 ---> ok bro, Adarsh was here */}
      <div className="grid grid-flow-row justify-center items-center my-20">
        <h1 className="senior justify-self-center">Senior Co-ordinators</h1>
        <div className="gap-6 grid grid-cols-3 justify-evenly w-[100vw]">
          <div>
            <Person
              img={Sumit}
              name="Sumit Kumar"
              post="Senior Coordinator of Web-Dev"
              link1="https://www.linkedin.com/in/er-sumit-kr/"
              link2="https://github.com/07sumit1002"
            />
          </div>
          <div>
            <Person
              img={DhruvRathee}
              name="Dhruv Rathee"
              post="Senior Coordinator Events"
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={SheryaGupta}
              name="Shreya Gupta"
              post="Senior Coordinator Marekting"
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={ParthSarrathi}
              name="Parth Sarrathi"
              post="Senior Coordinator Logistics"
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            <Person
              img={AnandGhugare}
              name="Anand Ghugare"
              post="Senior Coordinator Events"
              link1="https://www.linkedin.com/"
              link2="https://github.com/"
            />
          </div>
          <div>
            {" "}
            <Person
              img={Karishma}
              name="Karishma Dhyani"
              post="Senior Coordinator of Content"
              link1="https://www.linkedin.com/in/karishma-dhyani-6726661ba"
              link2="https://instagram.com/karishma_dhyani?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
            />
          </div>
          <div>
            <Person
              img={Kamya}
              name="Kamya Singh"
              post="Senior Coordinator of Content"
              link1="https://www.instagram.com/invites/contact/?i=554xnfi473ic&utm_content=pj8tkfy"
              link2="https://www.linkedin.com/in/kamya-singh-11b317219"
            />
          </div>
          <div>
            <Person
              img={Chetna}
              name="Chetna Vijay Rai"
              post="Senior Coordinator of Research"
              link1="https://www.linkedin.com/in/chetnarai682004"
              link2="https://instagram.com/chetna_rai.684?igshid=MzRlODBiNWFlZA=="
            />
          </div>
          <div>
            <Person
              img={AnanyaPatel}
              name="Ananya Patel"
              post="Senior Coordinator of Research"
              link1="https://www.linkedin.com/in/ananya-p-23a641208"
              link2="https://instagram.com/ananyaaa_16?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            />
          </div>

          <div>
            <Person
              img={AnantSharma}
              name="Anant Sharma"
              post="Senior Coordinator of Technical"
              link1="www.linkedin.com/in/"
              link2="https://www.instagram.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
