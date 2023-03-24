import React, { Component } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Badminton</div>
        <img src="static/images/badminton.svg" className="w-[300px]" />
        {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
    </div>,
    <div className="item" data-value="2">
        <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Cricket</div>
        <img src="static/images/cricket.svg" className="w-[300px]" />
        {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
    </div>,
    <div className="item" data-value="3">
        <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Football</div>
        <img src="static/images/football.svg" className="w-[300px]" />
        {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
    </div>,
    <div className="item" data-value="4">
        <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Athletics</div>
        <img src="static/images/athletics.jpg" className="rounded-2xl w-[300px]" />
        {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
    </div>,
    <div className="item" data-value="5">
        <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Powerlifting</div>
        <img src="static/images/powerlifting.jpeg" className="rounded-2xl w-[300px]" />
        {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
    </div>,
     <div className="item" data-value="5">
     <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Kabaddi</div>
     <img src="static/images/KABADDI.jpeg" className="rounded-2xl w-[300px]" />
     {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
 </div>,
  <div className="item" data-value="5">
  <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Tennis</div>
  <img src="static/images/tennis.jpg" className=" w-[300px]" />
  {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
</div>,
 <div className="item" data-value="5">
 <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Table Tennis</div>
 <img src="static/images/TT.jpeg" className="w-[300px] rounded-2xl" />
 {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
</div>,
 <div className="item" data-value="5">
 <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Volleyball</div>
 <img src="static/images/volleybal.png" className="rounded-2xl w-[300px]" />
 {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
</div>,
 <div className="item" data-value="5">
 <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Chess</div>
 <img src="static/images/chess.jpg" className="rounded-2xl w-[300px]" />
 {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
</div>,
 <div className="item" data-value="5">
 <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Basketball</div>
 <img src="static/images/basketball.jpg" className="rounded-2xl w-[300px]" />
 {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
</div>,
 <div className="item" data-value="5">
 <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Handball</div>
 <img src="static/images/handball.jpg" className="rounded-2xl file:w-[300px]" />
 {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
</div>,
 <div className="item" data-value="5">
 <div className="stencil text-xl flex justify-center mr-28 font-inter text-white">Taekwondo</div>
 <img src="static/images/taek.jpg" className="rounded-2xl w-[300px]" />
 {/* <div className="flex justify-center mr-28 font-inter text-white">🏆Prize - 20000k</div> */}
</div>,
];

export default function Carousel_home() {

    return (
        <div>
            <AliceCarousel className="text-[40px]"
                mouseTracking
                items={items}
                paddingLeft={50}
                paddingRight={50}
                responsive={responsive}
                infinite={true}
            />
        </div>
    );

}



// export default class Carousel extends Component() {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             slidesToScroll: 1
//         };
//         return (
//             <div>
//                 <h2> Single Item</h2>
//                 <Slider {...settings}>
//                     <div>
//                         <h3>1</h3>
//                     </div>
//                     <div>
//                         <h3>2</h3>
//                     </div>
//                     <div>
//                         <h3>3</h3>
//                     </div>
//                     <div>
//                         <h3>4</h3>
//                     </div>
//                     <div>
//                         <h3>5</h3>
//                     </div>
//                     <div>
//                         <h3>6</h3>
//                     </div>
//                 </Slider>
//             </div>
//         )
//     }
// }