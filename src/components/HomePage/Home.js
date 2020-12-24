import HeroSectionTwo from '../../components/HeroSections/HeroSectionTwo';
import HeroSectionOne from '../../components/HeroSections/HeroSectionOne';
import Ideas from '../../components/Ideas/Ideas';
import Pictures from '../../components/Pictures/Pictures';
import HeroSectionThree from '../../components/HeroSections/HeroSectionThree';
import ImageSlider from '../../components/ImageSlides/ImageSlider';
import { SliderData } from "../../components/ImageSlides/SliderData"
import '../../components/ImageSlides/ImageSlider.css'
import People from "../../components/People/People"
import InputField from '../../components/Input/InputField';

function Home() {
  return (
    <>
       <HeroSectionOne />
       <HeroSectionTwo />
       <Pictures />
       <Ideas />
       <HeroSectionThree />
       <ImageSlider slides={SliderData} />
       <People />
       <InputField />
    </>
  );
}

export default Home;