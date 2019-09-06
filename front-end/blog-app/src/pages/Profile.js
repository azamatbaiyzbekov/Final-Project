import React from 'react';
import './Profile.css'


const Profile = () => {
    return (
       
       <>
       
        <div className="container main-secction">
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 image-section">
                <img src="https://png.pngtree.com/thumb_back/fw800/back_pic/00/08/57/41562ad4a92b16a.jpg" />
            </div>
            <div className="row user-left-part">
                <div className="col-md-3 col-sm-3 col-xs-12 user-profil-part pull-left">
                    <div className="row ">
                        <div className="col-md-12 col-md-12-sm-12 col-xs-12 user-image text-center">
                            <img src="https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png" className="rounded-circle" />
                        </div>
                        <div className="col-md-12 col-sm-12 col-xs-12 user-detail-section1 text-center">
                            <button id="btn-contact"  data-toggle="modal" data-target="#contact" className="btn btn-success btn-block follow">Contact me</button> 
                                                    
                        </div>
                        
                       
                    </div>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-12 pull-right profile-right-section">
                    <div className="row profile-right-section-row">
                        <div className="col-md-12 profile-header">
                            <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-6 profile-header-section1 pull-left">
                                    <h1>Welcome to your profile page</h1>
                                    <h5>Tech-Blog</h5>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 profile-header-section1 text-right pull-rigth">
                                    <a href="/search" className="btn btn-primary btn-block">Whatever</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-8">
                                        <ul className="nav nav-tabs" role="tablist">
                                                <li className="nav-item">
                                                  <a className="nav-link active" href="#profile" role="tab" data-toggle="tab"><i className="fas fa-user-circle"></i> Profile Details</a>
                                                </li>
                                                                                             
                                              </ul>
                                              
                                              <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane fade show active" id="profile">
                                                        <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>ID</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>509230671</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Username</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>Juan Perez</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Email</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>juanp@gmail.com</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Profession</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>12345678</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-2">
                                                                    <label>Date Joined</label>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <p>Developer</p>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            </div>
                            </div>
                                <div className="col-md-4 img-main-rightPart">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row image-right-part">
                                                <div className="col-md-6 pull-left image-right-detail">
                                                    <h6>Logo</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="http://camaradecomerciozn.com/" >
                                            <div className="col-md-12 image-right">
                                                <img src="http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png" />
                                            </div>
                                        </a>
                                        <div className="col-md-12 image-right-detail-section2">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="contact">Contact me</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <p for="msj">Fill out the form below</p>
                    </div>
                    <div className="form-group">
                        <label for="txtFullname">Full Name</label>
                        <input type="text" id="txtFullname" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="txtEmail">Email</label>
                        <input type="text" id="txtEmail" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label for="txtPhone">Message</label>
                        <input type="text" id="txtPhone" className="form-control" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary"  data-dismiss="modal">Send</button>
                </div>
            </div>
        </div>
    </div>
    </>
   

    );
};


export default Profile;

