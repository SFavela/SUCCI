"use client"

import Navbar_dashboard from "@/components/navbar_dashboard"
import "../../globals.css"
import "./iba.css"


function page() {
  return (
    <body>
        <Navbar_dashboard/>
        <div className="card-container">
        <div className="card">
            <p className="card__title">Instituto de Bellas Artes</p>
            <div className="card__content">
                <p className="card__description"><a href="https://docs.google.com/document/d/1s3ZouCROdEp63bhClj13388WZMwCJFLE/edit?usp=drive_link&ouid=103218664228079207468&rtpof=true&sd=true">Manual de Organización</a></p>
        </div>
        </div>
	</div>
    </body>
  )
}

export default page