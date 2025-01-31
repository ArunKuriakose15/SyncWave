import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className="bg-dark text-white py-3 mt-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col">
                            <p className="m-0">© {new Date().getFullYear()} SyncWave. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer