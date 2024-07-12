import React from 'react'

function Features() {
  return (
    <div className='my-5 pt-5'>
        <div className="container text-center">
            <h4 className="main-heading fw-bold fs-4">Features of Tektime</h4>
            <p className="description">Enhance your team's productivity and streamline your workflow with Tektime.</p>
            <div className="row justify-content-center">
                <div className="col-md-6 mt-4">
                    <img src="Assets/productive-meeting.svg" alt="" className="img-fluid" />
                    <h6 className="main-heading fw-bold fs-6 mt-3 mb-0">Productive meetings</h6>
                    <img src="Assets/border-line.svg" alt="" className="img-fluid" />
                    <p className="description fs-6">Maximize efficiency and collaboration <br className="d-none d-md-block" /> in every meeting.</p>
                </div>
                <div className="col-md-6 mt-4">
                    <img src="Assets/clear-roadmaps.svg" alt="" className="img-fluid" />
                    <h6 className="main-heading fw-bold fs-6 mt-3 mb-0">Clear Roadmaps</h6>
                    <img src="Assets/border-line.svg" alt="" className="img-fluid" />
                    <p className="description fs-6">Visualize your project's future with <br className="d-none d-md-block" /> dynamic and easy-to-follow <br className="d-none d-md-block" /> roadmaps.</p>
                </div>
                <div className="col-md-6 mt-4">
                    <img src="Assets/automatic-transcription.svg" alt="" className="img-fluid" />
                    <h6 className="main-heading fw-bold fs-6 mt-3 mb-0">Automatic Transcription</h6>
                    <img src="Assets/border-line.svg" alt="" className="img-fluid" />
                    <p className="description fs-6">Capture every word with precise, real- <br className="d-none d-md-block" /> time transcription.</p>
                </div>
                <div className="col-md-6 mt-4">
                    <img src="Assets/detailed-reports.svg" alt="" className="img-fluid" />
                    <h6 className="main-heading fw-bold fs-6 mt-3 mb-0">Detailed Reports</h6>
                    <img src="Assets/border-line.svg" alt="" className="img-fluid" />
                    <p className="description fs-6">Receive comprehensive reports <br className="d-none d-md-block" /> summarizing key points and action <br className="d-none d-md-block" /> items.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features