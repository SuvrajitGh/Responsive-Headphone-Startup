import "./overview.css";
import hdpn9 from "../assets/images/hdpn9.jpg";
export const Overview = () => {
  return (
    <>
      <div className="overview flex mt-6 overflow-hidden">
        <div className="overview-image">
          <img src={hdpn9} alt="" />
        </div>
        <div className="overview-content">
          <h3 className=" text-6xl">Overview</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reiciendis, fugiat atque. Quibusdam nemo, optio exercitationem velit
            laborum architecto ad reiciendis magnam, labore odio veniam fuga
            nesciunt, modi minus dignissimos aut facere ut ducimus temporibus
            reprehenderit adipisci voluptate beatae alias recusandae?
          </p>
        </div>
      </div>
    </>
  );
};
