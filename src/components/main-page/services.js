import React from "react"
import css from "./services.module.scss"
import WaterDrop from "../../svg/water-drop.svg"
import Lotus from "../../svg/lotus.svg"
import Mask from "../../svg/mask.svg"

export default () => (
  <>
    <ul className={`${css.wrapper} container `}>
      <li>
        <div>
          <WaterDrop />
          <h4>Only Best Body Rubs</h4>
        </div>
        <p>
          Feel a slim body sliding against yours and have supreme satisfaction
          when visiting a body rub session in our studio.
        </p>
      </li>
      <li>
        <div>
          <Lotus />
          <h4>Intimate Body Experience</h4>
        </div>
        <p>
          Satisfy your lust for life in Nuru massage spa! Try erotic nuru in our
          parlor in Manhattan and get an unforgettable erotic experience!
        </p>
      </li>
      <li>
        <div>
          <Mask />
          <h4>Best Way to Relax</h4>
        </div>
        <p>
          Relieve pressure points, relax, and feel extreme arousal like nothing
          you’ve ever experienced.
        </p>
      </li>
    </ul>
    <h3 className={css.book}>Book by text or call : +1(949)232-6088</h3>
  </>
)
