import "./lastest.css"
import LP1 from "../assets/images/LP1.jpg"
import LP2 from "../assets/images/LP2.jpg"
import LP3 from "../assets/images/LP3.jpg"
const Lastest = () => {
  return (
    <>
        <div className="lastestproducts mt-6 ">
            <h3 className=" text-red-600 text-center">Shop</h3>
            <h2 className=" text-slate-900 text-center text-4xl font-semibold">Our Latest Products</h2>
            <div className="link">
                <ul className="flex gap-8 justify-center my-6 font-semibold">
                <li><a href="/">Recommended</a></li>
                <li><a href="/">New</a></li>
                <li><a href="/">Wireless</a></li>
                <li><a href="/">bluetooth</a></li>
                </ul>
            </div>
        </div>
        <div className="display-LP flex items-center justify-between">
                <div className="box h-80  w-80">
                  <div className="top-img">
                    <img src={LP1} alt="music1" />
                  </div>
                  <div className="bottom-content bg-slate-100 font-semibold h-20">
                    <div className="top-content flex justify-between pt-3 mx-3">
                      <h4>MDR-XB450AP</h4>
                      <span>⭐4.6k</span>
                    </div>
                    <div className="bottom-content pt-5">
                      <p className="px-2 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
                <div className="box h-80  w-80">
                  <div className="top-img">
                    <img src={LP2} alt="music1" />
                  </div>
                  <div className="bottom-content bg-slate-100 font-semibold h-20">
                    <div className="top-content flex justify-between pt-3 mx-3">
                      <h4>MDR-XB450AP</h4>
                      <span>⭐4.6k</span>
                    </div>
                    <div className="bottom-content pt-5">
                      <p className="px-2 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
                 <div className="box h-80  w-80">
                  <div className="top-img">
                    <img src={LP3} alt="music1" />
                  </div>
                  <div className="bottom-content bg-slate-100 font-semibold h-20">
                    <div className="top-content flex justify-between pt-3 mx-3">
                      <h4>MDR-XB450AP</h4>
                      <span>⭐4.6k</span>
                    </div>
                    <div className="bottom-content pt-5">
                      <p className="px-2 text-xs">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                  </div>
                </div>
            </div>
    </>
  );
};

export default Lastest;
