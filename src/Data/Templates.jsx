import templateOneImg from "../assets/templates/download (1).png";
import templateTwoImg from "../assets/templates/download (2).png";
import templateThreeImg from "../assets/templates/download.png";
import templateFour from "../assets/templates/template4.png"
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";


export const templates = [
      {
            id:1,
            template_name: "Template One",
            template_img: templateOneImg,
            template: <Template1 />
      },
      {
            id: 2,
            template_name: "Template Two",
            template_img: templateTwoImg,
            template: <Template2 />
      },
      {
            id: 3,
            template_name: "Template Three",
            template_img: templateThreeImg,
            template: <Template3 />
      },
      {
            id: 4,
            template_name: "Template Four",
            template_img: templateFour,
            template: <Template4 />
      }
      
]
