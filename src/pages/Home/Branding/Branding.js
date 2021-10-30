import React from 'react';

const Branding = () => {
    return (
        <div>
            <div className="mt-5 mb-5">
                <h2 className="text-center">Featured Item</h2>
                <div className="row container  mt-5 mx-auto">
                    <div className="col-md-6 mb-5">
                        <div className="d-flex flex-column">
                            <h3>Featured Video</h3>
                            <iframe height="315" src="https://www.youtube.com/embed/DEJx0CYrDHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="d-flex flex-column">
                            <h3>Search For Package</h3>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control mb-2" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control mb-2" placeholder="Key Words" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control mb-2" placeholder="Location" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control mb-2" placeholder="Trip Type" />
                                </div>
                                <div className="form-group">
                                    <input type="date" className="form-control mb-2" />
                                </div>
                                <div className="form-group">
                                    <input type="Number" className="form-control mb-2" placeholder="Max-Budget" />
                                </div>
                                <button type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Branding;